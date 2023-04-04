function Click(){
    // alert
    alert("Clicked the button")

    // Confirm 
    x=confirm("Are you clicked the button")
    if(x==true){
        alert("Confirm")
    }
    else{
        alert("Not-Confirm")
    }

    // document.write
    // x=confirm("Are you clicked the button")
    // if(x==true){
    //     document.write("document.write:Clicked")
    // }
    // else{
    //     document.write("docuent.write:Mistake")
    // }

    // innerText
    x=confirm("Are you clicked the button")
    if(x==true){
        document.getElementById("msg").innerText="<font color='red'>Inner Text</font>"
    }
    else{
        alert("Canceled")
    }

    // innerHtml
    x=confirm("Are you clicked the button")
    if(x==true){
        document.getElementById("msg").innerText="<font color='red'>Inner Html</font>"
    }
    else{
        alert("Canceled")
    }
    
}