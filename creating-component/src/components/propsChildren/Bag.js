function Bag (props){
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        backgroundColor: "#fffcde",
        margin: "20px 0"
    }

    return (
        <div style={bag}>
            {props.children}
        </div>
    );

}

export default Bag;