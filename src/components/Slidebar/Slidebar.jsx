import './Slidebar.css'

function Slidebar(){
    return(
        <>
         <div className="main">
                <div className="menu0">
                    <div id="img_menu1">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Spotify%20logo.png?raw=true" alt="" id="img_menu3" />
                    </div>
                    <div id="img_menu"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true" alt="" id="img_menu2" /></div>
                    <div className="white">Home</div>

                    <div id="img_menu"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true" alt="" id="img_menu2" /></div>
                    <div className="white">Search</div>

                    <div id="img_menu"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true" alt="" id="img_menu2" /></div>
                    <div className="white">Your library</div>
                </div>

                <div className="menu01">
                    <div id="img_menu"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Create.png?raw=true" alt="" id="img_menu2" /></div>
                    <div className="white">Create Playlist</div>

                    <div id="img_menu"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true" alt="" id="img_menu2" /></div>
                    <div className="white">Liked Song</div>

                    <div id="img_menu"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/your%20episodes.png?raw=true" alt="" id="img_menu2" /></div>
                    <div className="white">Your Episodes</div>

                </div>
                <div className="fav0">
                    <div className="fa">Fav</div>
                    <div className="white1">Daily Mix 1</div>
                    <div className="white1">Discovery Weekly</div>
                    <div className="white1">Malayalam</div>
                    <div className="white1">Dance/Electronic Mix</div>
                    <div className="white1">EDM/Popular</div>
                </div>

                <div className="menu02">
                    <div id="imd_menu"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true" alt="" id="img_menu2" /></div>
                    <div className="white">Install App</div>
                
                </div>
            </div>
        </>
    )
}

export default Slidebar