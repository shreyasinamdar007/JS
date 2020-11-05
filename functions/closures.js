const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter() 
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

const createAdder = (a) => {
    return(b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(23))



const tip = (tippercent) => {
    return(amount) => {
        return (tippercent/100) * amount;
    }
}

const paid = tip(20)
console.log(paid(141))