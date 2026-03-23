const preview = document.querySelector(".preview h2")
const workarea = document.querySelector(".workarea h2")
const buttons = document.querySelectorAll(".btn button")
let input = ""
buttons.forEach(function(btn){
    btn.addEventListener("click", function(){
        const value = btn.textContent;
        if(value === "CE"){
            input = "";
        }else if(value === "="){
            preview.textContent = eval(input);
        }else{
            input += value;
        }
        workarea.textContent = input
    });
});