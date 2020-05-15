var a =[['One'],['Two']];

function OnFormLoad(){

    a.forEach(function(value){
        document.getElementsByClassName(value)[0].addEventListener("click", function(){show(value)});
    });
}


function show(value){
    alert("ooooooooo " + value);
}
