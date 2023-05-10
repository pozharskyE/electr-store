

// function ManualData() {
//     obj1 = {
//         name: 'iPhone 14 pro ',
//         img: 'img/iphone14pro.png',
//         isHit: false
//     }
//     obj2 = {
//         name: 'Samsung s22',
//         img: 'img/iphone14pro.png',
//         isHit: false
//     }
//     obj3 = {
//         name: 'iPhone 11',
//         img: 'img/iphone14pro.png',
//         isHit: true
//     }
//     return [obj1, obj2, obj3]
// }

// export default ManualData;

const ManualData = () => {
    const obj1 = {
      name: 'iPhone 14 pro ',
      img: require('./img/iphone14pro.png'),
      isHit: false
    };
    const obj2 = {
      name: 'Samsung s22',
      img: require('./img/iphone14pro.png'),
      isHit: false
    };
    const obj3 = {
      name: 'iPhone 11',
      img: require('./img/iphone14pro.png'),
      isHit: true
    };
    return [obj1, obj2, obj3];
};
  
export default ManualData;