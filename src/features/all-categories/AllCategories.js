import React, {useEffect, useState} from 'react';
import {getAllCategories} from "./allCategoriesSlice";
import Image from "../../component/styleComponents/Image";
import {useDispatch, useSelector} from "react-redux";
import ButtonWrapper from "../../component/styleComponents/Button";

const AllCategories = () => {
    const dispatch = useDispatch()

    const allCats = useSelector((state) => state.all.allCats)
    console.log(allCats, "bolory")

    const [page, setPages] = useState(1)

    // console.log(
    //     allCats.map((item)=> {
    //         console.log(item.url)
    //     })
    // )
    // debugger

    const moreCats = () => {
        setPages(page + 10)
        // console.log(page)
    }
    useEffect(() => {

        dispatch(getAllCategories())
    }, [])

    useEffect(() => {
        if (page > 10) {
            dispatch(getAllCategories(page))
        }
    }, [page])


    return (

        <div>
            {
                allCats.map((item) =>
                    <Image key={item.id} galleryImage src={item.url}/>
                    // console.log(item.url)
                )
            }
            <ButtonWrapper variant onClick={moreCats} text={'See More'}/>
        </div>


    )
}

export default AllCategories;