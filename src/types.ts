export type CardType = "village" | "drawer" | "trasher" | "payload" | "cantrip" | "draw-to-x" | "gainer" | "victory" | "sifter" | "treasure" | "attack" | "reaction" | "throne" | "junker"

export type TrashType = "treasure" | "victory"

export type Card = {
    set: string,
    name: string,
    cardTypes: CardType[],
    couldBeVillage?: Boolean,
    couldBeDrawer?: Boolean,
    couldBeTrasher?: Boolean,
    trashType?: string,
    hasBuy?: Boolean,
    image: string,
    cost: Number,
}

export type Reshuffledcard = {
    card: Card;
    param?: string;
}