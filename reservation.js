var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // Check for empty select fields
  y = x[currentTab].getElementsByTagName("select");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

// DATE CHECK - MON/FRI

document.getElementById('reservation-date').addEventListener('change', function() {
  var selectedDate = new Date(this.value);
  var day = selectedDate.getDay();
  var errorElement = document.getElementById('date-error');
  
  // Check if the selected date is a weekend (0 = Sunday, 6 = Saturday)
  if (day === 0 || day === 6) {
    errorElement.style.display = 'block'; // Show error
    this.value = ''; // Clear the invalid date
  } else {
    errorElement.style.display = 'none'; // Hide error
  }
});



// TIME CHECK

function populateTimes() {
  var select = document.getElementById('reservation-time');
  var errorElement = document.getElementById('time-error');
  var startHour = 8; 
  var endHour = 18; 
  var interval = 30; 

  // Clear any existing options
  select.innerHTML = '';

  // Populate options with time slots
  for (var hour = startHour; hour <= endHour; hour++) {
    for (var min = 0; min < 60; min += interval) {
      var time = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
      var option = document.createElement('option');
      option.value = time;
      option.textContent = time;
      select.appendChild(option);
    }
  }
}

// Function to validate the selected time
function validateTime() {
  var selectedTime = document.getElementById('reservation-time').value;
  var errorElement = document.getElementById('time-error');
  
  if (selectedTime === '') {
    errorElement.style.display = 'block'; 
  } else {
    errorElement.style.display = 'none'; 
  }
}

// Populate times on page load
document.addEventListener('DOMContentLoaded', populateTimes);

// Validate time selection on change
document.getElementById('reservation-time').addEventListener('change', validateTime);