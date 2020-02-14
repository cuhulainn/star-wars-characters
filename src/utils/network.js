const networkCaller = (url) => {
    return fetch(url)
        .then(res => res.json() )
        .then(returnData => {
            //console.log("People Data: ", peopleData);
            if ('results' in returnData ) {
                const { results } = returnData; // destructuring
                return results;
            } else {
                return returnData;
            };
        })
        .catch(err => console.log("fetch error: ", err));
};

export default networkCaller;