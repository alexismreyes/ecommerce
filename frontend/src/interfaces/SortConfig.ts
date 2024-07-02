import { Category } from "./Category"
import { Product } from "./Product"

export interface SortConfigCategory{ 
    key: keyof Category,
    ascending : boolean
}

export interface SortConfigProduct{
    key: keyof Product,
    ascending: boolean
}