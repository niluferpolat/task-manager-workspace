export interface TaskEntity {
    id: number;
    title: string;
    status: string;
    userId: number;
    taskText: string;
}
export interface TaskRequest {
    title: string;
    userId: number;
    taskText: string;
}
