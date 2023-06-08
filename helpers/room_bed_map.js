

const h1 = {
    "1": [1, 2],
    "2": [3, 4],
    "3": [5, 6],
    "4": [7, 8],
    "5": [9, 10],
    "6": [11, 12],
    "7": [13, 14],
    "8": [15, 16],
    "9": [17, 18],
    "10": [19, 20],
    "11": [21, 22],
    "12": [23, 24],
    "13": [25, 26],
    "14": [27, 28],
    "15": [29, 30],
    "16": [31, 32],
    "17": [33, 34],
    "18": [35, 36],
    "19": [37, 38],
    "20": [39, 40],
    "21": [41, 42],
    "22": [43, 44],
    "23": [45, 46],
    "24": [47, 48],
    "25": [49, 50]
}

const h2 = {
    "1": [1],
    "2": [2, 3, 4],
    "3": [5, 6],
    "4": [7, 8],
    "5": [9, 10],
    "6": [11],
    "7": [12, 13, 14],
    "8": [15, 16],
    "9": [17],
    "10": [18, 19, 20]
}

const h3 = {
    "1": [1, 2],
    "2": [3, 4],
    "3": [5],
    "4": [6, 7, 8],
    "5": [9],
    "6": [10, 11, 12],
    "7": [13, 14],
    "8": [15, 16],
    "9": [17],
    "10": [18, 19, 20],
    "11": [21, 22],
    "12": [23, 24],
    "13": [25, 26],
    "14": [27, 28],
    "15": [29],
    "16": [30, 31, 32],
    "17": [33, 34],
    "18": [35],
    "19": [36, 37, 38]
}

const hostels = {
    h1 : h1,
    h2 : h2,
    h3 : h3
}

const map_rooms = (hostel_name, bed) => {

    console.log("Bed: ", bed)
    console.log("hostel_name.id: ", hostel_name.id)

    let hos_id = {};

    // for(let h_id in hostels){
    //     if(h_id === hostel_name.id){
    //         console.log(h_id)
    //         hos_id = hostels[h_id];
    //     }
    // }

    hos_id = hostels[hostel_name.id]

    console.log("hos_id: \n", hos_id)

    // for (let roomNumber in hos_id) {
    //     const beds = hos_id[roomNumber];
    //     console.log(beds)
    //     if (beds.includes(bed)) {
    //       return parseInt(roomNumber);
    //     }
    //   }


        for (let roomNumber in hos_id) {
          const beds = hos_id[roomNumber];
          console.log(beds)
          if (beds.includes(parseInt(bed))) {
            console.log("beds: ", beds)
            console.log("room no: ", roomNumber)
            return parseInt(roomNumber);
          }
        }


}


module.exports = map_rooms