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
    ["home", "empty", "empty", "home", "empty", "empty", "home"],
    ["pipe-s-v", "pipe-l-bl", "pipe-t-lrt", "pipe-l-tr", "pipe-l-bl", "pipe-s-v", "pipe-l-bl"],
    ["pipe-l-tl", "pipe-l-tl", "pipe-s-v", "pipe-l-tr", "pipe-t-rtb", "empty", "empty"],
    ["home", "pipe-s-h", "pipe-t-rtb", "source", "pipe-t-ltb", "pipe-s-h", "home"],
    ["empty", "empty", "pipe-t-ltb", "pipe-t-lrt", "pipe-t-rtb", "pipe-l-tr", "pipe-l-br"],
    ["empty", "pipe-l-br", "pipe-t-rtb", "pipe-s-v", "pipe-l-br", "pipe-l-bl", "pipe-s-v"],
    ["home", "pipe-l-bl", "pipe-l-bl", "home", "empty", "empty", "home"]
];

const level4_winningCombination = [
    ["home", "empty", "empty", "home", "empty", "empty", "home"],
    ["pipe-s-v", "pipe-l-br", "pipe-t-lrb", "pipe-l-tl", "pipe-l-br", "pipe-s-h", "pipe-l-tl"],
    ["pipe-l-tr", "pipe-l-tl", "pipe-s-v", "pipe-l-br", "pipe-t-ltb", "empty", "empty"],
    ["home", "pipe-s-h", "pipe-t-ltb", "source", "pipe-t-rtb", "pipe-s-h", "home"],
    ["empty", "empty", "pipe-t-rtb", "pipe-t-lrb", "pipe-t-ltb", "pipe-l-br", "pipe-l-bl"],
    ["empty", "pipe-l-br", "pipe-t-ltb", "pipe-s-v", "pipe-l-tr", "pipe-l-tl", "pipe-s-v"],
    ["home", "pipe-l-tl", "pipe-l-tr", "home", "empty", "empty", "home"]
];

const level5 = [
    ["source", "pipe-s-v", "pipe-t-lrb", "pipe-s-v", "pipe-s-v", "pipe-s-h", "pipe-s-h", "pipe-t-lrt", "pipe-s-h", "home"],
    ["pipe-l-br", "pipe-s-v", "pipe-t-lrt", "pipe-s-h", "pipe-l-bl", "pipe-l-tr", "pipe-s-v", "pipe-c", "pipe-s-h", "pipe-l-br"],
    ["pipe-l-tl", "pipe-l-bl", "home", "pipe-l-tr", "pipe-t-ltb", "pipe-t-ltb", "home", "pipe-l-tr", "pipe-l-bl", "pipe-s-v"],
    ["home", "pipe-s-v", "pipe-l-br", "pipe-t-ltb", "pipe-s-v", "pipe-l-tr", "pipe-l-br", "pipe-l-bl", "pipe-l-tl", "pipe-s-v"],
    ["pipe-s-v", "pipe-s-v", "pipe-l-bl", "pipe-l-tl", "pipe-t-rtb", "pipe-s-h", "pipe-t-lrt", "pipe-l-tr", "home", "pipe-s-v"],
    ["pipe-s-v", "pipe-s-v", "pipe-s-v", "pipe-l-br", "pipe-t-ltb", "pipe-l-br", "pipe-s-h", "pipe-l-bl", "pipe-t-ltb", "pipe-t-ltb"],
    ["pipe-s-v", "pipe-t-rtb", "home", "pipe-s-v", "pipe-l-tr", "pipe-l-tl", "home", "pipe-l-tr", "pipe-t-lrt", "pipe-l-tl"],
    ["pipe-s-v", "pipe-s-v", "pipe-l-br", "pipe-l-tl", "pipe-l-br", "pipe-s-v", "pipe-t-lrb", "pipe-s-h", "pipe-s-h", "pipe-l-bl"],
    ["pipe-s-v", "pipe-s-v", "pipe-t-rtb", "home", "pipe-l-tr", "pipe-s-v", "pipe-s-h", "pipe-s-h", "pipe-l-tr", "pipe-s-v"],
    ["pipe-l-tl", "pipe-l-tl", "pipe-l-tr", "pipe-s-h", "pipe-s-h", "pipe-s-v", "pipe-s-h", "pipe-s-h", "pipe-l-tl", "home"]
];

const level5_winningCombination = [
    ["source", "pipe-s-h", "pipe-t-lrb", "pipe-s-h", "pipe-s-h", "pipe-s-h", "pipe-s-h", "pipe-t-lrb", "pipe-s-h", "home"],
    ["pipe-l-br", "pipe-s-h", "pipe-t-lrt", "pipe-s-h", "pipe-l-bl", "pipe-l-br", "pipe-s-h", "pipe-c", "pipe-s-h", "pipe-l-bl"],
    ["pipe-l-tr", "pipe-l-bl", "home", "pipe-l-br", "pipe-t-ltb", "pipe-t-rtb", "home", "pipe-l-tr", "pipe-l-bl", "pipe-s-v"],
    ["home", "pipe-s-v", "pipe-l-tr", "pipe-t-ltb", "pipe-s-v", "pipe-l-tr", "pipe-l-bl", "pipe-l-br", "pipe-l-tl", "pipe-s-v"],
    ["pipe-s-v", "pipe-s-v", "pipe-l-br", "pipe-l-tl", "pipe-t-rtb", "pipe-s-h", "pipe-t-lrt", "pipe-l-tl", "home", "pipe-s-v"],
    ["pipe-s-v", "pipe-s-v", "pipe-s-v", "pipe-l-br", "pipe-t-ltb", "pipe-l-br", "pipe-s-h", "pipe-l-bl", "pipe-t-rtb", "pipe-t-ltb"],
    ["pipe-s-v", "pipe-t-rtb", "home", "pipe-s-v", "pipe-l-tr", "pipe-l-tl", "home", "pipe-l-tr", "pipe-t-lrt", "pipe-l-tl"],
    ["pipe-s-v", "pipe-s-v", "pipe-l-br", "pipe-l-tl", "pipe-l-br", "pipe-s-h", "pipe-t-lrt", "pipe-s-h", "pipe-s-h", "pipe-l-bl"],
    ["pipe-s-v", "pipe-s-v", "pipe-t-rtb", "home", "pipe-l-tr", "pipe-s-h", "pipe-s-h", "pipe-s-h", "pipe-l-bl", "pipe-s-v"],
    ["pipe-l-tr", "pipe-l-tl", "pipe-l-tr", "pipe-s-h", "pipe-s-h", "pipe-s-h", "pipe-s-h", "pipe-s-h", "pipe-l-tl", "home"]
];