export const incNumber = (num) => {
    return {
        type: "INCREMENT",
        payload: num
    }
}

export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}

// multiplier divider

export const mulNumber = () => {
    return {
        type: "MULTIPLICATION"
    }
}

export const divNumber = () => {
    return {
        type: "DIVISION"
    }
}