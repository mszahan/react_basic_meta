import eruope from '../../assets/images/europe.jpg'



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
        </div>
    )
}

export default AssetPage;