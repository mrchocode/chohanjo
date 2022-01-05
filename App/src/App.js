import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogSinglePost from './pages/BlogSinglePost';
import SearchResults from './pages/SearchResults';
import PortfolioInside from './pages/PortfolioInside';
import page404 from './pages/404';
import UserInterface from './pages/UserInterface';

function App() {
    useEffect(() => {
        // Android check
        let ua        = navigator.userAgent.toLowerCase();
        let isAndroid = ua.indexOf( "android" ) > -1;

        if ( document.querySelector('body').classList.contains( 'aos-true' )) {
            if ( document.querySelector('.loading') ) {
                if ( ! isAndroid ) {
                    setTimeout( function() {
                        AOS.init( {
                            easing: 'ease-out-back',
                            duration: 2000,
                            offset: 60
                        } );
                    }, 1000 );
                } else {
                    AOS.init( {
                        easing: 'ease-out-back',
                        duration: 2000,
                        offset: 60
                    } );
                }
            } else {
                AOS.init( {
                    easing: 'ease-out-back',
                    duration: 2000,
                    offset: 60
                } );
            }
        }
    }, []);

    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/" }` }
                    component={ Home }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/blog" }` }
                    component={ Blog }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/blog-single-post" }` }
                    component={ BlogSinglePost }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/search-results" }` }
                    component={ SearchResults }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/ui" }` }
                    component={ UserInterface }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/portfolio-inside" }` }
                    component={ PortfolioInside }
                />
                <Route exact component={ page404 }/>
            </Switch>
        </Router>
    );
}

export default App;
