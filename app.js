document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const greetingTextEl = document.getElementById('greeting-text');
  const timeDigitsEl = document.getElementById('time-digits');
  const timeSecondsEl = document.getElementById('time-seconds');
  const timeAmPmEl = document.getElementById('time-ampm');
  const dateFullEl = document.getElementById('date-full');
  const dateDayNameEl = document.getElementById('date-day-name');
  const toggleFormatBtn = document.getElementById('toggle-format');
  const statusLabelEl = document.getElementById('status-label');

  // State
  let is24HourFormat = false;

  // Ordinal suffix helper for days (1st, 2nd, 3rd, 4th, etc.)
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  };

  // Helper to format leading zero
  const padZero = (num) => String(num).padStart(2, '0');

  // Update Clock Function
  const updateClock = () => {
    const now = new Date();
    
    // 1. Dynamic Greeting
    const hours = now.getHours();
    let greeting = 'Hello';
    if (hours >= 5 && hours < 12) {
      greeting = 'Good morning';
    } else if (hours >= 12 && hours < 17) {
      greeting = 'Good afternoon';
    } else if (hours >= 17 && hours < 22) {
      greeting = 'Good evening';
    } else {
      greeting = 'Good night';
    }
    greetingTextEl.textContent = `${greeting}, my name is`;

    // 2. Format Time
    let displayHours = hours;
    let ampm = '';

    if (!is24HourFormat) {
      ampm = hours >= 12 ? 'PM' : 'AM';
      displayHours = hours % 12;
      displayHours = displayHours ? displayHours : 12; // convert 0 to 12
    }

    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Update time elements
    timeDigitsEl.textContent = `${padZero(displayHours)}:${padZero(minutes)}`;
    timeSecondsEl.textContent = `:${padZero(seconds)}`;
    timeAmPmEl.textContent = ampm;

    // 3. Format Date
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayName = daysOfWeek[now.getDay()];
    const monthName = months[now.getMonth()];
    const dayOfMonth = now.getDate();
    const year = now.getFullYear();

    dateDayNameEl.textContent = dayName;
    dateFullEl.textContent = `${monthName} ${dayOfMonth}${getOrdinalSuffix(dayOfMonth)}, ${year}`;

    // Update status bar label dynamic (seconds active pulse or tick)
    statusLabelEl.textContent = 'Active • Live Time';
  };

  // Toggle Time Format
  toggleFormatBtn.addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    toggleFormatBtn.textContent = is24HourFormat ? 'Show 12h' : 'Show 24h';
    updateClock();
    
    // Add brief animation to clock digits on click
    timeDigitsEl.style.transform = 'scale(0.95)';
    setTimeout(() => {
      timeDigitsEl.style.transform = 'scale(1)';
      timeDigitsEl.style.transition = 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    }, 50);
  });

  // Run Clock immediately & set interval
  updateClock();
  setInterval(updateClock, 1000);
});
