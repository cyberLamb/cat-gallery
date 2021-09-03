import React from 'react';
import {MenuList} from "@material-ui/core";
import {useSelector} from "react-redux";
import {BrowserRouter as Router, Route,  Switch, Link} from "react-router-dom";
import GalleryItem from "../gallery/GalleryItem";
import NavbarLink from "../../component/styleComponents/Link";
import'./style.css'

const CategoryNavBar = () => {

    let categories = useSelector((state) => state.category.categories)


    return (
        <MenuList display="inline">
            <Router>
                <div className="navBar">
                    {
                        categories.map((item) => {
                            return (
                                <div>
                                    <NavbarLink key={item.id} menu>
                                        <Link to={`/category/${item.id}`} exact={true} activeClassName='is-active'>
                                            {item.name}
                                        </Link>
                                    </NavbarLink>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="itemMain">
                    <Switch>
                        <Route path="/category/:id" children={<GalleryItem/>}/>
                        <Route path="/category/" children={<GalleryItem/>}/>
                    </Switch>
                </div>
            </Router>
        </MenuList>
    )
}

export default React.memo(CategoryNavBar)