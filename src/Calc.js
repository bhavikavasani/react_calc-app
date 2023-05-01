// function add()
// {
//     const a=parseInt(prompt("Enter Value of a"));
//     const b=parseInt(prompt("Enter value of b"));
//     const c=a+b;
//     alert("Addition Of two number is:" + c);
// }
// //export {add};
// export default add;

//Addition
function add()
{
    const a=parseInt(prompt("Enter Value of a"));
    const b=parseInt(prompt("Enter value of b"));
    const c=a+b;
    alert("Addition Of two number is:" + c);
}

// Subtraction
function sub()
{
    const a=parseInt(prompt("Enter Value of a"));
    const b=parseInt(prompt("Enter value of b"));
    const c=a-b;
    alert("Substraction Of two number is:" + c);
}

//multiplication
function multiply()
{
    const a=parseInt(prompt("Enter Value of a"));
    const b=parseInt(prompt("Enter value of b"));
    const c=a*b;
    alert("Multiplication Of two number is:" + c);
}

//Division
function division()
{
    const a=parseInt(prompt("Enter Value of a"));
    const b=parseInt(prompt("Enter value of b"));
    const c=a/b;
    alert("division Of two number is:" + c);
}

export {add, sub, multiply, division};