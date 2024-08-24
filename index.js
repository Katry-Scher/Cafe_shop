/* PROMOTION*/

function openPromo(evt, promoName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(promoName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Function to automatically cycle through tabs
let currentTabIndex = 0;
let autoCycleInterval;

function cycleTabs() {
  const tabs = document.getElementsByClassName("tablinks");
  const event = new Event('mouseover');
  tabs[currentTabIndex].dispatchEvent(event);  // Simula o mouseover
  currentTabIndex = (currentTabIndex + 1) % tabs.length; // Move para a próxima aba
}

// Start cycling through tabs every 3 seconds (3000 ms)
function startAutoCycle() {
  autoCycleInterval = setInterval(cycleTabs, 3000);
}


// Start the auto cycle when the page loads
document.addEventListener("DOMContentLoaded", function() {
  cycleTabs(); // Chama a primeira vez para iniciar a exibição automática
  startAutoCycle();
});
