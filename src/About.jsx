import React, { useContext, useEffect } from 'react';
import { PageContext } from './App';
import AboutImg from './assets/AboutImg.svg';
import './App.css';

export default function About() {
    const {log, setLog, currentPage, setCurrentPage} = useContext(PageContext);
    useEffect(() => {
        setCurrentPage('About');
    }, [currentPage]);
    return (
        <div className="lg:px-20 px-8 md:text-base text-xs lg:text-base">
            <h1 className="text-[rgb(212,195,87)] mt-4 mb-2 text-sm lg:text-lg font-bold">ABOUT</h1>
				<div className={`aboutp ${"rounded-lg flex justify-center items-center"}`}>
					<img className={`profimg ${"rounded-lg flex justify-center items-center"}`} src={AboutImg} style={{width:`18em`,height:`auto`,}}/>
					<div className={`abtxt ${"rounded-lg flex justify-center items-center"}`}>
						<p style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Priyanshu Sachan :&nbsp;</p>
						<p style={{fontSize: '1em' }}>Priyanshu Sachan, a dynamic developer weaving digital dreams into reality. With a robust skill set in MongoDB and Express, Priyanshu is a visionary coder, crafting solutions that seamlessly blend functionality and innovation. His journey in the tech realm is fueled by a relentless curiosity, always eager to explore emerging trends and push the boundaries of what's possible. Priyanshu's commitment to precision and his knack for elegant solutions shine through in every project.</p>
					</div>
				</div>
				<div className={`aboutp ${"rounded-lg flex justify-center items-center"}`}>
					<div className={`abtxt ${"rounded-lg flex justify-center items-center"}`}>
						<p style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Pushkar Urs :&nbsp;</p>
						<p style={{fontSize: '1em' }}> Pushkar Urs, a visionary developer shaping digital landscapes with ingenuity and expertise. Armed with a profound understanding of React and CSS, Pushkar is on a mission to redefine user experiences through innovative coding. His dedication to excellence is evident in the meticulous craftsmanship of his projects, seamlessly blending functionality with aesthetic appeal. Beyond the code, Pushkar Urs is a perpetual learner, eagerly embracing new challenges and staying at the forefront of technological advancements.</p>
					</div>
					<img className={`profimg ${"rounded-lg flex justify-center items-center"}`} src={AboutImg} style={{width:`18em`,height:`auto`,}}/>
				</div>
				<div className={`aboutp ${"rounded-lg flex justify-center items-center"}`}>
					<img className={`profimg ${"rounded-lg flex justify-center items-center"}`} src={AboutImg} style={{width:`18em`,height:`auto`,}}/>
					<div className={`abtxt ${"rounded-lg flex justify-center items-center"}`}>
						<p style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Pushkar S :&nbsp;</p>
						<p style={{fontSize: '1em' }}>Pushkar S, a dedicated and innovative developer with a passion for turning ideas into reality through code. Armed with a strong background in DSA, React and CTF, Pushkar thrives on the challenges of the ever-evolving tech landscape. With a keen eye for detail and a commitment to delivering high-quality solutions, he has successfully brought numerous projects to life. Beyond coding, Pushkar is a continuous learner, always exploring new technologies and methodologies to stay at the forefront of the industry.</p>
					</div>
				</div>
        </div>
    );
}
