let copyText = document.getElementById('copyText');
let pasteText = document.getElementById('pasteText');

const btnCopy = document.getElementById('btnCopy');
const btnPaste = document.getElementById('btnPaste');


if(btnCopy && btnPaste != null){

  btnCopy.addEventListener('click',() =>{
    let copyTextVal = copyText.value;
    navigator.clipboard.writeText(copyTextVal);
  });
  btnPaste.addEventListener('click',() => {
    pasteText.value = ' ';
    navigator.clipboard.readText().then( (textpaste) =>{
      pasteText.value = textpaste;
    });
  });
};