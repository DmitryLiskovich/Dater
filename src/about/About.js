import React, {useState} from 'react';
import './scss/about.scss';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function About () {

    const [isOpen, setIsOpen] = useState(false);
    const [currentPost, setCurrentPost] = useState(1);

    const slider = (post) => {
        console.log(post);
        const posts = [`One from my hobbies is a sport. I started sport in 10 y.o. Now i can do many differents flips. I think it's amazing when you can do what other people can not do.`, 
        `What can i say about my current work? Usually, I create 3d models and it's cool. But now i loved into a frontend developing`, 
        `I opened frontend developing to myself around few mounts ago. And now I like it's so much, and I can do it all my free time`];
        const title = ['Sport', 'Current work', 'Front-end'];
        const image = ['sport','work','front'];
        const objsArray = [
            {post: posts[0], title: title[0], image: image[0]},
            {post: posts[1], title: title[1], image: image[1]},
            {post: posts[2], title: title[2], image: image[2]},
        ];

        const test = {root : {backgroundImage: `url(${objsArray[post-1].image})`}};
        console.log(test);

        const currentPosts = `about-section-3-slider-post-slide-${post}`;

        
        return (
            <div>
                <h2>Little more about me</h2>
                <i class="fas fa-chevron-left about-section-3-prev" 
                onClick={()=> post > 1 ? setCurrentPost(currentPost-1) : setCurrentPost(currentPost)}></i>
                <div className={`about-section-3-image-${objsArray[post-1].image}`}></div>
                <i class="fas fa-chevron-right about-section-3-next" 
                onClick={()=>post < 3 ? setCurrentPost(currentPost+1) : setCurrentPost(currentPost)}></i>
                <div className='about-section-3-slider-post'>
                    <div className={currentPosts}>
                        <div className={post === 1 ? 'about-section-3-slider-post-1-active' : 'about-section-3-slider-post-1'}>
                            <h3>{objsArray[0].title}</h3>
                            <p>{objsArray[0].post}</p>
                        </div>
                        <div className={post === 2 ? 'about-section-3-slider-post-2-active' : 'about-section-3-slider-post-2'}>
                            <h3>{objsArray[1].title}</h3>
                            <p>{objsArray[1].post}</p>
                        </div>
                        <div className={post === 3 ? 'about-section-3-slider-post-3-active' : 'about-section-3-slider-post-3'}>
                            <h3>{objsArray[2].title}</h3>
                            <p>{objsArray[2].post}</p>
                        </div>
                    </div>
                </div>
                <ul className='about-points'>
                    <li className={post === 1 ? 'about-point-active' : 'about-point'} onClick={()=>setCurrentPost(1)}></li>
                    <li className={post === 2 ? 'about-point-active' : 'about-point'} onClick={()=>setCurrentPost(2)}></li>
                    <li className={post === 3 ? 'about-point-active' : 'about-point'} onClick={()=>setCurrentPost(3)}></li>
                </ul>
            </div>
        );   
    }



    return(
        <div id="about" className='about'>
            <header className='about-header'>
                <div className='about-header-symbol'>
                    <i className='fas fa-users'></i>
                </div>
                <h2>About user</h2>
            </header>
            <div className='about-under-line-revers'></div>
            <section className='about-section-1'>
                <div className='about-section-1-content'>
                    <div className='about-section-1-content-img'></div>
                    <div className='about-section-1-content-text'>
                        <h2>Who am I?</h2>
                        <h3>I AM A <span>FRONT-END</span> DEVELOPER</h3>
                        <p>Hello, I'm a Front-End developer from Belarus. Development is my hobby. 
                            I can create big projects with HTML5, CSS3, JavaScript, React.js and Node.js. I like that i do. Are you interested?</p>
                    </div>
                </div>
            </section>
            <section className='about-section-2'>
                <div className='about-section-2-content'>
                    <div className='about-section-2-text'>
                        <h2>My Projects</h2>
                        <div>
                            <div onClick={()=>setIsOpen(!isOpen)} 
                            className={isOpen ? 'about-section-2-image-active' : 'about-section-2-image'}></div>
                            <div className={isOpen ? 'about-section-2-image-discryption-active' : 'about-section-2-image-discryption'}>
                                <h3>Server for a mobile app on node.js</h3>
                                <p>I have experience in creting node.js server for a mobile app created on 
                                    Xamarin. It's was be my first project. On this project I created 
                                    simple RESTfull service. I like this project, because this helped me
                                    learn more about node.js.
                                </p>
                            </div>
                            </div>
                        </div>
                        <p className='about-section-2-PS'>P.S. I have only one project now, but you are can watching on this pretty kitty</p>
                        <div  className='about-app' >
                            <a href='myprojects.com'><div className='about-pretty'></div></a>
                        </div>
                        <p>P.P.S if you click on this pretty kitty, you can download my project :)</p>
                </div>
            </section>
            <section className='about-section-3'>
                {slider(currentPost)}
            </section>
            <div className='about-under-line-revers'></div>
            <footer className='about-footer-main'>
                <div className='about-footer'>
                    <ul className='about-footer-ul'>
                        <li><a href='https://www.linkedin.com/in/dmitry-liskovich-175470174/' className='about-a'><i className='fab fa-linkedin-in about-footer-li'></i></a></li>
                        <li><i className='fab fa-skype about-footer-li'></i></li>
                    </ul>
                    <p>All right reserved &copy;</p>
                </div>
            </footer>
        </div>
    );
}

export default About;