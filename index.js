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
  var selectedTab = document.getElementById(promoName);
  if (selectedTab) {
      selectedTab.style.display = "block";
      evt.currentTarget.className += " active";
  }
}

// Function to automatically cycle through tabs
let currentTabIndex = 0;
let autoCycleInterval;

function cycleTabs() {
  const tabs = document.getElementsByClassName("tablinks");

  // Skip tabs that are hidden (have the class 'hide-on-mobile') ONLY if on mobile
  let visibleTabs = Array.from(tabs).filter(tab => {
    // Check if the tab should be hidden only on mobile
    if (window.innerWidth < 768) {
      return !tab.classList.contains('hide-on-mobile');
    }
    return true; // All tabs are visible on larger screens
  });

  if (visibleTabs.length > 0) {
    const event = new Event('mouseover');
    visibleTabs[currentTabIndex].dispatchEvent(event);  // Simula o mouseover
    currentTabIndex = (currentTabIndex + 1) % visibleTabs.length; // Move para a próxima aba
  }
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

