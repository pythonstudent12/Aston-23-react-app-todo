import WishListItem from "../wish-list-item/wish-list-item";

import './wish-list.css';

const WishList = ({data, showItem, onToggleProp, onRename}) => {

    const elements = data.map(item => {
        const {id,...itemProps} = item;
        return (
            <WishListItem 
            key={id} 
            {...itemProps}
            showItem={()=>showItem(id)}
            onToggleProp={()=>onToggleProp(id)}
            onRename={()=>onRename(id, item.value)}/>
        )
    })
    return (
        <ul className="app-list list-group">
         {elements}
        </ul>
    )
}

export default WishList;