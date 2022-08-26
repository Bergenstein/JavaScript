const defaultResult=0;

let currentResult=defaultResult; //declared and initialized 
let logEntries=[];

function getUserInput()
{
    return parseInt(userInput.value); 
}

function outputLogs(_operator, _resultsBeforeCalc, _calcNumber, _newResult)
{
    let enteredNumber=getUserInput();
    const logEntry =
    {
        operation: _operator,
        prevResult: _resultsBeforeCalc,
        enteredNumber: _calcNumber,
        result: _newResult

    };

    logEntries.push(logEntry);
    console.log(logEntries);
}//end of outputLogs()
function calculations(operator, resultsBeforeCalc, calcNumber)
{
    
    const calcDescription=`${resultsBeforeCalc} ${operator} ${calcNumber}`; 
    if (operator=="*") resultsBeforeCalc*=calcNumber;
    else if (operator=="/") resultsBeforeCalc/=calcNumber;
    else if(operator=="+")  resultsBeforeCalc+=calcNumber;
    else if (operator=="-") resultsBeforeCalc-=calcNumber;
    else console.log("unsupported operation");
    outputResult(resultsBeforeCalc, calcDescription); 
    return resultsBeforeCalc;
}
function add()
{   
    const enteredNumber = getUserInput();
    const initialResult=currentResult;
    currentResult=calculations("+", initialResult, enteredNumber);
    outputLogs('Add', initialResult, enteredNumber, currentResult);
}

function subtract()
{
    const enteredNumber=getUserInput();
    const initialResult=currentResult;
    currentResult=calculations("-", initialResult, enteredNumber);
    outputLogs("Subtract", initialResult, enteredNumber, currentResult);
}

function multiply()
{
    const enteredNumber=getUserInput();
    const initialResult=currentResult;
    currentResult=calculations("*", initialResult, enteredNumber);
    outputLogs("Multiply", initialResult, enteredNumber, currentResult);
}

function divide()
{
    const enteredNumber=getUserInput();
    const initialResult=currentResult;
    currentResult=calculations("/", initialResult, enteredNumber);
    outputLogs("Divide", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);



