const networkCaller = (url) => {
    return fetch(url)
        .then(res => res.json() )
        .then(peopleData => {
            //console.log("People Data: ", peopleData);
            const { results } = peopleData; // destructuring
            return results;
        })
        .catch(err => console.log("fetch error: ", err));
};

export default networkCaller;