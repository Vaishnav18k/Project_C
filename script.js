document.addEventListener('DOMContentLoaded', function() {
    const calendarDays = document.getElementById('calendar-days');
    const eventContainer = document.getElementById('event-container');
    const eventDetails = document.getElementById('event-details');

    // Example events
    const events = {
        '2024-08-05': 'Meeting with Bob at 10 AM',
        '2024-08-12': 'Project deadline',
        '2024-08-21': 'Dentist appointment at 3 PM'
    };

    function generateCalendar() {
        // Clear previous calendar days
        calendarDays.innerHTML = '';

        // Generate days (for simplicity, assuming August 2024)
        const daysInMonth = 31;
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `2024-08-${String(day).padStart(2, '0')}`;
            const dayDiv = document.createElement('div');
            dayDiv.textContent = day;
            dayDiv.dataset.date = dateStr;

            dayDiv.addEventListener('click', function() {
                const selectedDate = this.dataset.date;
                if (events[selectedDate]) {
                    eventDetails.textContent = events[selectedDate];
                } else {
                    eventDetails.textContent = 'No event for this date.';
                }
            });

            calendarDays.appendChild(dayDiv);
        }
    }

    generateCalendar();
});
