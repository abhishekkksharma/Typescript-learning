function wrapInArray<T>(item: T): T[] {
    return [item];
}

wrapInArray("masala")
wrapInArray(42)
wrapInArray({ flavour: "masala" })

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b];
}

pair("tea", 20)
pair(10, 20)
pair(2, "flavours")
pair("masala", { price: 20 })

interface Box<T>{
    content:T
}

const numberBox:Box<number> = {content:10}
const stringBox:Box<string> = {content:"cube"}
