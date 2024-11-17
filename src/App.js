import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop'



import Marketing from "./pages/Marketing";
import CategoryList from "./pages/CategoryList";
import TagList from "./pages/TagList";
import Author from "./pages/Author";
import AboutUs from "./pages/AboutUs";
import Projects from './pages/Projects';

// Elements import Here 

import Elements from "./elements/elements/Elements";
import Button from "./elements/button/Button";
import Service from "./elements/service/Service";
import CounterUp from "./elements/counterup/CounterUp";
import Progressbar from "./elements/progressbar/Progressbar";

import Portfolio from "./elements/portfolio/Portfolio";
import portfolioThreeColumn from "./elements/portfolio/PortfolioThreeColumn";
import Social from "./elements/social/Social";
// import Team from "./elements/team/Team";
import Timeline from "./elements/timeline/Timeline";

import RnAccordion from "./elements/accordion/RnAccordion";
import Tab from "./elements/tab/Tab";

//Pricing Part
import Pricing from "./elements/pricing/Pricing";
// import ServicePring from "./elements/pricing/EcommerceServicePring";
import EcommerceServicePring from "./elements/pricing/EcommerceServicePring";
import SeoPricing from "./elements/pricing/SeoPricing";
import EmailPricing from "./elements/pricing/EmailPricing";
import GoogleAdvertisement from "./elements/pricing/GoogleAdvertisement";
import FacebookPricing from "./elements/pricing/FacebookPricing";
import YouTubePricing from "./elements/pricing/YouTubePricing";
import VideoPricing from "./elements/pricing/VideoPricing";
import WebAppPricing from "./elements/pricing/WebAppPricing";
import HostingPricing from "./elements/pricing/HostingPricing";
import WebDevPricing from "./elements/pricing/WebDevPricing";
import CRMSolutionsPricing from "./elements/pricing/CRMSolutionsPricing";
// import AppPricing from "./elements/pricing/AppPricing";


import Split from "./elements/split/Split";
import CalltoAction from "./elements/calltoaction/CalltoAction";
import Video from "./elements/video/Video";
import Gallery from "./elements/gallery/Gallery";
import ContactNew from "./elements/contact/ContactNew";
import Contact from "./elements/contact/Contact";


import Brand from "./elements/brand/Brand";
import AdvanceTab from "./elements/advancetab/AdvanceTab";
import AdvancePricing from "./elements/advancePricing/AdvancePricing";


// import BlogGridView from "./components/blog/BlogGridView";
import BlogListView from "./components/blog/BlogListView";
import Blogs from "./components/blog/Blogs";
import Error from "./pages/Error";




// Import Css Here 
import './assets/scss/style.scss';

const App = () => {
    return (
        <Router>
            <PageScrollTop>
                <Switch>
                    {/* <Route path={`${process.env.PUBLIC_URL + "/business-consulting"}`} exact component={HomeDefault}/> */}
                    {/* <Route path={`${process.env.PUBLIC_URL + "/app-development"}`} exact component={AppPricing}/> */}
                    <Route path={`${process.env.PUBLIC_URL + "/crm-solutions"}`} exact component={CRMSolutionsPricing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/ecommerce-solution"}`} exact component={EcommerceServicePring}/>
                    <Route path={`${process.env.PUBLIC_URL + "/web-design-and-development"}`} exact component={WebDevPricing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/seo"}`} exact component={SeoPricing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/email-marketing"}`} exact component={EmailPricing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/google-advertisement"}`} exact component={GoogleAdvertisement}/>
                    <Route path={`${process.env.PUBLIC_URL + "/facebook-promotion-and-boosting"}`} exact component={FacebookPricing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/youtube-advertisement"}`} exact component={YouTubePricing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/video-editing"}`} exact component={VideoPricing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/web-application"}`} exact component={WebAppPricing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/hosting"}`} exact component={HostingPricing}/>
                    

                
                    <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={Marketing}/>
                  

                    {/* Blog Part  */}
                    {/* <Route path={`${process.env.PUBLIC_URL + "/blog-grid"}`} exact component={BlogGridView}/> */}
                    <Route path={`${process.env.PUBLIC_URL + "/blog-list-view"}`} exact component={BlogListView}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blogs"}`} exact component={Blogs}/>
                    <Route path={`${process.env.PUBLIC_URL + "/category/:slug"}`} exact component={CategoryList}/>
                    <Route path={`${process.env.PUBLIC_URL + "/archive/:slug"}`} exact component={Author}/>
                    <Route path={`${process.env.PUBLIC_URL + "/tag/:slug"}`} exact component={TagList}/>

                    <Route path={`${process.env.PUBLIC_URL + "/elements"}`} exact component={Elements}/>
                    <Route path={`${process.env.PUBLIC_URL + "/button"}`} exact component={Button}/>
                    <Route path={`${process.env.PUBLIC_URL + "/service"}`} exact component={Service}/>
                    <Route path={`${process.env.PUBLIC_URL + "/counter"}`} exact component={CounterUp}/>
                    <Route path={`${process.env.PUBLIC_URL + "/progressbar"}`} exact component={Progressbar}/>
                    <Route path={`${process.env.PUBLIC_URL + "/social-share"}`} exact component={Social}/>
                    {/* <Route path={`${process.env.PUBLIC_URL + "/team"}`} exact component={Team}/> */}
                 
                    <Route path={`${process.env.PUBLIC_URL + "/timeline"}`} exact component={Timeline}/>
                    <Route path={`${process.env.PUBLIC_URL + "/accordion"}`} exact component={RnAccordion}/>
                    <Route path={`${process.env.PUBLIC_URL + "/tab"}`} exact component={Tab}/>
                    <Route path={`${process.env.PUBLIC_URL + "/pricing"}`} exact component={Pricing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/split"}`} exact component={Split}/>
                    <Route path={`${process.env.PUBLIC_URL + "/call-to-action"}`} exact component={CalltoAction}/>
                    <Route path={`${process.env.PUBLIC_URL + "/video-popup"}`} exact component={Video}/>
                    <Route path={`${process.env.PUBLIC_URL + "/gallery"}`} exact component={Gallery}/>
                    <Route path={`${process.env.PUBLIC_URL + "/contactNew"}`} exact component={ContactNew}/>
                    <Route path={`${process.env.PUBLIC_URL + "/Contact"}`} exact component={Contact}/>
                    
                 
                    <Route path={`${process.env.PUBLIC_URL + "/brand"}`} exact component={Brand}/>
                    <Route path={`${process.env.PUBLIC_URL + "/advance-tab"}`} exact component={AdvanceTab}/>
                    <Route path={`${process.env.PUBLIC_URL + "/advance-pricing"}`} exact component={AdvancePricing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/about-us"}`} exact component={AboutUs}/>

                    <Route path={`${process.env.PUBLIC_URL + "/error"}`} exact component={Error}/>
                    
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio"}`} exact component={Portfolio}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-three-column"}`} exact component={portfolioThreeColumn}/>
                    <Route path={`${process.env.PUBLIC_URL + "/projects"}`} exact component={Projects}/>

                </Switch>
            </PageScrollTop>
        </Router>
    )
}


export default App
