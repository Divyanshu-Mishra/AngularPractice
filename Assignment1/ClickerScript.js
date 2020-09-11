function incrementValue1()
{
    var value = parseInt(document.getElementById('clickCounter1').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('clickCounter1').value = value;
}

function incrementValue2()
{
    var value = parseInt(document.getElementById('clickCounter2').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('clickCounter2').value = value;
}