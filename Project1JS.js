
function myFunction() {   
 if(window.innerWidth < 480){
		 var menuUl = document.getElementById("list");
        var colorUi = document.getElementById("colors");
		 if(menuUl.style.display == "block" && colorUi.style.display == "block"){
			 menuUl.style.display = "none";
             colorUi.style.display = "none";
		 }else{
			 menuUl.style.display = "block";
             colorUi.style.display = "block";
		 }
 }
	 }


var styleSheet = document.getElementById('themeCSS');
var themeform = document.getElementById('colors');
var currentTheme;
var t;


if(!localStorage.getItem('colorsSelect')){
    populateStorage();
    
}else{
    setStyles();
}

function populateStorage(){
        var w = document.getElementById('colors').value;
    if(w == 'gul'){
        alert("gult tema är valt");   
    }
    else if(w == 'brun'){
        alert("Brun tema är valt");   
    }
    else if(w == 'blue'){
        alert("Blå tema är valt");   
    } 
    localStorage.setItem('colorsSelect', document.getElementById('colors').value);
    setStyles();

}
function setStyles(){
    currentTheme = localStorage.getItem('colorsSelect');
    t =document.getElementById('colors').value = currentTheme;
    styleSheet.setAttribute('href' , t+'.css');
     
}
themeform.onchange = populateStorage;













