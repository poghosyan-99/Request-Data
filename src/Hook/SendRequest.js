export const SendRequest = () => {
    const sendRequestGet = async(url) => {
        const result = await fetch(url);
        return result.json();
    };
    return {sendRequestGet};
}


export const sendRequest2 = () => {
    const sendRequestGet2 = async(url) => {
        const result = await fetch(url);
        return result.json();
    };
    return {sendRequestGet2};
}