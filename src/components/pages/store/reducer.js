const initialState = {
    pageChecked: "contact",
    personChecked: "",
    detailsShow: "",
    initDetails: true,
    contactList: {
        "a": [],
        "b": [],
        "c": [],
        "d": [
            {
                name: "Dad",
                profile: "/images/contactProfiles/dad.png",
                company: "",
                email: "",
                phone: "",
                mobile: "",
                address: "",
                birthday: "",
                relationship: ""
            },
        ],
        "e": [
            {
                name: "Emma",
                profile: "/images/contactProfiles/emma.png",
                company: "",
                email: "",
                phone: "",
                mobile: "",
                address: "",
                birthday: "",
                relationship: ""
            },
        ],
        "f": [],
        "g": [
            {
                name: "Grand dad",
                profile: "/images/contactProfiles/granddad.png",
                company: "",
                email: "",
                phone: "",
                mobile: "",
                address: "",
                birthday: "",
                relationship: ""
            },
            {
                name: "Grand mom",
                profile: "/images/contactProfiles/grandmom.png",
                company: "",
                email: "",
                phone: "",
                mobile: "",
                address: "",
                birthday: "",
                relationship: ""
            },
        ],
        "h": [],
        "i": [],
        "j": [],
        "k": [],
        "l": [],
        "m": [
            {
                name: "Mom",
                profile: "/images/contactProfiles/mom.png",
                company: "",
                email: "",
                phone: "",
                mobile: "",
                address: "",
                birthday: "",
                relationship: ""
            },
        ],
        "n": [],
        "o": [],
        "p": [],
        "q": [],
        "r": [],
        "s": [
            {
                name: "Sophia",
                profile: "/images/contactProfiles/sophia.png",
                company: "",
                email: "",
                phone: "",
                mobile: "",
                address: "",
                birthday: "",
                relationship: ""
            },
        ],
        "t": [],
        "u": [],
        "v": [],
        "w": [
            {
                name: "Wife",
                profile: "/images/contactProfiles/wife.png", company: "",
                email: "",
                phone: "",
                mobile: "",
                address: "",
                birthday: "",
                relationship: ""
            },
        ],
        "x": [],
        "y": [],
        "z": [
            {
                name: "Zoey",
                profile: "/images/contactProfiles/zoey.png", company: "",
                email: "",
                phone: "",
                mobile: "",
                address: "",
                birthday: "",
                relationship: ""
            },
        ],
    }
}

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PAGE_CHANGE":
            return {
                pageChecked: action.checked
            }
        case "PERSON_CHANGE":
            return {
                personChecked: action.checked,
                initDetails: false,
                detailsShow: "detail"
            }
        case "DETAILS_CHANGE":
            return {
                detailsShow: action.checked
            }
        default:
            return state;
    }
}
