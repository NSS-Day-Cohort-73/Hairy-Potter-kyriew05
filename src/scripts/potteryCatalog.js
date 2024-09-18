const potteryForSale = []

export const toSellOrNotToSell = (pottery) => {
    let price

    if (pottery.weight >= 6) {
        price = 40
    } else {
        price = 20
    } pottery.price = price 

    if (!pottery.cracked) {
        potteryForSale.push(pottery)
    } return pottery
}

export const usePottery = () => {
    return [...potteryForSale]
}