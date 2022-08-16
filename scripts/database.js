const database = {

    transientState: {},
    minerals: [
        { id: 1, name: "Iron" },
        { id: 2, name: "Chromium" },
        { id: 3, name: "Molybdenum" },
        { id: 4, name: "Ice" },
        { id: 5, name: "Phosphorus" },
        { id: 6, name: "Nickel" },
        { id: 7, name: "Cobalt" },
        { id: 8, name: "Gold" },
        { id: 9, name: "Platinum" },
        { id: 10, name: "Rhodium" },
    ],
    governors:
        [
            { id: 1, active: true, name: "Chrisjen Avasarala", colonyId: 1 },
            { id: 2, active: false, name: "Esteban Sorrento-Gillis", colonyId: 2 },
            { id: 3, active: true, name: "Sadavir Errinwright", colonyId: 3 },
            { id: 4, active: false, name: "James R. Holden", colonyId: 5 },
            { id: 5, active: true, name: "Amos Burton", colonyId: 4 },
            { id: 6, active: true, name: "Alex Kamal", colonyId: 6 },
            { id: 10, active: true, name: "Roberta Draper", colonyId: 7 },
            { id: 7, active: true, name: "Naomi Nagata", colonyId: 11 },
            { id: 8, active: true, name: "Anderson Dawes", colonyId: 13 },
            { id: 9, active: true, name: "Fred Johnson", colonyId: 14 },
            { id: 11, active: false, name: "James S.A. Corey", colonyId: 8 },
            { id: 12, active: false, name: "Camina Drummer", colonyId: 9 },
            { id: 13, active: true, name: "Josephus A. Miller ", colonyId: 10 },
            { id: 14, active: true, name: "Julietta A. Mao", colonyId: 12 },

        ],
    minedMinerals: [
        { id: 1, facilityId: 1, mineralId: 4, amount: 70 },
        { id: 2, facilityId: 1, mineralId: 5, amount: 38 },
        { id: 3, facilityId: 1, mineralId: 8, amount: 120 },
        { id: 4, facilityId: 2, mineralId: 2, amount: 40 },
        { id: 5, facilityId: 2, mineralId: 9, amount: 90 },
        { id: 6, facilityId: 3, mineralId: 1, amount: 145 },
        { id: 7, facilityId: 3, mineralId: 4, amount: 60 },
        { id: 8, facilityId: 3, mineralId: 6, amount: 30 },
        { id: 9, facilityId: 4, mineralId: 1, amount: 15},
        { id: 10, facilityId: 4, mineralId: 5, amount: 100},
        { id: 11, facilityId: 5, mineralId: 10, amount: 300},
        { id: 12, facilityId: 6, mineralId: 1, amount: 80 },
        { id: 13, facilityId: 6, mineralId: 4, amount: 34 },
        { id: 14, facilityId: 6, mineralId: 8, amount: 67 },
        { id: 15, facilityId: 7, mineralId: 5, amount: 25 },
        { id: 16, facilityId: 7, mineralId: 3, amount: 18 },
        { id: 17, facilityId: 7, mineralId: 7, amount: 190 },
        { id: 18, facilityId: 8, mineralId: 10, amount: 230 },
        { id: 19, facilityId: 9, mineralId: 9, amount: 54 },
        { id: 20, facilityId: 10, mineralId: 3, amount: 78 },
    ]
,

    colonyMinerals: {},
    colonies: [
    { id: 1, name: "United Nations", },
        { id: 2, name: "Luna", },
        { id: 3, name: "EMEA" },
        { id: 4, name: "APAC" },
        { id: 5, name: "Americas" },
        { id: 6, name: "Olympus Mons" },
        { id: 7, name: "Mariner Valley" },
        { id: 8, name: "Deimos" },
        { id: 9, name: "Londres Nova" },
        { id: 10, name: "Dhanbad Nova" },
        { id: 11, name: "Ceres" },
        { id: 12, name: "Eros" },
        { id: 13, name: "Anderson Station" },
        { id: 14, name: "Tycho Station" },
        ],

    facilities: [
        { id: 1, name: "Callisto", active: true },
        { id: 2, name: "Europa", active: false },
        { id: 3, name: "Ganymede", active: true },
        { id: 4, name: "Io", active: true },
        { id: 5, name: "Rhea", active: true },
        { id: 6, name: "Phoebe", active: true },
        { id: 7, name: "Titan", active: false },
        { id: 8, name: "Iapetus", active: true },
        { id: 9, name: "Titania", active: false },
        { id: 10, name: "Triton", active: true },
    ],
    purchases: {},
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("facilityChanged"))
}
export const setColony = (colonyId) => {
    database.transientState.selectedColony = colonyId
    document.dispatchEvent(new CustomEvent("colonyChanged"))
}
export const setColonyMineral = (colonyMineralId) => {
    database.transientState.selectedColonyMineral = colonyMineralId
    document.dispatchEvent(new CustomEvent("colonyMineralChanged"))
}
export const setMinedMineral = (minedMineralId) => {
    database.transientState.selectedMinedMineral = minedMineralId
    document.dispatchEvent(new CustomEvent("minedMineralChanged"))
}
export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    document.dispatchEvent(new CustomEvent("governorChanged"))
}
export const setMineral = (mineralId) => {
    database.transientState.selectedMineral = mineralId
    document.dispatchEvent(new CustomEvent("mineralChanged"))
}
export const getFacilities = () => {
    return database.facilities.map(facility => ({ ...facility }))
}
export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}
export const getColonyMinerals = () => {
    return database.colonyMinerals.map(colonyMineral => ({ ...colonyMineral }))
}
export const getMinedMinerals = () => {
    return database.minedMinerals.map(minedMineral => ({ ...minedMineral }))
}
export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}
export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}

export const purchaseMineral = () => {

    const mineralOrder = { ...database.transientState }
    const lastIndex = database.purchases.length - 1
    mineralOrder.id = database.purchases[lastIndex].id + 1
    database.purchases.push(mineralOrder)
    database.transientState = {}
    // Broadcast custom event to entire document so that the
    // application can re-render and update state
    document.dispatchEvent(new CustomEvent("stateChanged"))

}

