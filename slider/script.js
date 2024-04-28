let imgArray = [
    `https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?s=612x612&w=0&k=20&c=MewnsAhbeGRcMBN9_ZKhThmqPK6c8nCT8XYk5ZM_hdg=`,
    `https://images.hindustantimes.com/img/2023/01/10/1600x900/While-the-past-year-was-about-revenge-and-revival-_1673351689949.jpg`,
    `https://bottindia.com/wp-content/uploads/2023/06/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg`,
    `https://media.istockphoto.com/id/1434054606/photo/traveler-backpacker-girl-is-watching-hot-air-balloons-and-the-fairy-chimneys-at-cappadocia.webp?b=1&s=170667a&w=0&k=20&c=9eQP1EMSpMweCwGcc4uU6MV2y4CjnH2C82S7BYypIHk=`,
    `https://springsource.in/assets/images/travel.jpg`,
    `https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww`,
    `https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?cs=srgb&dl=pexels-nubikini-386009.jpg&fm=jpg`,
];

// getting the references

const imgContainer = document.getElementsByClassName('imgContainer');
const firstImg = document.getElementById('firstImg');
const secondImg = document.getElementById('secondImg');
const thirdImg = document.getElementById('thirdImg');
const previousImg = document.getElementById('previous');
const nextImg = document.getElementById('next');

//handling event for next images

let i = 0;
let j = 1;
let k = 2;

//for getting next images
nextImg.addEventListener('click', (e) => {
    firstImg.src = imgArray[i];
    secondImg.src = imgArray[j];
    thirdImg.src = imgArray[k];

    if (e.target.id === 'next') {
        i++;
        j++;
        k++;

        if (i >= imgArray.length) {
            i = 0;
        }
        if (j >= imgArray.length) {
            j = 0;
        }
        if (k >= imgArray.length) {
            k = 0;
        }

        firstImg.src = imgArray[i];
        secondImg.src = imgArray[j];
        thirdImg.src = imgArray[k];
    }
});

//for getting previous images
previousImg.addEventListener('click', (e) => {
    console.log('previous image clicked');
    firstImg.src = imgArray[i];
    secondImg.src = imgArray[j];
    thirdImg.src = imgArray[k];

    // console.log('i', 'j', 'k', i, j, k);

    if (e.target.id === 'previous') {
        i--;
        j--;
        k--;

        if (i < 0) {
            i = imgArray.length - 1;
        }
        if (j < 0) {
            j = imgArray.length - 1;
        }
        if (k < 0) {
            k = imgArray.length - 1;
        }

        firstImg.src = imgArray[i];
        secondImg.src = imgArray[j];
        thirdImg.src = imgArray[k];
    }
});
