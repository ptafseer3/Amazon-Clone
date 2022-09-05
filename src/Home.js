import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Getting started by python"
                        price={2351.93}
                        image="https://static.packt-cdn.com/products/9781838551919/cover/smaller"
                        rating={4}
                    />
                    <Product 
                        id="43362751"
                        title="HP 15 (2021) 11th Gen Intel Core i5 15 inches FHD Screen Thin & Light Laptop, Iris Xe Graphics, 8 GB RAM, 1TB SSD, Windows 10"
                        price={3500}
                        image="https://m.media-amazon.com/images/I/81SdJG3OUjL._SX450_.jpg"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="43345651"
                        title="JBL T50HI Earphones with Mic (Blue)"
                        price={749}
                        image="https://d2xamzlzrdbdbn.cloudfront.net/products/f39b17be-a569-450f-a79b-307f1d307e2b_416x416.jpg"
                        rating={4}
                    />
                    <Product 
                        id="23345651"
                        title="Sony Wireless Bluetooth Speaker (SRS-XB12, Black)"
                        price={3490}
                        image="https://media.croma.com/image/upload/v1618216292/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/195917_1_qto87o.png"
                        rating={3}
                    />
                    <Product 
                        id="72314526"
                        title="Buy Henry 3 Seater Sofa (Cotton, Indigo Ink) Online in India - Wooden Street"
                        price={38941}
                        image="https://images.woodenstreet.de/image/cache/data%2Ffabric-sofa%2Fhenry-fabric-sofa%2Findigo-ink%2Flook-1100x768.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="72318765"
                        title="Apple Watch Series 3 GPS, 38mm Silver Aluminium Case with White Sport Band"
                        price={20900}
                        image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/38-alu-silver-sport-white-nc-s3-1up?wid=1673&hei=1353&fmt=jpeg&qlt=95&.v=1594318675000"
                        rating={5}
                    />
                    <Product
                        id="72318765"
                        title="Park Avenue Signature Voyage Deodorant For Men 100 gm/ 130 ml"
                        price={210}
                        image="https://newassets.apollo247.com/pub/media/catalog/product/p/a/par0203_1.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="76834521"
                        title="Dual Inverter Hot & Cold Split Air Conditioner(1.5) with 4 Way Swing"
                        price={43990}
                        image="https://www.lg.com/in/images/AC/RAC-Gallery/D-01.jpg"
                        rating={3}
                    />
                </div>
            </div>   
        </div>
    )
}

export default Home
