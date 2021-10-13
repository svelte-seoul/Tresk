export type Task = {
    main: String,

    // Todo
    subTasks: (Task | number)[]
}

export type TaskStorage = {[key: number] : Task}
