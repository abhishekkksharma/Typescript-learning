"use strict";
function getChai(kind) {
    if (typeof kind === 'string') {
        return `Making ${kind} chai...`;
    }
    return `Cjai order: ${kind}`;
}
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}
class kulhadChai {
    serve() {
        return `Serving Kulhad Chai`;
    }
}
class Cutting {
    serve() {
        return `Serving cutting Chai`;
    }
}
function serve(chai) {
    if (chai instanceof kulhadChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj != null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} Sugar`;
    }
    return `Serving custom chai: ${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return "Masala Chai is being made";
            break;
        case "elaichi":
            return "Elaichi Chai is being made";
            break;
        case "ginger":
            return "Ginger Chai is being made";
            break;
    }
}
function brew(order) {
    if ("spicelevel" in order) {
        //
    }
}
function isStringArray(arr) {
}
