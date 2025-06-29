const level1 = [
    ["source", "pipe-l-tr", "empty", "empty", "empty"],
    ["empty", "pipe-s-h", "empty", "empty", "empty"],
    ["empty", "pipe-s-h", "empty", "empty", "empty"],
    ["empty", "pipe-s-v", "empty", "empty", "empty"],
    ["empty", "pipe-l-tl", "pipe-s-v", "pipe-s-v", "home"]
];

const level1_winningCombination = [
    ["source", "pipe-l-bl", "empty", "empty", "empty"],
    ["empty", "pipe-s-v", "empty", "empty", "empty"],
    ["empty", "pipe-s-v", "empty", "empty", "empty"],
    ["empty", "pipe-s-v", "empty", "empty", "empty"],
    ["empty", "pipe-l-tr", "pipe-s-h", "pipe-s-h", "home"]
];

const level2 = [
    ["source", "pipe-l-tr", "empty", "empty", "empty"],
    ["home", "pipe-c", "pipe-l-br", "home", "pipe-l-br"],
    ["empty", "pipe-s-v", "pipe-l-tr", "pipe-s-h", "pipe-l-tr"],
    ["home", "pipe-c", "pipe-s-h", "home", "empty"],
    ["empty", "home", "empty", "empty", "empty"]
];

const level2_winningCombination = [
    ["source", "pipe-l-bl", "empty", "empty", "empty"],
    ["home", "pipe-c", "pipe-l-bl", "home", "pipe-l-bl"],
    ["empty", "pipe-s-v", "pipe-l-tr", "pipe-s-h", "pipe-l-tl"],
    ["home", "pipe-c", "pipe-s-h", "home", "empty"],
    ["empty", "home", "empty", "empty", "empty"]
];

const level3 = [
    ["home", "pipe-s-v", "pipe-s-h", "source", "pipe-l-tr", "empty", "home"],
    ["empty", "empty", "empty", "pipe-s-v", "pipe-l-bl", "pipe-s-h", "pipe-l-tr"],
    ["empty", "empty", "empty", "pipe-s-v", "empty", "empty", "empty"],
    ["home", "pipe-l-tl", "pipe-s-v", "pipe-t-ltb", "empty", "empty", "empty"],
    ["pipe-s-h", "pipe-s-v", "empty", "pipe-s-v", "empty", "empty", "empty"],
    ["pipe-l-tl", "pipe-t-lrb", "pipe-l-tr", "pipe-s-v", "empty", "empty", "empty"],
    ["home", "pipe-s-v", "pipe-l-tr", "home", "empty", "empty", "empty"]
];

const level3_winningCombination = [
   ["home", "pipe-s-h", "pipe-s-h", "source", "pipe-l-bl", "empty", "home"],
    ["empty", "empty", "empty", "pipe-s-v", "pipe-l-tr", "pipe-s-h", "pipe-l-tl"],
    ["empty", "empty", "empty", "pipe-s-v", "empty", "empty", "empty"],
    ["home", "pipe-l-br", "pipe-s-h", "pipe-t-ltb", "empty", "empty", "empty"],
    ["pipe-s-v", "pipe-s-v", "empty", "pipe-s-v", "empty", "empty", "empty"],
    ["pipe-l-tr", "pipe-t-lrt", "pipe-l-bl", "pipe-s-v", "empty", "empty", "empty"],
    ["home", "pipe-s-h", "pipe-l-tl", "home", "empty", "empty", "empty"]
];

const level4 = [
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"]
];

const level5 = [
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"],
];