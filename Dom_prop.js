let newDiv = document.createElement("div");
newDiv.id = "dynamicDiv";
newDiv.innerHTML = "<h1>I work for NEOITO</h1>"
document.body.appendChild(newDiv);
// var script = document.createElement("script");
// script.src = "Dom_prop.js"
// document.body.appendChild(script)
document.body.appendChild(document.createElement('script')).src = 'Dom_prop.js'