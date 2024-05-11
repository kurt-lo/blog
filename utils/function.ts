export const formattedEmailFirstCharacter = (email: string | undefined) => {
    return email?.charAt(0).toUpperCase()
}

export const formattedDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    
    const formattedDate = `${month} ${day}, ${year}`;
    
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    // const seconds = date.getSeconds().toString().padStart(2, '0');

    let period = 'AM';
    let formattedHours = hours;
    
    if (hours >= 12) {
        period = 'PM';
        formattedHours = hours === 12 ? 12 : hours - 12;
    }
    if (formattedHours === 0) formattedHours = 12;

    // with seconds
    // const formattedTime = `${formattedHours}:${minutes}:${seconds} ${period}`;
    
    const formattedTime = `${formattedHours}:${minutes} ${period}`;

    return `${formattedDate} ${formattedTime}`;
}