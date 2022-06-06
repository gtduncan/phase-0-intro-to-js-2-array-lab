const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)
{
    cats.push(name);
}

function destructivelyPrependCat(name)
{
    cats.unshift(name);
}

function destructivelyRemoveLastCat()
{
    cats.pop();
}

function destructivelyRemoveFirstCat()
{
    cats.shift();
}

function appendCat(name)
{
    const newArray = [...cats, name];
    return newArray;
}

function prependCat(name)
{
    const newArray = [name, ...cats];
    return newArray;
}

function removeLastCat()
{
    return cats.slice(0, -1);
}

function removeFirstCat()
{
    return cats.slice(1)
}