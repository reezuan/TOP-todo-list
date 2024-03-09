function formatTaskCardDate(date) {
    // Extract the day with leading zero if necessary
    const day = date.getDate().toString().padStart(2, "0");
    
    // Extract the abbreviated month name
    const month = date.toLocaleString("en-sg", { month: "short" });
    
    // Extract the last two digits of the year
    const year = date.getFullYear().toString().substr(-2);
    
    // Assemble the formatted date
    return `${day} ${month} '${year}`;
}

export { formatTaskCardDate };