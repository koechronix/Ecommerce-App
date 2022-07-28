const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD_ITEM":
      const exit = state.find((x) => x.id === product.id);
      
    case "DEL_ITEM":
      const exit1 = state.find((x) => x.id === product.id);
     
      break;
    default:
      return state;
      break;
  }
};

export default handleCart;
