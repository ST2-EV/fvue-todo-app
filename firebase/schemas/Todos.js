import { fCollection } from '../odm/fCollection'
import { REQUIRED, OPTIONAL } from '../odm/helpers'

// add Collection schemas here

export const Todos = new fCollection({
    "___name": "Todos",
    "title": ["String", REQUIRED],
    "madeBy": ["String", REQUIRED],
    "done": ["Boolean", REQUIRED]
})