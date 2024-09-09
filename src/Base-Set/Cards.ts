import { Card } from "../types"
import artisan from "./BaseSetImages/Artisan.jpg"
import bandit from "./BaseSetImages/Bandit.jpg"
import bureaucrat from "./BaseSetImages/Bureaucrat.jpg"
import cellar from "./BaseSetImages/Cellar.jpg"
import chapel from "./BaseSetImages/Chapel.jpg"
import council_room from "./BaseSetImages/Council_Room.jpg"
import festival from "./BaseSetImages/Festival.jpg"
import gardens from "./BaseSetImages/Gardens.jpg"
import harbinger from "./BaseSetImages/Harbinger.jpg"
import laboratory from "./BaseSetImages/Laboratory.jpg"
import library from "./BaseSetImages/Library.jpg"
import market from "./BaseSetImages/Market.jpg"
import merchant from "./BaseSetImages/Merchant.jpg"
import militia from "./BaseSetImages/Militia.jpg"
import mine from "./BaseSetImages/Mine.jpg"
import moat from "./BaseSetImages/Moat.jpg"
import moneylender from "./BaseSetImages/Moneylender.jpg"
import poacher from "./BaseSetImages/Poacher.jpg"
import remodel from "./BaseSetImages/Remodel.jpg"
import sentry from "./BaseSetImages/Sentry.jpg"
import smithy from "./BaseSetImages/Smithy.jpg"
import throne_room from "./BaseSetImages/Throne_Room.jpg"
import vassal from "./BaseSetImages/Vassal.jpg"
import village from "./BaseSetImages/Village.jpg"
import witch from "./BaseSetImages/Witch.jpg"
import workshop from "./BaseSetImages/Workshop.jpg"

export const Artisan = {
    set: "Base Set",
    name: "Artisan",
    cardTypes: ["payload", "gainer"],
    image: artisan,
    cost: 6,
} as Card

export const Bandit = {
    set: "Base Set",
    name: "Bandit",
    cardTypes: ["payload", "gainer"],
    image: bandit,
    cost: 5,
} as Card

export const Bureaucrat = {
    set: "Base Set",
    name: "Bureaucrat",
    cardTypes: ["payload", "gainer"],
    image: bureaucrat,
    cost: 4
} as Card

export const Cellar = {
    set: "Base Set",
    name: "Cellar",
    cardTypes: ["sifter"],
    image: cellar,
    cost: 2,
} as Card

export const Chapel = {
    set: "Base Set",
    name: "Chapel",
    cardTypes: ["trasher"],
    image: chapel,
    cost: 2,
} as Card

export const Council_Room = {
    set: "Base Set",
    name: "Council_Room",
    cardTypes: ["drawer"],
    image: council_room,
    cost: 5,
    hasBuy: true
} as Card


export const Festival = {
    set: "Base Set",
    name: "Festival",
    cardTypes: ["village", "payload"],
    image: festival,
    hasBuy: true,
    cost: 5,
} as Card

export const Gardens = {
    set: "Base Set",
    name: "Gardens",
    cardTypes: ["victory"],
    image: gardens,
    cost: 4,
} as Card

export const Harbinger = {
    set: "Base Set",
    name: "Harbinger",
    cardTypes: ["cantrip"],
    image: harbinger,
    cost: 3,
} as Card

export const Laboratory = {
    set: "Base Set",
    name: "Laboratory",
    cardTypes: ["cantrip", "drawer"],
    image: laboratory,
    cost: 5,
} as Card

export const Library = {
    set: "Base Set",
    name: "Library",
    cardTypes: ["draw-to-x"],
    image: library,
    cost: 5,
} as Card

export const Market = {
    set: "Base Set",
    name: "Market",
    cardTypes: ["cantrip"],
    image: market,
    hasBuy: true,
    cost: 5,
} as Card

export const Merchant = {
    set: "Base Set",
    name: "Merchant",
    cardTypes: ["cantrip"],
    image: merchant,
    cost: 3,
} as Card

export const Militia = {
    set: "Base Set",
    name: "Militia",
    cardTypes: ["attack"],
    image: militia,
    cost: 4,
} as Card

export const Mine = {
    set: "Base Set",
    name: "Mine",
    cardTypes: ["payload"],
    image: mine,
    cost: 5,
} as Card

export const Moat = {
    set: "Base Set",
    name: "Moat",
    cardTypes: ["drawer", "reaction"],
    image: moat,
    cost: 2,
} as Card

export const Moneylender = {
    set: "Base Set",
    name: "Moneylender",
    cardTypes: ["trasher"],
    image: moneylender,
    cost: 4,
    trashType: "treasure",
} as Card

export const Poacher = {
    set: "Base Set",
    name: "Poacher",
    cardTypes: ["cantrip"],
    image: poacher,
    cost: 4,
} as Card

export const Remodel = {
    set: "Base Set",
    name: "Remodel",
    cardTypes: ["trasher", "payload"],
    image: remodel,
    cost: 4,
} as Card

export const Sentry = {
    set: "Base Set",
    name: "Sentry",
    cardTypes: ["trasher", "cantrip", "sifter"],
    image: sentry,
    cost: 5,
} as Card

export const Smithy = {
    set: "Base Set",
    name: "Smithy",
    cardTypes: ["drawer"],
    image: smithy,
    cost: 4,
} as Card

export const Throne_Room = {
    set: "Base Set",
    name: "Throne_Room",
    cardTypes: ["throne"],
    image: throne_room,
    couldBeVillage: true,
    cost: 4,
} as Card

export const Vassal = {
    set: "Base Set",
    name: "Vassal",
    cardTypes: ["payload"],
    image: vassal,
    cost: 3,
} as Card

export const Village = {
    set: "Base Set",
    name: "Village",
    cardTypes: ["village"],
    image: village,
    cost: 3,
} as Card

export const Witch = {
    set: "Base Set",
    name: "Witch",
    cardTypes: ["drawer", "attack", "junker"],
    image: witch,
    cost: 5,
} as Card

export const Workshop = {
    set: "Base Set",
    name: "Workshop",
    cardTypes: ["gainer", "payload"],
    image: workshop,
    cost: 3,
} as Card

export const baseCards: Card[] = [
    Artisan,
    Bandit,
    Bureaucrat,
    Cellar,
    Chapel,
    Council_Room,
    Festival,
    Gardens,
    Harbinger,
    Laboratory,
    Library,
    Market,
    Merchant,
    Militia,
    Mine,
    Moat,
    Moneylender,
    Poacher,
    Remodel,
    Sentry,
    Smithy,
    Throne_Room,
    Vassal,
    Village,
    Witch,
    Workshop,
  ];


