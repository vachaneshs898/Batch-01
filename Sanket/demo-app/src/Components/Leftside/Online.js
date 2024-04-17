
const User_data = () => {
    const Online_user = [
        {
            img: "https://th.bing.com/th/id/OIP.ZtVRmR15-eXzOxYE1KcD8gHaJ4?rs=1&pid=ImgDetMain",
            name: "Thor"
        },
        {
            img: "https://www.iwmbuzz.com/wp-content/uploads/2021/02/top-5-hot-side-profiles-of-handsome-actors-from-brad-pitt-to-chris-evans-5-578x920.jpeg",
            name: "Captain America"
        },
        {
            img: "https://th.bing.com/th/id/OIP.ZtVRmR15-eXzOxYE1KcD8gHaJ4?rs=1&pid=ImgDetMain",
            name: "Thor"
        },
        {
            img: "https://www.iwmbuzz.com/wp-content/uploads/2021/02/top-5-hot-side-profiles-of-handsome-actors-from-brad-pitt-to-chris-evans-5-578x920.jpeg",
            name: "Captain America"
        },
        {
            img: "https://th.bing.com/th/id/OIP.ZtVRmR15-eXzOxYE1KcD8gHaJ4?rs=1&pid=ImgDetMain",
            name: "Thor"
        },
        {
            img: "https://www.iwmbuzz.com/wp-content/uploads/2021/02/top-5-hot-side-profiles-of-handsome-actors-from-brad-pitt-to-chris-evans-5-578x920.jpeg",
            name: "Captain America"
        },
        {
            img: "https://th.bing.com/th/id/OIP.ZtVRmR15-eXzOxYE1KcD8gHaJ4?rs=1&pid=ImgDetMain",
            name: "Thor"
        },
        {
            img: "https://www.iwmbuzz.com/wp-content/uploads/2021/02/top-5-hot-side-profiles-of-handsome-actors-from-brad-pitt-to-chris-evans-5-578x920.jpeg",
            name: "Captain America"
        },
        {
            img: "https://th.bing.com/th/id/OIP.ZtVRmR15-eXzOxYE1KcD8gHaJ4?rs=1&pid=ImgDetMain",
            name: "Thor"
        }
    ]
    return (
        <div>
            {
                Online_user.map((user) => {
                    return (
                        <div className="multiple-user">
                            <img src={user.img} alt={user.name} />
                            <h1>{user.name}</h1>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default User_data;