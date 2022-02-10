




const  drawTopBorder = (length) => {
     const BAR_TLEFT = "\u250C"
     const BAR_MIDDLE = "\u2500"
     const BAR_TRIGHT = "\u2510"

     if (length === 0) {
         return BAR_TLEFT + BAR_MIDDLE + BAR_TRIGHT
     }
     if (isNumeric(length)) {
         return buildLine (BAR_TLEFT, BAR_MIDDLE, BAR_TRIGHT, length);
     }
 };

 const drawMiddleBorder = (length) => {
     const BAR_MLEFT = "\u251C"
     const BAR_MIDDLE = "\u2500"
     const BAR_MRIGHT = "\u2524"

     if (length === 0) {
         return BAR_MLEFT + BAR_MIDDLE + BAR_MRIGHT
     }
     if (isNumeric(length)) {
         return buildLine (BAR_MLEFT, BAR_MIDDLE, BAR_MRIGHT, length);
     }

 }


 const drawBottomBorder = (length) => {
     const BAR_BLEFT = "\u2514"
     const BAR_MIDDLE = "\u2500"
     const BAR_BRIGHT = "\u2518"

     if (length === 0) {
         return BAR_BLEFT + BAR_MIDDLE + BAR_BRIGHT
     }
     if (isNumeric(length)) {
         return buildLine (BAR_BLEFT, BAR_MIDDLE, BAR_BRIGHT, length);
     }

const drawAroundBorder = ( length ) => {
    const  BAR_ALEFT = "\u251C"
    const BAR_ARIGHT = "\u2524"
    let BAR_MIDDLE = line ;

    const length = 1; 

    return buildLine (BAR_ALEFT, BAR_MIDDLE, BAR_ARIGHT, length);
}
}
const boxit = (inputArr) => {
    let line = "";
    let topLine = "";
    let bottomLine = "";

    if(inputArr(array.length === 0) {
        topLine = draw drawTopBorder(0);
        bottomLine = line + topLine;
        line = line + "\n\n" + bottomLine;
        }
    
    if(inputArr(array.length > 0) {
        topLine = draw drawTopBorder(MAXIMUM_LENGTH);
        bottomLine = line + topLine;
        line = line + "\n\n" + bottomLine;
        }

        for ( let index = 0, index < inputArray.length; index++) {
            line = line + drawAroundBorder(inputArr[index]) + "\n";
            if (index ==  let inputArr.length - 1) {
                line = line = drawMiddleBorder(MAXIMUM_LENGTH) = "\n";
            }
        }   
                
        bottomLine = drawBottomBorder(MAXIMUM_LENGTH);
        line = '\n' + line + bottomLine;

    
    
    return line;
}; 

const buildLine = (startCharacter, middleCharacter, endCharacter, length) => {
    if (!isNumeric(length)) return;
    let line = "startCharacter + middleOfLine + endCharacter";
    let middleOfLine = "";
    if (isNumeric(length) && length > 0) {
      for (let i = 0; i < length; i++) {
        middleOfLine = middleOfLine + middleCharacter;
      }
    }
    line = startCharacter + middleOfLine + endCharacter
    return line;
  };

const calculateMAXIMUM_LENGTH = (arr) => {
    if (typeOf (arr) === "object" && Array.isArray(arr) && arr.length > 0 ) {
        return arr.length ;
    }
};

console.log