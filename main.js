const langTools = ace.require("ace/ext/language_tools");
const htmlEditor = ace.edit("html-edit", {
  theme: "ace/theme/monokai",
  mode: "ace/mode/html",
  autoScrollEditorIntoView: true,
  maxLines: 20,
  wrap: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  enableBasicAutocompletion: true,
  fontSize: "12px",
});
htmlEditor.session.setValue(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>My website</title>
    <!--Your CSS file, go to CSS tab to edit css code...-->
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <!--HTML-->
    <h1>Hello, World!</h1>
    
    <!--Your JavaScript file, go to JavaScript tab to edit JavaScript code...-->
    <script src="main.js"></script>
  </body>
</html>`); //HTML
const cssEditor = ace.edit("css-edit", {
  theme: "ace/theme/monokai",
  mode: "ace/mode/css",
  autoScrollEditorIntoView: true,
  maxLines: 20,
  wrap: true,
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
  fontSize: "12px",
  useWorker: false
});
cssEditor.session.setValue(`/*To make all elements more manageable...*/
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*Write your css here*/

`);
const jsEditor = ace.edit("javascript-edit", {
  theme: "ace/theme/monokai",
  mode: "ace/mode/javascript",
  autoScrollEditorIntoView: true,
  maxLines: 20,
  wrap: true,
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
  fontSize: "12px",
}); //CSS
jsEditor.session.setValue(`//JavaScript

alert("Hello Young Developer :)");`); //JS
/*Run button*/
const runBtn = document.querySelector(".run-btn");
runBtn.addEventListener("click", () => {
  const preview = document.querySelector(".preview").contentWindow.document;
  const iframePreview = document.querySelector("#iframe-preview");
  if(iframePreview.style.display === "none"){
    iframePreview.style.display = "block";
  }
  preview.open();
  preview.write(htmlEditor.getValue() + '<style>' + cssEditor.getValue() + '</style>' + '<script>' + jsEditor.getValue() + '</script>');
  preview.close();
})
/*Download btn*/
const dlBtn = document.querySelector(".download-btn");
dlBtn.addEventListener("click", () => {
  const dlNote = document.querySelector(".dl-note");
  const htmlFileDl = document.querySelector(".html-file-dl");
  const cssFileDl = document.querySelector(".css-file-dl");
  const jsFileDl = document.querySelector(".js-file-dl");
  if(dlNote.style.display === "none"){
    dlNote.style.display = "block";
  }
  //To download the HTML
  htmlFileDl.addEventListener("click", () => {
    const htmlEditorValue = htmlEditor.getValue();
    const htmlBlob = new Blob([htmlEditorValue], {
      type: "text/plain;charset=utf-8"
    });
    saveAs(htmlBlob, "index.html");
  })
  //To download the CSS
  cssFileDl.addEventListener("click", () => {
    const cssEditorValue = cssEditor.getValue();
    const cssBlob = new Blob([cssEditorValue], {
      type: "text/plain;charset=utf-8"
    });
    saveAs(cssBlob, "style.css");
  })
  //To download the Javascript
  jsFileDl.addEventListener("click", () => {
    const jsEditorValue = jsEditor.getValue();
    const jsBlob = new Blob([jsEditorValue], {
      type: "text/plain;charset=utf-8"
    });
    saveAs(jsBlob, "main.js");
  })
})
/*Theme Option*/
const themeSelect = document.querySelector(".theme-select");
themeSelect.addEventListener("change", () => {
  if(themeSelect.value === "Monokai"){
    htmlEditor.setTheme("ace/theme/monokai");
    cssEditor.setTheme("ace/theme/monokai");
    jsEditor.setTheme("ace/theme/monokai");
  } else if(themeSelect.value === "Ambiance") {
    htmlEditor.setTheme("ace/theme/ambiance");
    cssEditor.setTheme("ace/theme/ambiance");
    jsEditor.setTheme("ace/theme/ambiance");
  } else if (themeSelect.value === "Chrome") {
    htmlEditor.setTheme("ace/theme/chrome");
    cssEditor.setTheme("ace/theme/chrome");
    jsEditor.setTheme("ace/theme/chrome");
  } else if (themeSelect.value === "Dracula") {
    htmlEditor.setTheme("ace/theme/dracula");
    cssEditor.setTheme("ace/theme/dracula");
    jsEditor.setTheme("ace/theme/dracula");
  } else if (themeSelect.value === "Github") {
    htmlEditor.setTheme("ace/theme/github");
    cssEditor.setTheme("ace/theme/github");
    jsEditor.setTheme("ace/theme/github");
  } else if (themeSelect.value === "Merbivore") {
    htmlEditor.setTheme("ace/theme/merbivore");
    cssEditor.setTheme("ace/theme/merbivore");
    jsEditor.setTheme("ace/theme/merbivore");
  } else if (themeSelect.value === "Twilight") {
    htmlEditor.setTheme("ace/theme/twilight");
    cssEditor.setTheme("ace/theme/twilight");
    jsEditor.setTheme("ace/theme/twilight");
  }
})
/*Font size*/
const fontSize = document.querySelector(".font-size-range");
fontSize.addEventListener("input", () => {
  const fontSizeValue = document.querySelector(".font-size-value");
  fontSizeValue.innerText = "Value: " + fontSize.value + "px";
  htmlEditor.setFontSize(fontSize.value + "px");
  cssEditor.setFontSize(fontSize.value + "px");
  jsEditor.setFontSize(fontSize.value + "px");
})
/*Wrap*/
const isWrapped = document.querySelector(".wrap-settings");
isWrapped.addEventListener("change", () => {
  if(isWrapped.value === "True"){
    htmlEditor.setOptions({
      wrap: true
    });
    cssEditor.setOptions({
      wrap: true
    });
    jsEditor.setOptions({
      wrap: true
    });
  } else {
    htmlEditor.setOptions({
      wrap: false
    });
    cssEditor.setOptions({
      wrap: false
    });
    jsEditor.setOptions({
      wrap: false
    });
  }
})
/*Autocomplete*/
const isAutocomplete = document.querySelector(".autocomplete-settings");
isAutocomplete.addEventListener("change", () => {
  if (isAutocomplete.value === "True") {
    htmlEditor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true
    });
    cssEditor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true
    });
    jsEditor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true
    });
  } else {
    htmlEditor.setOptions({
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      enableSnippets: false
    });
    cssEditor.setOptions({
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      enableSnippets: false
    });
    jsEditor.setOptions({
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      enableSnippets: false
    });
  }
})
/*On load of the website, modal will popup*/
window.addEventListener("load", () => {
  const modalOnload = new bootstrap.Modal(document.querySelector("#modal-onload"));
  modalOnload.show(); //show
});
window.addEventListener("beforeunload", () => {
  event.preventDefault;
  event.returnValue = "";
})
