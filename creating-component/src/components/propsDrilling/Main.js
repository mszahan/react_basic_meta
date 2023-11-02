function Main(props){
    return <Header msg={props.msg}/>
}

function Header(props){
    return (
        <div className="drilling">
        <h1>
            Header here
        </h1>
        <Wrapper msg={props.msg}/>
        </div>
    );
}

function Wrapper(props){
    return(
    <div className="drilling">
        <h2>
            Wrapper here
        </h2>

        <Button msg={props.msg}/>
    </div>

    )
}

function Button(props){
    return (
    <div className="drilling">
        <h3>
            The button here
        </h3>
        <button className="button-primary" onClick={()=>{alert(props.msg)}}>
            Drill Alert
        </button>

    </div>

    )
}

export default Main;