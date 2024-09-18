// Imports go first
import { makePottery } from './potteryWheel.js'
import { firePottery } from './kiln.js'
import { toSellOrNotToSell, usePottery } from './potteryCatalog.js'

// Make 5 pieces of pottery at the wheel
const mug = makePottery("mug", 1, 4)
const bowl = makePottery("bowl", 5, 6)
const teapot = makePottery("teapot", 3, 6)
const jar = makePottery("jar", 5, 12)
const platter = makePottery("platter", 4, 2)



// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 1200)
const firedBowl = firePottery(bowl, 2400)
const firedTeapot = firePottery(teapot, 2200)
const firedJar = firePottery(jar, 1600)
const firedPlatter = firePottery(platter, 1000)

// console.log('Fired Mug', firedMug)
// console.log('Fired Bowl', firedBowl)
// console.log('FIred Teapot', firedTeapot)
// console.log('Fired Jar', firedJar)
// console.log('Fired Platter', firedPlatter)

// Determine which ones should be sold, and their price
toSellOrNotToSell(mug)
toSellOrNotToSell(bowl)
toSellOrNotToSell(teapot)
toSellOrNotToSell(jar)
toSellOrNotToSell(platter)

console.log('Pottery for sale:', usePottery())

// Invoke the component function that renders the HTML list

