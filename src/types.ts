export type Task = {
    main: String,
    subTasks: Task[]
}

export type TaskStorage = {[key: number] : Task}
