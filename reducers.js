"use strict";

exports.initialState = {
    token: {
        uid: localStorage.getItem("uid"),
        client: localStorage.getItem("client"),
        token: localStorage.getItem("token"),
        validated: false
    },
    user: {}
};
var types = require("./actionTypes");
function user() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exports.initialState.user;
    var action = arguments[1];

    switch (action.type) {
        case types.RESET_USER:
            return {};
        case types.LOAD_USER_FAILED:
            return null;
        case types.LOAD_USER_SUCCESS:
            return action.user;
        default:
            return state;
    }
}
exports.user = user;
function token(state, action) {
    if (state === null || state === undefined || Object.keys(state).length === 0) {
        state = exports.initialState.token;
    }
    switch (action.type) {
        case types.TOKEN_REFRESH_SUCCESS:
            return action.token;
        case types.TOKEN_DELETE_SUCCESS:
            return { uid: null, token: null, client: null, validated: false };
        default:
            return state;
    }
}
exports.token = token;