import CardContext from "./card-context";

const CardProvider = (props) => {
    const addItemToCartHandler = (item) => {
        console.log(item);
    };
    const removeItemFromCartHandler = (id) => {
        console.log(id);
    };

    const cartContext = {
        items : [],
        totalAmount : 0,
        addItem : addItemToCartHandler,
        removeItem : removeItemFromCartHandler
    }
    return <CardContext.Provider value={cartContext}>
        {props.children}
    </CardContext.Provider>
};

export default CardProvider;