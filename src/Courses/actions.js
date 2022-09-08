const actions = {
  STORE_COURSES: "STORE_COURSES",
  storeCourses: (payload) => {
    return {
      type: actions.STORE_COURSES,
      payload,
    };
  },
};

export default actions;
