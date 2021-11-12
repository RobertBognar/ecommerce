import React from 'react'
import { Carousel } from 'react-carousel-minimal';

//Importing Slider For Test
function About() {
    const data = [
        {
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RvcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            caption: "Our Store Test"
        },
        {
            image: "https://c1.wallpaperflare.com/preview/403/473/138/shop-clothes-clothing-shopping-mall.jpg",
            caption: "Our Store Test"
        },
        {
            image: "https://wallpaperaccess.com/full/418565.jpg",
            caption: "Our Store Test"
        },
        {
            image: "https://lh3.googleusercontent.com/proxy/bsys4_7Z3SMjljlr_ScToplwB40vAJ7CgrWxQGd0UEQrCtruAl57CwQkHwgAswJZvK-M-E-ZSnA6BJIZqsXuc_141kUGODWmhDyNKahb63jBwCAvqOQ9hQTKA-Qpjc7y-GPJACo5_UM",
            caption: "Our Store Test"
        },
        {
            image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3RvcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            caption: "Our Store Test"
        }
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <div className="about-container">
            <div>
                <h1 className="aboutUs">About Us</h1>
            </div>
            <div className="paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className="scroll" style={{ textAlign: "center" }}>
                <div style={{
                    padding: "0 20px"
                }}>
                    <Carousel
                        data={data}
                        time={2000}
                        width="850px"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "40px auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
