function DayPredictor(){
    const time = new Date();
    const day = time.toLocaleDateString('bn-bd', {weekday:'long'});
    const morning = time.getHours() >= 6 && time.getHours <=12;
    let dayMessage ;


if(day.toLowerCase() === 'monday'){
    dayMessage = `Happy ${day}`;
}else if (day.toLowerCase() === 'tuesday'){
    dayMessage = `${day}, fourd days to go`;
} else if (day.toLowerCase() === 'wednesday'){
    dayMessage = `${day}, half way there`;
} else if (day.toLowerCase() === 'thursday'){
    dayMessage = `${day}, Start planning the weekend`;
} else if (day.toLowerCase() === 'friday'){
    dayMessage = `${day}, woo, the weekend is comming`
} else {
    dayMessage = `Stay calm and keep having fun`
}

return (
    <div className="day-predictor">
        <h1>
            {dayMessage}
        </h1>
        {morning ? <h2>Hav you had your breakfast yet?</h2> : ''}

    </div>
)

}

export default DayPredictor;