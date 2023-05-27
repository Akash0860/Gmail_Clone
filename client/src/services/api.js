import axios from 'axios';

const API_URI = https://gmail-clone-0c2m.onrender.com'

const API_GMAIL = async (urlObject,payload,type) => {
    //const { params, urlParams, ...body } = requestData;

    return await axios({
        method: urlObject.method,
        url: `${API_URI}/${urlObject.endpoint}/${type}`,
        data: payload
    })
}

export default API_GMAIL;
