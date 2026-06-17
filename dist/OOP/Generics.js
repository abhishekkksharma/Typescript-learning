function wrapInArray(item) {
    return [item];
}
wrapInArray("masala");
wrapInArray(42);
wrapInArray({ flavour: "masala" });
function pair(a, b) {
    return [a, b];
}
pair("tea", 20);
pair(10, 20);
pair(2, "flavours");
pair("masala", { price: 20 });
const numberBox = { content: 10 };
const stringBox = { content: "cube" };
export {};
