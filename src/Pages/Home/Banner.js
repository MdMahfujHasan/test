import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../Shared/PrimaryButton';
import Type from './Type';
import home from '../../assets/images/home.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div style={{ background: `url(${home})`, backgroundSize: 'cover', backgroundSize: '100%' }} className="hero-content flex-col lg:flex-row-reverse">
                <img style={{ border: '5px solid pink', marginTop: '-130px' }} src={home} className="w-1/3 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <h3 class="animate-charcter">Ask for an appointment of the doctor quickly with almost a single click. We take care of the rest.</h3>
                                    <div style={{ color: '#00FF7F', fontSize: 45, fontFamily: 'monospace', paddingTop: 10, textAlign: "center" }}>
                                        <Type />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </h1>
                    <p className="py-5 large-letter">The solution of your household problems is a few clicks away.</p>
                    <Link to="/appointment"><PrimaryButton>Get Started</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;