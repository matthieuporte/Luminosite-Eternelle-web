

window.onload = function()
{
   var listOfQuotes = ["\"Prends soin de ton corps pour que ton âme ait envie d’y rester\"\nGandhi",
   "\"L’équilibre c’est lorsque ton corps, ton âme, et ton esprit sont en parfaite harmonie\"\nAboubakar Victorien Zié Coulibaly ",
   "\"Accepte ce qui est, laisse aller ce qui était, aie confiance en ce qui sera\"\nBouddha",
   "\"First wealth is Health\""]
   //document.getElementById("quote").textContent = listOfQuotes[Math.floor(Math.random() * listOfQuotes.length)]
   window.onscroll = function()
   {
    var idscroll = document.getElementById("scroll-arrow");
    idscroll.classList.remove("animate-bounce");
    idscroll.classList.add("animate-fade");
   }
   var btnsnavbar = document.getElementsByClassName("toggle-navbar");
   var navshown = false;
   for(var i = 0; i < btnsnavbar.length; i++) {
      var btn = btnsnavbar[i];
      btn.onclick = function() {
         if (!navshown) {
            navshown = true;
            document.getElementById("navbar-sticky").classList.remove("hidden");
         } else {
            navshown = false;
            document.getElementById("navbar-sticky").classList.add("hidden");
         }
      }
  }
}
