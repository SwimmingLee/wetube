import { join } from "path";

// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// User
const USERS  = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWARD = "/change-password";

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const DELETE_VIDEO = "/:id/delete";
const EDIT_VIDEO = "/:id/edit";



const routes = {
    home : HOME,
    search : SEARCH,
    join : JOIN,
    login : LOGIN,
    logout : LOGOUT,

    users : USERS,
    userDetail : USER_DETAIL,
    editProfile : EDIT_PROFILE,
    changePassword : CHANGE_PASSWARD,

    videos : VIDEOS,
    upload : UPLOAD,
    videoDetail : VIDEO_DETAIL,
    deleteVideo : DELETE_VIDEO,
    editVideo : EDIT_VIDEO

}

export default routes;