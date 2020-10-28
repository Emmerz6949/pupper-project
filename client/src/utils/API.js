import axios from "axios";

export default {
    //sends email
    sendMail: function(mailInfo) {
        return axios.post("/api/mail", mailInfo);
    }
};
