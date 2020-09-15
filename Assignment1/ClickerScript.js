var a=0,b=0,c=0,d=0,e=0;

function incrementValue()
{
    var value = parseInt(document.getElementById('carClickCounter').textContent, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('carClickCounter').textContent = value;
    var carName = document.getElementById('carName').textContent;
    switch (carName) {
        case "Dodge Challanger":
            a = value;
            break;
        case "Shelby Mustang '67":
            b = value;
            break;
        case "Chevrolet Camaro '69":
            c = value;
            break;
        case "Aston Martin DB11":
            d = value;
            break;
        case "Lincoln Continental '76":
            e = value;
            break;
        default:
            break;
    }
}

function showImage(id)
{    

var countVal = 0
switch (id) {
    case "Dodge Challanger":
        countVal = a;
        break;
    case "Shelby Mustang '67":
        countVal = b;
        break;
    case "Chevrolet Camaro '69":
        countVal = c;
        break;
    case "Aston Martin DB11":
        countVal = d;
        break;
    case "Lincoln Continental '76":
        countVal = e;
        break;
    default:
        break;
}
showImage1(id, countVal)
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

