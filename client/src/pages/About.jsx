import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
    return (
        <>
            <Layout
                title="About us Ecommerce App" 
                description= "This is About Us Page"
                keywords= "ecommerce app , e commerce applications , ecommerce business"
            >
                <div className='container py-3'>
                    <div className='row align-items-center'>
                        {/* Left side image content */}
                        <div className='col-md-6'>
                            <img src="/images/team.jpg" alt="About Us" className='img-fluid rounded'/>
                        </div>

                        {/* Right Side Content */}
                        <div className='col-md-6'>
                            <h2 className='mb-4'>About Us</h2>
                            <p className='text-muted'>The best About Us pages share the company and founders’ stories. It’s a chance to pull back the curtain on the business and showcase the people who make it happen.</p>

                            <p className='text-muted'>
                            Consumers want to know the team behind the brand they are supporting. An About Us page provides the perfect real estate to pull back the curtain and reveal who is working behind the scenes.
                            </p>

                            <ul className='text-muted'>
                                <li>Connect the consumer to the business on a deeper level</li>
                                <li>Provide contextual insight into why the founders created the business</li>
                                <li>Share the business’s core values, mission, beliefs, and vision</li>
                                <li>Answer any questions that consumers may have about the business</li>
                            </ul>

                            <button className='btn mt-3' style={{ backgroundColor: "#D268CC", color: "white" }}>Learn More</button>
                        </div>

                    </div>
                </div>
            </Layout>
        </>
    );
}

export default About;
