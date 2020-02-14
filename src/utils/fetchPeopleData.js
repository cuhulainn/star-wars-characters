const fetchPeopleData = (url) => {
    return fetch(url)
        .then(res => res.json() )
        .then(returnData => {
            console.log(`fetchPeopleData returnData = ${returnData}`);
            const { results } = returnData; // destructuring
            return results;
        })
        .catch(err => console.log("fetch error: ", err));
};

export default fetchPeopleData;