// code your solution here
function saturdayFun(s = "roller-skate") {
    return `This Saturday, I want to ${s}!`;
}

const mondayWork = function (s = "go to the office") {
    return `This Monday, I will ${s}.`;
}

function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}