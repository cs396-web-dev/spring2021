export type GroceryItem = { name: string, quantity: number, type: GroceryItemType };

export enum GroceryItemType {
    None = "None",
    Dairy = "Dairy",
    Fruit = "Fruit",
    Grain = "Grain",
    Protein = "Protein",
    Snack = "Snack",
    Vegetable = "Vegetable",
    Other = "Other"
}
