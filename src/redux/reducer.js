const userNames = [
  "Liam",
  "Noah",
  "Oliver",
  "Elijah",
  "James",
  "William",
  "Benjamin",
  "Lucas",
  "Henry",
  "Alexander",
  "Mason",
  "Michael",
  "Ethan",
  "Daniel",
  "Jacob",
  "Logan",
  "Jackson",
  "Sebastian",
  "Aiden",
  "Matthew",
  "Samuel",
];

const initialState = {
  userList: userNames,
  filterString: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_FILTER`:
      return {
        ...state,
        userList: action.payload.filterString
          ? initialState.userList.filter((user) =>
              user
                .toLowerCase()
                .includes(action.payload.filterString.toLowerCase())
            )
          : initialState.userList,
        filterString: action.payload.filterString,
      };
    default:
      return state;
  }
};

export default filterReducer;
