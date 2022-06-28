// keep _id to match type of mongodb
export interface ImageSchema {
    _id: string,
    origin: string,
    originID: string,
    user: UserSchema,
    extension: string,
    path: string,
    width: number,
    height: number,
    title: string,
    description: string,
    license: string,
    creationDate: string
    tags: TagSchema[] | undefined,
}

// keep _id to match type of mongodb
export interface TagSchema {
    _id: string,
    name: string,
    origin: string,
    creationDate: string,
}

export interface UserSchema {
    _id: string,
    origin: string,
    name: string,
    originID: string,
    creationDate: string,
}