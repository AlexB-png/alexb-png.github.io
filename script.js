function Email() {
  const obfuscated = [97,108,101,120,97,110,100,101,114,46,98,114,107,110,64,112,114,111,116,111,110,46,109,101]
  
  const emailSpan = document.getElementById("email")

  console.log("Yep")
  
  emailSpan.innerHTML = ("Email:  " + String.fromCharCode(...obfuscated))
}

function Phone() {
  const obfuscated = [43, 52, 52, 32 ,55, 55, 55, 48, 50, 57, 54, 50, 48, 49]

  const phoneSpan = document.getElementById("phone")

  console.log("Yep")
  
  phoneSpan.innerHTML = ("Phone:  " + String.fromCharCode(...obfuscated))
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", async function() {
  console.log("Yes!")
  const CodeLine = document.getElementById("codeBar")
  
  const TextInput1 = "ls"
  const TextInput1Response = "Portfolio  Bin  Downloads  yay"

  const TextInput2 = "cd Portfolio"

  const TextInput3 = "Portfolio.sh"

  let current = "AlexB@Arch ~ $ "
  CodeLine.innerHTML = current
  await sleep(1000)
  
  for (let i=0; i < TextInput1.length; i++) {
    current += TextInput1[i]
    CodeLine.innerHTML = current
    await sleep(150)
  }
  current += "<br>"
  for (let i=0; i < TextInput1Response.length; i++) {
    current += TextInput1Response[i]
    CodeLine.innerHTML = current
    await sleep(3)
  }
  current += "<br>" + "AlexB@Arch ~ $ "
  CodeLine.innerHTML = current
  for (let i=0; i < TextInput2.length; i++) {
    current += TextInput2[i]
    CodeLine.innerHTML = current
    await sleep(100)
  }
  current += "<br>" + "AlexB@Arch Portfolio $ "
  CodeLine.innerHTML = current
  await sleep(100)

  for (let i=0; i < TextInput1.length; i++) {
    current += TextInput1[i]
    CodeLine.innerHTML = current
    await sleep(150)
  }
  current += "<br>"
  await sleep(500)
  current += "Portfolio.sh"
  CodeLine.innerHTML = current

  current += "<br>" + "AlexB@Arch Portfolio $ "
  CodeLine.innerHTML = current
  await sleep(300)
  
  for (let i=0; i < TextInput3.length; i++) {
    current += TextInput3[i]
    CodeLine.innerHTML = current
    await sleep(150)
  }

  current += "<br>" + "<br>" + "Press Spacebar to continue"
  CodeLine.innerHTML = current

})

function HandleSpacebar(event) {
  if (event.code == "Space"){
  const codeDiv = document.getElementById("code")
  codeDiv.style.display = "none"

  const contentDiv = document.getElementById("content")
  contentDiv.style.display = "block"

  document.removeEventListener("keydown", HandleSpacebar);
  }
}

document.addEventListener("keydown", HandleSpacebar);