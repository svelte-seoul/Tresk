export type Task = {
    main: String,
    subTasks: number[]
}

export type TaskStorage = {[key: number] : Task}
