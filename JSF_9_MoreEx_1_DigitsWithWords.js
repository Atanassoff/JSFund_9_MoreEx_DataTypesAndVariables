function digitsWithWords(str){
    let digit = 0;
    switch(str){
        case "one": digit = 1; break;
        case "two": digit = 2; break;
        case "three": digit = 3; break;
        case "four": digit = 4; break;
        case "five": digit = 5; break;
        case "six": digit = 6; break;
        case "seven": digit = 7; break;
        case "eight": digit = 8; break;
        case "nine": digit = 9; break;
        case "zero": digit = 0; break;
        default: break;
    }
    console.log(digit);
}

digitsWithWords('nine') 
//9
digitsWithWords('two') 
//2
digitsWithWords('zero') 
//0