export type MuscleGroup =
  | 'Chest'
  | 'Back'
  | 'Shoulders'
  | 'Biceps'
  | 'Triceps'
  | 'Forearms'
  | 'Abs'
  | 'Obliques'
  | 'Quads'
  | 'Hamstrings'
  | 'Glutes'
  | 'Calves'
  | 'Traps'
  | 'Lats';

export type Equipment =
  | 'Barbell'
  | 'Dumbbell'
  | 'Cable'
  | 'Machine'
  | 'Bodyweight'
  | 'Resistance Band'
  | 'Kettlebell'
  | 'Smith Machine'
  | 'Other';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type MuscleInvolvement = 'primary' | 'secondary';

export interface Exercise {
  id: string;
  name: string;
  category: MuscleGroup;
  equipment: Equipment;
  difficulty: Difficulty;
  primaryMuscles: MuscleGroup[];
  secondaryMuscles: MuscleGroup[];
  muscleMap: Record<string, MuscleInvolvement>;
  instructions: string;
  videoUrl?: string;
  imageUrl?: string;
  isCustom: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ExerciseSearchParams {
  query?: string;
  category?: MuscleGroup;
  equipment?: Equipment;
  difficulty?: Difficulty;
  isCustom?: boolean;
}
