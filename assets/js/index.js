function displayDate(){
    const title = document.querySelector(".container");
    const h1 = document.createElement("h1");
    
    const date = getDate();

    const objectDate = formatDate(date);
    
    h1.innerHTML = formatText(objectDate);

    title.appendChild(h1);

    function getDate(){
        const todaysDate = new Date();
        return todaysDate;
    }


    function formatDate(objectDate){
        const objectFormatted = {}
        objectFormatted.dayOfTheweek = formatDayOfTheWeek(objectDate.getDay());
        objectFormatted.day = objectDate.getDate();
        objectFormatted.month = formatMonth(objectDate.getMonth());
        objectFormatted.year = objectDate.getFullYear();
        objectFormatted.hours = formatNumbers(objectDate.getHours());
        objectFormatted.minutes = formatNumbers(objectDate.getMinutes());
        

        return objectFormatted;
        
    }

    function formatDayOfTheWeek(dayOfTheweek){
        const daysOftheWeek = ['Domingo','segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        return daysOftheWeek[dayOfTheweek];
    }

    function formatMonth(month){
        const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril','Maio', 'Junho','Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return months[month];
    }

    function formatNumbers(value){
        const result = value < 10 ? `0${value}` : value;
        return result
    }

    function formatText(objectDate){
        const text = `${objectDate.dayOfTheweek}, ${objectDate.day} de ${objectDate.month} de ${objectDate.year} ${objectDate.hours}:${objectDate.minutes}`;
        return text
    }
}

displayDate();