import { useEffect, useState } from "react";
import SectionTile from "../../../components/SectionTitle/SectionTile";


const PopularItems = () => {
    const[items, setItems] = useState([]);
    useEffect(()=>{
        fetch('items.json')
        .then(res=> res.json())
        .then(data =>{
            const popularitems = data.filter(item=>item.category ==='popular')
            setItems(popularitems)})

        
    },[])
    return (
        <div>
            <SectionTile
            subHeading={"this is popular Items"}
            heading={"Popular Items"}
            
            ></SectionTile>
            {
                items.map(myitem => <h1 key={myitem._id}>{myitem.name}</h1>)
            }
        </div>
    );
};

export default PopularItems;