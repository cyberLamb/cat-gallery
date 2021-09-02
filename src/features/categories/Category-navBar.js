import React from 'react';
import {MenuList} from "@material-ui/core";
import {useSelector} from "react-redux";
import {BrowserRouter as Router, Route, NavLink, Switch, Link} from "react-router-dom";
import GalleryItem from "../gallery/GalleryItem";
import NavbarLink from "../../component/styleComponents/Link";

const CategoryNavBar = () => {

    let categories = useSelector((state) => state.category.categories)


    return (
        <MenuList display="inline">
            <Router>
                <div style={{display: "flex"}}>
                    {
                        categories.map((item) => {
                            return (

                                <NavbarLink key={item.id} menu>
                                    <Link to={`/category/${item.id}`}>
                                        {item.name}
                                    </Link>
                                </NavbarLink>

                            )
                        })
                    }
                </div>
                <Switch>
                    <Route path="/category/:id" children={<GalleryItem/>}/>
                </Switch>
            </Router>
        </MenuList>
    )
}

export default React.memo(CategoryNavBar)