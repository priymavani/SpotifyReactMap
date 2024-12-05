import './Main.css'

function Main(){

    const data =[
        {id: 1, title:'Liked songs', img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true"},
        {id: 2, title:'Liked songs', img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true"},
        {id: 3, title:'Liked songs', img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true"},
        {id: 4, title:'Liked songs', img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true"},
        {id: 5, title:'Liked songs', img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true"}
    ];

    const like = [
        {id:1, img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true" , value_name: 'Weekly Motivatio...' , value_detail:'Lorem'},
        {id:2, img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true" , value_name: 'MEDITATION SELF' , value_detail:'Lorem'},
        {id:3, img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true" , value_name:'Words beyond act...'  , value_detail:'Lorem'},
        {id:4, img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true" , value_name: 'The Alexa Show' , value_detail:'Lorem'},
        {id:5, img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true", value_name: 'The Stories of Ma...' , value_detail:'Lorem'},
        {id:6, img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true", value_name:'Motivatio Daily b...' , value_detail:'Lorem'}
    ];

    // const like2 = [
    //     {id:2, img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true" , value_name: 'Weekly Motivatio...' , value_detail:'Lorem'},
    //     {id:4, img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true" , value_name: 'MEDITATION SELF' , value_detail:'Lorem'},
    //     {id:6, img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true" , value_name:'Words beyond act...'  , value_detail:'Lorem'},
    //     {id:4+4, img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true" , value_name: 'The Alexa Show' , value_detail:'Lorem'},
    //     {id:5+5, img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true", value_name: 'The Stories of Ma...' , value_detail:'Lorem'},
    //     {id:6, img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true", value_name:'Motivatio Daily b...' , value_detail:'Lorem'}
    // ];

    // const evenlike = like2.filter(item => item.id % 2 == 0);

    return(
        <>

          <div className="main2">
                <div className="nav">
                    <div className="rig_but">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true" alt="" className="rig_but1" />

                    </div>

                    <div className="lef_but">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true" alt="" className="lef_but1" />
                    </div>

                 </div>
                 <div className="gm">Good morning</div>

                 <div className="img">

                    {
                        data.map((p)=>(
                            <div className="img_part">
                                <div className="img_">
                                    <img src={p.img_url} className="largeicon" />
                                </div>
                                <div className="text">
                                    <div className="whitetex">{p.title}</div>
                                </div>
                            </div>
                        ))
                    }
                  


                {/* <div className="img_part">
                    <div className="img_"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true" alt="" className="largeicon" /></div>
                    <div className="text"><div className="whitetex">Liked Songs</div></div>
                </div>

                <div className="img_part">
                    <div className="img_"><img className="largeicon" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true" alt=""/></div>
                    <div className="text"><div className="whitetex">Netflex Playlist</div></div>
                </div>

                <div className="img_part">
                    <div className="img_"><img className="largeicon" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true" alt=""/></div>
                    <div className="text"><div className="whitetex">K/DA</div></div>
                </div>

                <div className="img_part">
                    <div className="img_"><img className="largeicon" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true" alt=""/></div>
                    <div className="text"><div className="whitetex">Liked Songs</div></div>
                </div>

                <div className="img_part">
                    <div className="img_"><img className="largeicon" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true" alt=""/></div>
                    <div className="text"><div className="whitetex">Dance/Electromic Mix</div></div>
                </div> */}


                 </div>
                <div className="like">Show you might like</div>

                <div className="largimg">

                    {
                        like.map((i)=>(
                            <div className="larg">
                                  <div className="larimg_"><img className="largeicon" src={i.img_url} alt=""/></div>

                                    <div className="lartext1">{i.value_name}</div>
                                    <div className="lartext2">{i.value_detail}</div>
                            </div>
                        ))
                    }

                        {/* {
                        evenlike.map((i)=>(
                            <div className="larg">
                                  <div className="larimg_"><img className="largeicon" src={i.img_url} alt=""/></div>

                                    <div className="lartext1">{i.value_name}</div>
                                    <div className="lartext2">{i.value_detail}</div>
                            </div>
                        ))
                    } */}

                    
                    {/* <div className="larg">
                        <div className="larimg_"><img className="largeicon" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true" alt=""/></div>

                        <div className="lartext1">Weekly Motivatio...</div>
                        <div className="lartext2">Lorem</div>


                    </div>

                    <div className="larg">
                        <div className="larimg_"><img className="largeicon" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true" alt=""/></div>

                        <div className="lartext1">MEDITATION SELF</div>
                        <div className="lartext2">Lorem</div>


                    </div>
                    <div className="larg">
                        <div className="larimg_"><img className="largeicon" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true" alt=""/></div>

                        <div className="lartext1">Words beyond act...</div>
                        <div className="lartext2">Lorem</div>


                    </div>
                    <div className="larg">
                        <div className="larimg_"><img className="largeicon" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true" alt=""/></div>

                        <div className="lartext1">The Alexa Show</div>
                        <div className="lartext2">Lorem</div>

                        


                    </div>
                    <div className="larg">
                        <div className="larimg_"><img className="largeicon" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true" alt=""/></div>

                        <div className="lartext1">The Stories of Ma...</div>
                        <div className="lartext2">Lorem</div>

                        


                    </div>
                    <div className="larg">
                        <div className="larimg_"><img className="largeicon" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true" alt=""/></div>

                        <div className="lartext1">Motivatio Daily b...</div>
                        <div className="lartext2">Lorem</div>

                    </div> */}


                </div>
            </div>
        </>
    );
}
export default Main