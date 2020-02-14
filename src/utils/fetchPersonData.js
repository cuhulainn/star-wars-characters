const fetchPersonData = (url) => {
    return fetch(url)
        .then(res => {
            console.log(url)
            return res.json();
        })
        .then(returnData => {
            console.log(`fetchPersonData returnData = ${returnData}`);
            const { results } = returnData; // destructuring
            return results;
        })
        .catch(err => console.log("fetch error: ", err));
};

export default fetchPersonData;