 let message=[];
function sendmessage(){
    let sendinput = document.getElementById("send-input").value
   if(sendinput!==""){
        message.push(sendinput)
        console.log(message)
        document.getElementById("send-input").value=""
        chatinput.scrolltop= chatinputscrollinput
        sendmessage();
    }
    }
    function dispalymessage(){
        let chatbox = document.getElementById("displaymessage");
        for(let i=0;i<message.length;i++){
            dispalymessage();
        }
    
    }
    sendbtn.addEventListener("click",sendmessage)