import { Search, Filter } from 'lucide-react';
import { useEffect, useState } from 'react';
import { exerciseService } from '../services/exerciseService';
import type { Exercise } from '../types/exercise';

export function ExerciseLibrary() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Muscle group aliases - map common nicknames to official names
  const muscleAliases: Record<string, string[]> = {
    'traps': ['trapezius'],
    'delts': ['deltoids', 'shoulders'],
    'lats': ['latissimus dorsi'],
    'pecs': ['pectorals', 'chest'],
    'abs': ['abdominals', 'core'],
    'quads': ['quadriceps'],
    'hams': ['hamstrings'],
    'calves': ['gastrocnemius', 'soleus'],
    'bis': ['biceps'],
    'tris': ['triceps'],
    'glutes': ['gluteus'],
  };

  // Expand search term with aliases
  const expandWithAliases = (term: string): string[] => {
    const lowerTerm = term.toLowerCase();
    const expansions = [lowerTerm];

    // Check if this term is an alias
    if (muscleAliases[lowerTerm]) {
      expansions.push(...muscleAliases[lowerTerm]);
    }

    // Check if any alias maps to this term
    Object.entries(muscleAliases).forEach(([alias, targets]) => {
      if (targets.some(target => target.includes(lowerTerm))) {
        expansions.push(alias);
      }
    });

    return expansions;
  };

  useEffect(() => {
    async function loadExercises() {
      try {
        const allExercises = await exerciseService.getAll();
        setExercises(allExercises);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load exercises:', error);
        setLoading(false);
      }
    }
    loadExercises();
  }, []);

  // Multi-keyword search - split search term into individual words
  const searchKeywords = searchTerm.toLowerCase().trim().split(/\s+/).filter(Boolean);

  const searchResults = exercises.reduce((acc, ex) => {
    if (searchKeywords.length === 0) {
      // No search, show all
      acc.primary.push(ex);
      return acc;
    }

    // Check if ALL keywords match somewhere in the exercise
    const allKeywordsMatch = searchKeywords.every(keyword => {
      // Expand keyword with aliases
      const expandedTerms = expandWithAliases(keyword);

      const nameMatch = expandedTerms.some(term => ex.name.toLowerCase().includes(term));
      const categoryMatch = expandedTerms.some(term => ex.category.toLowerCase().includes(term));
      const equipmentMatch = expandedTerms.some(term => ex.equipment.toLowerCase().includes(term));
      const primaryMatch = ex.primaryMuscles.some(m =>
        expandedTerms.some(term => m.toLowerCase().includes(term))
      );
      const secondaryMatch = ex.secondaryMuscles.some(m =>
        expandedTerms.some(term => m.toLowerCase().includes(term))
      );

      return nameMatch || categoryMatch || equipmentMatch || primaryMatch || secondaryMatch;
    });

    if (!allKeywordsMatch) {
      return acc;
    }

    // Now determine if it's a primary or secondary match
    const hasPrimaryMatch = searchKeywords.some(keyword => {
      const expandedTerms = expandWithAliases(keyword);

      const nameMatch = expandedTerms.some(term => ex.name.toLowerCase().includes(term));
      const categoryMatch = expandedTerms.some(term => ex.category.toLowerCase().includes(term));
      const primaryMatch = ex.primaryMuscles.some(m =>
        expandedTerms.some(term => m.toLowerCase().includes(term))
      );
      return nameMatch || categoryMatch || primaryMatch;
    });

    const hasSecondaryMatch = searchKeywords.some(keyword => {
      const expandedTerms = expandWithAliases(keyword);
      return ex.secondaryMuscles.some(m =>
        expandedTerms.some(term => m.toLowerCase().includes(term))
      );
    });

    if (hasPrimaryMatch) {
      acc.primary.push(ex);
    } else if (hasSecondaryMatch) {
      acc.secondary.push(ex);
    }

    return acc;
  }, { primary: [] as Exercise[], secondary: [] as Exercise[] });

  // Sort by popularity rank (your manual rankings)
  searchResults.primary.sort((a, b) => {
    // Primary sort: popularity rank (higher is better)
    return b.popularityRank - a.popularityRank;
  });

  // Sort secondary results by popularity only
  searchResults.secondary.sort((a, b) => b.popularityRank - a.popularityRank);

  const filteredExercises = [...searchResults.primary, ...searchResults.secondary];
  const hasSecondaryResults = searchTerm && searchResults.secondary.length > 0;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-400">Loading exercises...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Exercise Library</h1>
        <p className="text-gray-400">{exercises.length} exercises available</p>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search exercises..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-blue transition-colors"
          />
        </div>
        <button className="btn-secondary px-4">
          <Filter size={20} />
        </button>
      </div>

      {/* Primary Results */}
      {searchResults.primary.length > 0 && (
        <div>
          {searchTerm && (
            <h2 className="text-lg font-semibold mb-3 text-gray-300">
              Primary Target Muscles
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.primary.map((exercise) => (
              <div key={exercise.id} className="card hover:border-gray-600 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold">{exercise.name}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      exercise.difficulty === 'Beginner'
                        ? 'bg-primary-green/20 text-primary-green'
                        : exercise.difficulty === 'Intermediate'
                          ? 'bg-primary-yellow/20 text-primary-yellow'
                          : 'bg-primary-red/20 text-primary-red'
                    }`}
                  >
                    {exercise.difficulty}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  <span className="text-primary-blue">{exercise.category}</span> • {exercise.equipment}
                </p>
                <div className="space-y-1 mt-2">
                  {exercise.primaryMuscles.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {exercise.primaryMuscles.map((muscle) => (
                        <span key={muscle} className="text-xs bg-primary-blue/20 text-primary-blue px-2 py-1 rounded font-medium">
                          {muscle}
                        </span>
                      ))}
                    </div>
                  )}
                  {exercise.secondaryMuscles.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {exercise.secondaryMuscles.map((muscle) => (
                        <span key={muscle} className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-400">
                          {muscle}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Secondary Results */}
      {hasSecondaryResults && (
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-400">
            Also Works (Secondary Target)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.secondary.map((exercise) => (
              <div key={exercise.id} className="card hover:border-gray-600 transition-colors opacity-80">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold">{exercise.name}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      exercise.difficulty === 'Beginner'
                        ? 'bg-primary-green/20 text-primary-green'
                        : exercise.difficulty === 'Intermediate'
                          ? 'bg-primary-yellow/20 text-primary-yellow'
                          : 'bg-primary-red/20 text-primary-red'
                    }`}
                  >
                    {exercise.difficulty}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-2">
                  <span className="text-primary-blue">{exercise.category}</span> • {exercise.equipment}
                </p>
                <div className="space-y-1 mt-2">
                  {exercise.primaryMuscles.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {exercise.primaryMuscles.map((muscle) => (
                        <span key={muscle} className="text-xs bg-primary-blue/20 text-primary-blue px-2 py-1 rounded font-medium">
                          {muscle}
                        </span>
                      ))}
                    </div>
                  )}
                  {exercise.secondaryMuscles.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {exercise.secondaryMuscles.map((muscle) => (
                        <span key={muscle} className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-400">
                          {muscle}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredExercises.length === 0 && (
        <div className="card text-center py-12 text-gray-400">
          <p>No exercises found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
}
