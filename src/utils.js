export const parseReuestUrl = () => {
    const url = document.location.hash; 
    const request = url.split("/");
    return {
        resource: request[1],
        id: request[2],
        action: request[3],
    };
};