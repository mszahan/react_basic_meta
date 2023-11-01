import Bowl from "./Bowl"

function Puppy (props){
    return(
        <div>
            {/*the value will override the grandparents value and 
            if don't provide it here it will not work*/}
            {props.name} has a <Bowl bowlShape='none' bowlStatus='ful'/>
        </div>
    )
}

export default Puppy;