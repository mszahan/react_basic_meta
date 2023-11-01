import Puppy from './Puppy';

function Dog(){
    return(
        // if you give value here it will override the children and grandchildren
        <Puppy name='Alex' bowlShape='Square' bowlStatus='empty'/>
    )
}

export default Dog;