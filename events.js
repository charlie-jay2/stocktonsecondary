// events.js
const events = [
    { date: "To Be Confirmed", title: "Open Day", description: "An opportunity for prospective students and their families to tour the school and meet staff." },
    // Add more events as needed
];

function loadEvents() {
    const eventsList = document.getElementById('events-list');
    events.forEach(event => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${event.date}</td>
        <td>${event.title}</td>
        <td>${event.description}</td>
      `;
        eventsList.appendChild(row);
    });
}

function scrollEvents(direction) {
    const eventsBox = document.querySelector('.events-box');
    eventsBox.scrollTop += direction * 100; // Scroll by 100px
}

// Load events on page load
document.addEventListener('DOMContentLoaded', loadEvents);
