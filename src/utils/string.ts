import { format } from 'date-fns';


export function isValidDate(date:any) {
    // Check if the input is a Date object and it is not NaN
    return date instanceof Date && !isNaN(date);
}

export const formatDate = (date: any) => {
    const temp = new Date(date)
    return format(temp, 'dd/MM/yyyy').toString();
}

export const formatDateSQL = (date: any) => {
    const temp = new Date(date)
    return format(temp, 'MM/dd/yyyy').toString();
}

export const formatFullDate = (date: Date) => {
    return format(date, 'dd/MM/yyyy hh:mm:ss').toString();
}

export const removeUndefinedField = (params: object) => {
    Object.keys(params).forEach(key => {
        if (typeof params[key] === 'undefined') {
            delete params[key];
        }
    });
    return params;
};

export const convertPayloadToQueryString = (payload: object = {}) => {
    return Object.keys(payload).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(payload[key]);
    }).join('&');
};

export const formatDateHM = (date: any) => {
    const temp = new Date(date)
    return format(temp, 'hh:mm').toString();
}