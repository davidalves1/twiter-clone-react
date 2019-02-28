import api from './api';

const index = async function() {
    const tweets = await api.get('/tweets');

    return tweets;
};

const store = async function(data) {
    const response = await api.post('/tweets', data);

    return response;
}

export default {
    index,
    store
}
