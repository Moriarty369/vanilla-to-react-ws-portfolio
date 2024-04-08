var audio = new Audio('assets/sentmessage.mp3');

var contactString = "<div class='social'> <a target='_blank' href='tel:+34624287995'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>34624287995</label></div> </a> <a href='mailto:abelardoacostacracco@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Moriarty369'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/34624287995'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/moriarty843'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/aa.cracco'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/abelardo-acosta-cracco-b505441b3/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";

var resumeString = "<div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Mi Currículum (PDF)</label></div><a href='assets/CVAbelardoAcosta.pdf' download='Mi_CV.pdf'><img class='download' src='images/downloadIcon.svg'></a></div><div class='resumeThumbnail'><img src='https://i.postimg.cc/XZXYWksc/resume-Thumbnail.png' border='0' alt='resume-Thumbnail'/></div>";

var certificationsString = "<label>Cómo debo organizar mis certificaciones para el usuario, es mejor colocarlo junto a educacion??thumbnail con logos de las instituciones con especificación y fecha???</label>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Abelardo Acosta Cracco</a>.</span><br><br>I studied Political Science at <span class='bold'>Fermín Toro University 👨🏻‍💻📚</span><br><br>I am currently trying to redirect my career towards the IT sector as a junior programmer; I am passionate about technology focused on social and ecological well-being.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume in a pdf file<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'certifications'</span> - to get my certifications<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I can comfortably write code in following languages :<br><span class='bold'>Python<br>C#<br>JS<br>PHP<br>CSS<br>HTML</span><br><br>I've experiance with following frameworks :<span class='bold'><br>Angular<br>ReactJs<br>PANDAS</span><br><br>I was the leader of a multidisciplinary team that worked on the reconstruction of a project in the automotive sector, responsible for managing and dealing with:<span class='bold'><br>- specialized technical personnel<br>- clients at various levels of the supply chain<br>- solving unforeseen problems in high-pressure situations</span>");
            break;
        case "education":
            sendTextMessage("I studied in Fermín Toro University from BARQUISIMETO VENEZUELA<br>Passing Year : 2016<br><br>Result:82.06%<br><br>I have completed various certifications in software development and soft skills.");
            break;
        case "certifications":
            sendTextMessage(certificationsString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript<br><br>👨🏻‍💻 Designed and Developed by <span class='bold'>Abelardo Acosta Cracco</a> with L❤️VE (and some hate too 🙃)</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Moriarty369'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}