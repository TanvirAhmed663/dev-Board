// alert();

    
const tasks = [
  { company: "ShopEase", title: "Fix Mobile Button Issue", desc: "Debug using Chrome DevTools...", date: "21 March 2025" },
  { company: "CloudSync", title: "Add Dark Mode", desc: "Store the user's preference...", date: "21 March 2025" },
  { company: "SwiftPay", title: "Optimize Home page", desc: "Debug using Chrome DevTools...", date: "21 March 2025" },
  { company: "Meta", title: "Add new emoji 🙌", desc: "Debug using Chrome DevTools...", date: "21 March 2025" },
  { company: "Google LLC", title: "Integrate OpenAI API", desc: "Debug using Chrome DevTools...", date: "21 March 2025" },
  { company: "Glassdoor", title: "Improve Job searching", desc: "Debug using Chrome DevTools...", date: "21 March 2025" },
];

const taskContainer = document.getElementById('task-container');
const activityLog = document.getElementById('activity-log');
const badge = document.getElementById('badge-count');
const assigned = document.getElementById('task-assigned');

tasks.forEach((task, index) => {
  const card = document.createElement('div');
  card.className = "bg-white rounded-xl p-4 shadow border-t-4 border-blue-100";
  card.innerHTML = `
    <p class="text-sm text-gray-400 font-semibold mb-1">${task.company}</p>
    <h4 class="font-bold mb-1">${task.title}</h4>
    <p class="text-sm text-gray-500 mb-2">${task.desc}</p>
    <div class="flex justify-between items-center text-sm text-gray-400 mt-4">
      <span><strong>Deadline</strong><br>${task.date}</span>
      <button class="btn btn-xs btn-primary text-white complete-btn">Complete</button>
    </div>
  `;
  taskContainer.appendChild(card);
});


// Add event listeners to buttons
document.querySelectorAll('.complete-btn').forEach(button => {
  button.addEventListener('click', () => {
    const time = new Date().toLocaleTimeString();

    // Update counts
    let taskCount = parseInt(assigned.innerText);
    let badgeCount = parseInt(badge.innerText);
    if (taskCount > 0) assigned.innerText = taskCount - 1;
   
     
    if (badgeCount > 0) badge.innerText = badgeCount + 1;

    // Disable and update button
    button.innerText = "Completed";
    button.disabled = true;
    button.classList.remove("btn-primary");
    button.classList.add("bg-gray-400", "cursor-not-allowed");

    // Log activity
    const log = document.createElement('div');
    log.className = "bg-gray-100 p-2 rounded text-sm";
    log.innerText = `You have completed the task at ${time}`;
    activityLog.appendChild(log);
  });
});

// themeBtn correction 
// Theme button background switcher
const bgColors = ['#f1f5ff', '#ffe5ec', '#e0f7fa', '#fff3cd', '#e8f5e9','#0f172a','	#f1f5f9','#ffffff'];
let currentColorIndex = 0;



const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", function() {
currentColorIndex = (currentColorIndex + 1) % bgColors.length;
document.body.style.backgroundColor = bgColors[currentColorIndex];
});

// Date update
const dateElement = document.getElementById('current-date');
const now = new Date();
const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
dateElement.innerText = now.toLocaleDateString('en-US', options); 



