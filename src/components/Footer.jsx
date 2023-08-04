import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#faeeee] px-[120px] py-12 grid grid-rows-1 lg:grid-cols-4 '>
            <div>
                <h2>setion</h2>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>FAQs</li>
                    <li>About</li>
                </ul>
            </div>
            <div>
                <h2>setion</h2>
                <ul>
                    <li>UIUX Design</li>
                    <li>Product Design</li>
                    <li>Back End Developer</li>
                    <li>Front End Developer</li>
                </ul>
            </div>
            <div>
                <h2>Resource</h2>
                <ul>
                    <li>FAQ</li>
                    <li>Support</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            <div>
                <h2>Subscribe to our newsletter</h2>
                <p className='text-[12px] my-4'>There are many variations of passages of available, <br/> but the majority have suffered</p>
                <div>
                   <input type="text" placeholder='Email address' className='p-[3px]'/>
                   <button className='bg-[#FFC107] p-[4px] ml-2 rounded'>subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;