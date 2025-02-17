const nestedObj = {
    name: "John",
    address: {
        city: "New York",
        zip: {
            code: 10001,
            area: "Manhattan"
        }
    },
    hobbies: ["reading", "traveling"]
};

export const flattenObj = (nestedObj) => {
    for(let key in nestedObj) {
        if(typeof nestedObj[key] == "object" && !Array.isArray(nestedObj[key])) {
            flattenObj(nestedObj[key]);
            for(let key2 in nestedObj[key]) {
                const newKey = key + "." + key2;
                nestedObj[newKey] = nestedObj[key][key2];
            }
            delete nestedObj[key];
        }
    }
    
}