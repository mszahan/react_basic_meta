import eruope from '../../assets/images/europe.jpg'
import ReactPlayer from "react-player";
import wildVid from '../../assets/videos/wild-video.mp4'
// import ReactPlayer from "react-player/youtube";

// link to the demo 
// https://cookpete.com/react-player/
//https://github.com/cookpete/react-player#standalone-player
function AssetPage(){
    const randomImgUrl = 'https://picsum.photos/400/265'

    return(
        <div>
            <h1>Rendering assest by three different way</h1>
            <div>
                <img src={eruope}
                className='europe-img' alt='europe'/>
            </div>

            <div>
                <img src={require('../../assets/images/wild.jpg')}
                alt='wild' className='wild-img'/>
            </div>

            <div>
                <img src={randomImgUrl}
                alt='wild' className='wild-img'/>
            </div>

            <div>
                <ReactPlayer url={'https://www.youtube.com/watch?v=DtBdlq9OitA'}/>
            </div>

            <div>
                <ReactPlayer url={wildVid}
                controls='true' pip='true' />
            </div>

        </div>
    )
}

export default AssetPage;