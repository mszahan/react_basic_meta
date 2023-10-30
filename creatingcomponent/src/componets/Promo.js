function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1>{props.heading}</h1>
                </div>
                <div>
                <h2>{props.subHeading}</h2>
            </div>
        </div>
     );
};

export default Promo;