export type Content = string

export type Task = {
    main: Content,
    subTasks: number[]
}

export type TaskStorage = {[key: number] : Task}
