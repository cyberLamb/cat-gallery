import React from 'react';
import Typography from '@material-ui/core/Typography';
import {MenuItem, MenuList} from "@material-ui/core";
import {useSelector} from "react-redux";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import GalleryItem from "./GalleryItem";

const NavbarMenu = () => {

    let categories = useSelector((state) => state.gallery.categories)


    return (
        <div>
            <MenuList display="inline">
                <Router>
                    {
                        categories.map((item) => {
                            return (
                                <MenuItem key={item.id}>
                                    <Link to={`/category/${item.id}`}>
                                        <Typography variant="inherit" color="inherit"
                                        >{item.name}
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            )
                        })
                    }
                    <Switch>
                        <Route path="/category/:id" children={<GalleryItem/>}/>
                    </Switch>

                </Router>

            </MenuList>
        </div>
    )
}

export default React.memo(NavbarMenu)