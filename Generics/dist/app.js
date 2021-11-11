"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObj = merge({ name: "DMB", hobbies: ["Andrea"] }, { age: 23 });
console.log(mergedObj);
function countAndDescribe(element) {
    var descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 0) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(["Sports", "Cooking"]));
//# sourceMappingURL=app.js.map