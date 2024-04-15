const demoObj = [
    {
      name: 'vachanesh',
      city: 'pune',
      age: 20
    },
    {
      name: 'Rakesh',
      city: 'Mumbai',
      age: 30
    },
    {
      name: 'Suresh',
      city: 'Nasik',
      age: 25
    }
  ]

  const numArr = [1,2,3,4,5,6,7,8,9,10]

  const dataMap = demoObj.map((item) => {
    return "<a>"+item.name+"</a>"
  })

  const dataFilter = demoObj.filter((item) => item.age > 20)


  const dataReduce = numArr.reduce((curent, dele) => {
    return curent+dele
    // return dele;
  })

  console.log(dataMap, dataFilter, dataReduce)
