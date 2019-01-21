import moment from 'moment';

function greet() {
    let day = moment().format('dddd');
    console.log(day);
}

export default greet;