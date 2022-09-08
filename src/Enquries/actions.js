const actions = {
  STORE_ENQUIRES: "STORE_ENQUIRES",
  storeEnquiries: (payload) => {
    return {
      type: actions.STORE_ENQUIRES,
      payload,
    };
  },
};

export default actions;
