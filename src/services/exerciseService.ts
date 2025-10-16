import { db } from './database';
import type { Exercise, ExerciseSearchParams } from '../types/exercise';
import { v4 as uuidv4 } from 'uuid';

export class ExerciseService {
  // Create a new exercise
  async create(exerciseData: Omit<Exercise, 'id' | 'createdAt' | 'updatedAt'>): Promise<Exercise> {
    const exercise: Exercise = {
      ...exerciseData,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await db.exercises.add(exercise);
    return exercise;
  }

  // Get exercise by ID
  async getById(id: string): Promise<Exercise | undefined> {
    return await db.exercises.get(id);
  }

  // Get all exercises
  async getAll(): Promise<Exercise[]> {
    return await db.exercises.toArray();
  }

  // Search exercises with filters
  async search(params: ExerciseSearchParams): Promise<Exercise[]> {
    let query = db.exercises.toCollection();

    // Apply filters
    if (params.category) {
      query = db.exercises.where('category').equals(params.category);
    }

    if (params.equipment) {
      query = query.filter((ex) => ex.equipment === params.equipment);
    }

    if (params.difficulty) {
      query = query.filter((ex) => ex.difficulty === params.difficulty);
    }

    if (params.isCustom !== undefined) {
      query = query.filter((ex) => ex.isCustom === params.isCustom);
    }

    // Text search on name
    if (params.query) {
      const searchTerm = params.query.toLowerCase();
      query = query.filter((ex) => ex.name.toLowerCase().includes(searchTerm));
    }

    return await query.toArray();
  }

  // Update an exercise
  async update(id: string, updates: Partial<Exercise>): Promise<Exercise | undefined> {
    const exercise = await db.exercises.get(id);
    if (!exercise) {
      throw new Error(`Exercise with id ${id} not found`);
    }

    const updatedExercise: Exercise = {
      ...exercise,
      ...updates,
      updatedAt: new Date(),
    };

    await db.exercises.update(id, updatedExercise);
    return updatedExercise;
  }

  // Delete an exercise
  async delete(id: string): Promise<void> {
    await db.exercises.delete(id);
  }

  // Get exercises by muscle group
  async getByMuscleGroup(muscleGroup: string): Promise<Exercise[]> {
    return await db.exercises.where('category').equals(muscleGroup).toArray();
  }

  // Get exercises by equipment
  async getByEquipment(equipment: string): Promise<Exercise[]> {
    return await db.exercises.filter((ex) => ex.equipment === equipment).toArray();
  }

  // Get favorite exercises (can be expanded with user preferences later)
  async getFavorites(): Promise<Exercise[]> {
    // Placeholder - will be enhanced when we add user-specific favorites
    return await db.exercises.limit(10).toArray();
  }

  // Bulk import exercises
  async bulkImport(exercises: Omit<Exercise, 'id' | 'createdAt' | 'updatedAt'>[]): Promise<void> {
    const exercisesWithIds: Exercise[] = exercises.map((ex) => ({
      ...ex,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await db.exercises.bulkAdd(exercisesWithIds);
  }

  // Get exercise count
  async getCount(): Promise<number> {
    return await db.exercises.count();
  }
}

// Export singleton instance
export const exerciseService = new ExerciseService();
