const text_data = [
    {
        class: 'ph-no',
        name: 'Phone',
        value: '+91 12345679'
    },
    {
        class: 'email',
        name: 'Email',
        value: 'Example@gmail.com'
    },
    {
        class: 'location',
        name: 'Location',
        value: 'Vadodara, Gujarat'
    },
    {
        class: 'birthday',
        name: 'Birthday',
        value: 'May, 17 1998'
    }
]

text_data.map(Text, () => {
    return (
        <div className="wrapper">
            <div className="personinfo">
                <div className={text_data.class}>
                    <h1>{text_data.name}</h1>
                    <h1>{text_data.value}</h1>
                </div>
            </div>
            <button className='downloadbtn'>Download CV</button>
        </div>

    )
})

export default Text;