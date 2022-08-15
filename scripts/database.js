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
    minedMinerals: {},
    colonyMinerals: {},
    colonies: {
        earth: [{ id: 1, name: "United Nations", },
        { id: 2, name: "Luna", },
        { id: 3, name: "EMEA" },
        { id: 4, name: "APAC" },
        { id: 5, name: "Americas" },],
        mars: [{ id: 6, name: "Olympus Mons" },
        { id: 7, name: "Mariner Valley" },
        { id: 8, name: "Deimos" },
        { id: 9, name: "Londres Nova" },
        { id: 10, name: "Dhanbad Nova" },],
        belt: [{ id: 11, name: "Ceres" },
        { id: 12, name: "Eros" },
        { id: 13, name: "Anderson Station" },
        { id: 14, name: "Tycho Station" },
        ],
    },
    facilities: {
        jovian: [{ id: 1, name: "Callisto", active: true },
        { id: 2, name: "Europa", active: false },
        { id: 3, name: "Ganymede", active: true },
        { id: 4, name: "Io", active: true },],
        saturnian: [{ id: 5, name: "Rhea", active: true },
        { id: 6, name: "Phoebe", active: true },
        { id: 7, name: "Titan", active: false },
        { id: 8, name: "Iapetus", active: true },],
        uranian: { id: 9, name: "Titania", active: false },
        neptunian: { id: 10, name: "Triton", active: true },
    },
    purchases: {},
} //facilities, colonies, colonyMinerals, minedMinerals, governors, minerals, transientState

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setColony = (colonyId) => {
    database.transientState.selectedColony = colonyId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setColonyMineral = (colonyMineralId) => {
    database.transientState.selectedColonyMineral = colonyMineralId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setMinedMineral = (minedMineralId) => {
    database.transientState.selectedMinedMineral = minedMineralId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setMineral = (mineralId) => {
    database.transientState.selectedMineral = mineralId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const getFacilities = () => {
    return database.facilities.map(f => ({ ...f }))
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

