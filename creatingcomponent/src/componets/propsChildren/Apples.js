function Apples (props){
    return (
        <div className='promo'>
            <div>
                <h2>The color of the apple is {props.color}</h2>
            </div>
            <div>
                <h3>
                    There are {props.number} of appples
                </h3>
            </div>
        </div>
    );
}

export default Apples;
