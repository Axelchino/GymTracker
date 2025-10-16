export interface Set {
  id: string;
  workoutLogId: string;
  exerciseId: string;
  setNumber: number;
  weight: number;
  reps: number;
  rpe?: number; // Rate of Perceived Exertion (1-10)
  rir?: number; // Reps in Reserve
  isWarmup: boolean;
  isDropSet: boolean;
  isFailure: boolean;
  completed: boolean;
  notes?: string;
  timestamp: Date;
}

export interface WorkoutExercise {
  exerciseId: string;
  orderIndex: number;
  targetSets: number;
  targetReps: number;
  targetWeight?: number;
  restSeconds?: number;
  notes?: string;
}

export interface LoggedExercise {
  exerciseId: string;
  exerciseName: string;
  orderIndex: number;
  sets: Set[];
  totalVolume: number;
  notes?: string;
}

export interface WorkoutTemplate {
  id: string;
  userId: string;
  name: string;
  description?: string;
  exercises: WorkoutExercise[];
  isActive: boolean;
  schedule?: {
    daysOfWeek: number[]; // 0-6 (Sun-Sat)
    weekNumber?: number; // For multi-week programs
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkoutLog {
  id: string;
  userId: string;
  templateId?: string;
  name: string;
  date: Date;
  startTime: Date;
  endTime?: Date;
  duration?: number; // minutes
  totalVolume: number; // calculated
  exercises: LoggedExercise[];
  notes?: string;
  synced: boolean;
  createdAt: Date;
}

export type PRType = 'weight' | 'reps' | 'volume' | '1rm';

export interface PersonalRecord {
  id: string;
  userId: string;
  exerciseId: string;
  exerciseName: string;
  type: PRType;
  value: number;
  reps?: number; // for weight PRs
  date: Date;
  workoutLogId: string;
  previousRecord?: number;
}

export interface WorkoutStats {
  totalWorkouts: number;
  totalVolume: number;
  totalSets: number;
  totalReps: number;
  averageDuration: number;
  currentStreak: number;
  longestStreak: number;
  personalRecords: PersonalRecord[];
}
