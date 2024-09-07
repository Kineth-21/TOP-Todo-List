function formatDueDate(date) {
    if (!(date instanceof Date)) {
        return "Invalid Date";
    }

    // Arrays for day and month names
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    // Extract the day name, day number, month name, and year
    const dayName = days[date.getDay()]; // Day of the week
    const dayNumber = date.getDate(); // Day of the month
    const monthName = months[date.getMonth()]; // Month name
    const year = date.getFullYear(); // Year

    // Format as "Day, Date/Month/Year"
    return `${dayName}, ${dayNumber} ${monthName}  ${year}`;
}

function areDatesEqual(date1) {
    // Create copies of the dates to avoid mutating the originals
    const date2 = new Date();
    date2.setHours(0, 0, 0, 0);

    const d1 = new Date(date1);
    const d2 = new Date(date2);
    
    // Normalize both dates to midnight
    d1.setHours(0, 0, 0, 0);
    d2.setHours(0, 0, 0, 0);
    
    // Compare the dates
    return d1.getTime() === d2.getTime();
}

function daysUntilDue(dueDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to midnight
    
    const due = new Date(dueDate);
    due.setHours(0, 0, 0, 0); // Normalize to midnight
    
    const timeDiff = due - today; // Difference in milliseconds
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    
    return daysDiff;
}

function isDueDateBeforeToday(dueDate) {
    // Create a Date object for today's date
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0); // Normalize to midnight

    // Ensure dueDate is a Date object
    const due = new Date(dueDate);
    due.setHours(0, 0, 0, 0); // Normalize to midnight

    // Compare years
    if (due.getFullYear() < todayDate.getFullYear()) {
        return true;
    }
    
    // Compare months if years are the same
    if (due.getFullYear() === todayDate.getFullYear()) {
        if (due.getMonth() < todayDate.getMonth()) {
            return true;
        }

        // Compare days if years and months are the same
        if (due.getMonth() === todayDate.getMonth()) {
            if (due.getDate() < todayDate.getDate()) {
                return true;
            }
        }
    }
    
    // If none of the conditions were met, dueDate is not before todayDate
    return false;
}



export {formatDueDate, areDatesEqual, daysUntilDue, isDueDateBeforeToday};