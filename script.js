let btnStyled = document.getElementById("styledLink");
let anchorStyled = document.getElementById("anchor");
function changeColor ()
{btnStyled.style.backgroundColor ="white";
anchorStyled.style.color = "rgb(71,113,203)";
btnStyled.style.borderBottom ="1PX solid rgb(71,113,203)";
}

function backColor(){btnStyled.style.backgroundColor = "rgb(71,113,203)" ;
anchorStyled.style.color="white"}
btnStyled.addEventListener("mousemove",changeColor)
btnStyled.addEventListener("mouseleave",backColor)

let formButton = document.getElementById("formButton")
let form = document.getElementById("form")
form.addEventListener("click",displayForm)

function displayForm()
{
    formButton.style.display = "none";
    form.style.display= "block";
  
}

let ids = ["img1","img2","img3","img4","img5"]
let picstitle = ["picTitle1","picTitle2","picTitle3","picTitle4","picTitle5"]


//hover team pictures//


for(let i = 0;i<picstitle.length ;i++)
{
  
     document.getElementById(ids[i]).addEventListener("mouseover", 
     function(){
        document.getElementById(picstitle[i]).style.display = "block"
                });

    document.getElementById(picstitle[i]).addEventListener("mouseleave", function(){

        document.getElementById(picstitle[i]).style.display = "none"
    })
}
