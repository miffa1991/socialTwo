export const listUsers = (state) => {
   return state.userPage.users;
}

export const countUsers = (state) => {
   return state.userPage.count;
}

export const currentPageS = (state) => {
   return state.userPage.currentPage;
}

export const totalCountS = (state) => {
   return state.userPage.totalCount;
}

export const fetchingS = (state) => {
   return state.userPage.fetching;
}

export const disableS = (state) => {
   return state.userPage.disable;
}

