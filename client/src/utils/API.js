import axios from "axios";

export default {
    //sends email
    sendMail: function (mailInfo) {
        return axios.post("/api/mail", mailInfo);
    },

    //logs in OWNERS
    loginOwner: function (loginInfo) {
        return axios.post("/api/owner_login", loginInfo);
    },
    //signups owners
    signupOwner: function (signupInfo) {
        return axios.post("/api/owner_signup", signupInfo);
    },
    logout: function (logoutInfo) {
        return axios.get("/logout", logoutInfo);
    },
    owner_profile: function (profileInfo) {
        return axios.put("/api/owner_profile", profileInfo);
    },
    owner_data: function (dataInfo) {
        return axios.get("/api/owner_data", dataInfo);
    },
    owner_schedule: function (scheduleInfo) {
        return axios.put("/api/owner_schedule", scheduleInfo);
    },

    match: function (matchInfo) {
        return axios.get("/api/match", matchInfo);
    },

    //logs in WALKERS
    loginWalker: function (loginInfo) {
        return axios.post("/api/walker_login", loginInfo);
    },
    //signups walkers
    signupWalker: function (signupInfo) {
        return axios.post("/api/walker_signup", signupInfo);
    },
    walker_profile: function (profileInfo) {
        return axios.put("/api/walker_profile", profileInfo);
    },
    walker_data: function (dataInfo) {
        return axios.get("/api/walker_data", dataInfo);
    },
    walker_schedule: function (scheduleInfo) {
        return axios.put("/api/walker_schedule", scheduleInfo);
    }
};