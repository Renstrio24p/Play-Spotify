import classNames from "classnames/bind";
import styles from './sass/modules/app.module.scss'
import Render from "./render/Render";

export const cx = classNames.bind(styles);

export default function Start(DOM) {
    
    const FontAwesome = document.createElement('script');
    FontAwesome.src = 'https://kit.fontawesome.com/6b203b1712.js';
    FontAwesome.crossOrigin = 'anonymous';
    document.head.append(FontAwesome);
 
    DOM.innerHTML = (
        `
        <div class='${cx('container')}' id='container'>
            <div class='${cx('song-details')}'>
                <img class='${cx('ariana')}' src='ariana-3.jpg' alt='ariana grande image' />
                <h1>Santa Tell me</h1>
                <p>Ariana Grande</p>
            </div>
            <div class='${cx('duration')}'>
                <p>0:00</p>
                <p>4:69</p>
            </div>
            <div class='${cx('progress-bar')}'>
                <div class='${cx('round')}'></div>
            </div>
            <div class='${cx('play-buttons')}'>
                <i class="fa-solid fa-backward-step"></i>
                <div class='${cx('play-round')}'>
                    <i class="fa-solid fa-play"></i>
                </div>
                <i class="fa-solid fa-forward-step"></i>
            </div>
        </div>

        `
    )

  Render(); // Renders all the Element ID's
}