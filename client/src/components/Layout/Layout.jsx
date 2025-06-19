import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet} from 'react-helmet'; 
import { ToastContainer } from 'react-toastify';

const Layout = ({children , title , description , keywords , author}) => {
    return (
        <div>
            <Helmet>
                
                    <meta charSet="UTF-8" />
                    <meta name="description" content={description} />
                    <meta name="keywords" content={keywords} />
                    <meta name="author" content={author} />
                    <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{minHeight : '75vh'}}>
                <ToastContainer />
                {children}
            </main>
            
            <Footer />
        </div>
    );
}

//Adds the default meta information
Layout.defaultProps = {
    title : "Ecommerce App",
    description : "This is MERN Stack Project",
    author : "Aishwarya Ajagekar",
    keywords : "mern , mongodb , node , express , react"
}
export default Layout;
