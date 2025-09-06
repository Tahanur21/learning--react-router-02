import axios from "axios";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { useEffect, useState } from "react";


const Phones = () => {
    const [phones,setPhones] = useState([])
    useEffect(()=>{
        // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
        
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {

            const phoneData = data.data.data;
            const phoneFakeData = phoneData.map(phone =>{
                const obj = {
                    name : phone.phone_name,
                    price :  parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            setPhones(phoneFakeData)
        })

    },[])
    return (
        <div>
            <h1 className="text-6xl">Phones : {phones.length}</h1>
            <div>
                            <BarChart width={1000} height={500} data={phones}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey={'name'} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="price" fill="#0BE58A" activeBar={<Rectangle fill="#003425" stroke="blue" />}/>
                            </BarChart>
                        </div>
        </div>
    );
};

export default Phones;