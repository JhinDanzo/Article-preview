import "./MainPage.scss";
import articleImage from "../assets/drawers.jpg";
import authorAvatar from "../assets/avatar-michelle.jpg";
import SharePage from "../SharePage/SharePage";
import Facebook from "../assets/icon-facebook.svg";
import Pinterest from "../assets/icon-pinterest.svg";
import Twitter from "../assets/icon-twitter.svg"

import { useState } from "react";

function MainPage(){
    
    const [isShareOpen, setIsShareOpen] = useState(false);

    const handleShareClick = (e) => {
        setIsShareOpen(!isShareOpen);
        e.stopPropagation();
    }

    const handleShareClose = () => {
        setIsShareOpen(false);
    }

    const ColorChange = !isShareOpen ? "share-button-light" : "share-button-dark";
   

    return(
        <>
            <header>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
            </header>
            <main>
                <div className="main-container" onClick={handleShareClose}>
                    <img alt="article-image" className="article-image" src={articleImage} />
                    <section className="content-section">
                        <h1 className="article-title">
                            Shift the overall look and feel by adding these 
                            wonderful touches to furniture in your home
                        </h1>
                        <p className="main-text">
                            Ever been in a room and felt like something was missing? 
                            Perhaps it felt slightly bare and uninviting. 
                            I’ve got some simple tips to help you make any room feel complete.
                        </p>
                        <div className="author-info-container">
                            <img className="author-avatar" src={authorAvatar} />
                            <div className="author-date-container">
                                <div className="author-name">Michelle Appleton</div>
                                <div className="date grid-item">28 Jun 2020</div>
                            </div>
                            <button className={ColorChange} onClick={handleShareClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                                    <path className="my-share-svg" fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
                                </svg>
                            </button>
                            <SharePage show={isShareOpen} >
                                <span className="share-text">SHARE</span>
                                <img className="social-media-link" alt="facebook" src={Facebook} />
                                <img className="social-media-link" alt="facebook" src={Twitter} />
                                <img className="social-media-link" alt="facebook" src={Pinterest} />
                            </SharePage>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default MainPage