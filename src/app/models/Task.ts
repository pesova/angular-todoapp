export interface ITask {
    id?:number;
    text:string;
    day: string | null,
    reminder?: boolean,
    completed?:boolean;
    created_at?: string,
    updated_at?: string,
}