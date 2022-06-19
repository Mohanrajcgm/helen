
function contentSollu(){
    var type=document.getElementById("input")
    var typeContent=type.value;
    if(typeContent=='RE'){
    var display=document.querySelector(".helen")
    display.innerHTML=`
    <div>
    <img src="data:image/jpeg;base64,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">
    </div>
    <div>
    <p class="timer"></p>
    </div>
    <div class="content">
   </div>
    `
    let count=10;
window.setTimeout(function timer(){
        document.querySelector(".timer").innerText="HAPPY "
        }, 1000)
         window.setTimeout(()=>{
            document.querySelector(".timer").innerText="BIRTHDAY"
        }, 1*2000)
           window.setTimeout(()=>{
            document.querySelector(".timer").innerText="KANAZHAGI"
              }, 3000)
             
              window.setTimeout(()=>{
                document.querySelector(".timer").innerText="A girl who always brings a smile to my face will happy place.sending you lots of birthdaylove today"
                  }, 4000)
                 
            
   
    document.body.append(display)
}
else{
    alert("hey kanazhagi try again")
}
}

// console.log(contentSollu());