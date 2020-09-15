var dict = {};
function incrementValue()
{
    var value = parseInt(document.getElementById('carClickCounter').textContent, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('carClickCounter').textContent = value;
    var carName = document.getElementById('carName').textContent;
    dict[carName] = value;

}

function showImage(id)
{    
    if (dict[String(id)])
    {
        dict[String(id)];
    }
    else
    {
        dict[String(id)] = 0;
    }

showImage1(id, dict[String(id)])
}
function showImage1(id, countVal)
{
    var imageID = id+".jpg";
    //var countVal = 0;
    document.getElementById("carName").textContent = id;
    document.getElementById("carImg").src = imageID;
    document.getElementById("carImg").height = 300;
    document.getElementById("carImg").width = 400;
    document.getElementById("carClickCounter").textContent = countVal;

    
}

