import Config from 'react-native-config'

export function formatNumberWithDotVn(num: number | string = 0) {
    if (num) {
        // const money = Math.round(Number(num))
        if (num.toString().includes(',')) {
            const numTemp = num.toString().split(',')
            return `${numTemp[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}` + ',' + numTemp[1]
        } else {
            return `${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`
        }
    }
    return '0'
}

export const getAge = (birthDate) => {
    return Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10)
}

export const optionalConfigObject = {
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // if true is passed, itwill allow isSupported to return an error if the device is not enrolled in touch id/face id etc. Otherwise, it will just tell you what method is supported, even if the user is not enrolled.  (default false)
}

// export const timeSince = (time: string) => {
//   const seconds = Math.floor((new Date() - new Date(time)) / 1000);
//   let interval = seconds / 31536000;

//     if (interval > 1) {
//         return Math.floor(interval) + " năm";
//     }
//     interval = seconds / 2592000;
//     if (interval > 1) {
//         return Math.floor(interval) + " tháng";
//     }
//     interval = seconds / 86400;
//     if (interval > 1) {
//         return Math.floor(interval) + " ngày";
//     }
//     interval = seconds / 3600;
//     if (interval > 1) {
//         return Math.floor(interval) + " giờ";
//     }
//     interval = seconds / 60;
//     if (interval > 1) {
//         return Math.floor(interval) + " phút";
//     }
//     return Math.floor(seconds) + " giây";

// }

export function timeSince(timestamp) {
    const now = new Date()
    const messageDate = new Date(timestamp)

    const diffInSeconds = Math.floor((now - messageDate) / 1000)

    if (diffInSeconds < 60) {
        return 'bây giờ'
    } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60)
        return `${minutes} phút`
    } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600)
        return `${hours} giờ`
    } else if (diffInSeconds < 604800) {
        const days = Math.floor(diffInSeconds / 86400)
        return `${days} ngày`
    } else {
        return messageDate.toLocaleDateString() // Show the actual date if it's older than a week.
    }
}

export function organizeData(data) {
    const organizedData = []
    const idMap = new Map()

    // First pass: create a map of items by their ID
    data.forEach((item) => {
        const newItem = { ...item, children: [] }
        idMap.set(newItem.id, newItem)
    })

    // Second pass: link children to their parents
    data.forEach((item) => {
        const newItem = idMap.get(item.id)

        if (item.parentId !== 0) {
            const parent = idMap.get(item.parentId)
            if (parent) {
                parent.children.push(newItem)
            }
        } else {
            organizedData.push(newItem)
        }
    })

    return organizedData
}

export function createDisplayData(organizedData) {
    const displayData = []

    organizedData.forEach((parent) => {
        const parentTitle = parent.name
        const childData = parent.children.map((child) => ({
            id: child.id,
            name: child.name,
            photo: child.photo,
            description: child.description,
            // Add other properties as needed
        }))

        displayData.push({ title: parentTitle, data: childData })
    })

    return displayData
}

export function validUrlImage(url: string) {
    try {
        if (url.includes('https://')) {
            return url.replace(/\\/g, '/').replace(/\\/g, '/')
        }
        return `${Config.baseURL}${url}`.replace(/\\/g, '/')
    } catch {
        return `${Config.baseURL}${url}`.replace(/\\/g, '/')
    }
}
