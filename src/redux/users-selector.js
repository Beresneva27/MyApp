import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
})

export const getPageSize = (state) => {
    return state.usersPage.page;
}

export const getTotalUsersCount = (state) => {
    state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    state.usersPage.followingInProgress;
} 