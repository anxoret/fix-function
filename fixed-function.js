"use strict"

function findSubstrings(string, substring1, substring2) {
    if (string.length < 2) return -1;

    let findingOfSubstring1 = string.lastIndexOf(substring1);
    let findingOfSubstring2 = string.lastIndexOf(substring2);

    if (findingOfSubstring1 != -1 && findingOfSubstring2 != -1) {
        return Math.max(findingOfSubstring1, findingOfSubstring2);
    } else if (findingOfSubstring1 != -1) {
        return findingOfSubstring1;
    } else if (findingOfSubstring2 != -1) {
        return findingOfSubstring2;
    } else return -1;

};

console.log(findSubstrings("ПоП", "П", "о"));