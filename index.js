function add(a,b)
{
    console.log(`Sum of ${a} and ${b} is `)
    return a+b
}

function sub(a,b)
{
    console.log(`Sub of ${a} and ${b} is `)
    return a-b
}


module.exports={
    add,
    sub
};
// console.log(module)