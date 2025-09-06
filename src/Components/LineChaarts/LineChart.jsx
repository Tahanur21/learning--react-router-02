// import { LineChart as LChart, Line,PieChart,XAxis,YAxis } from 'recharts';
import { Pie, PieChart as PChart, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LineChart = () => {

    const mathMarksData = [
        { id: 1, name: "Alice Johnson", math: 85, physics: 78, chemistry: 82 },
        { id: 2, name: "Brian Smith", math: 92, physics: 88, chemistry: 91 },
        { id: 3, name: "Catherine Lee", math: 78, physics: 74, chemistry: 80 },
        { id: 4, name: "Daniel Kim", math: 88, physics: 90, chemistry: 86 },
        { id: 5, name: "Eva Martinez", math: 94, physics: 89, chemistry: 93 },
        { id: 6, name: "Franklin Davis", math: 67, physics: 70, chemistry: 65 },
        { id: 7, name: "Grace Nguyen", math: 81, physics: 84, chemistry: 79 },
        { id: 8, name: "Hassan Ali", math: 73, physics: 69, chemistry: 72 },
        { id: 9, name: "Isabella Wilson", math: 90, physics: 87, chemistry: 88 },
        { id: 10, name: "Jack Thompson", math: 76, physics: 75, chemistry: 77 }
    ];


    return (
        <div className='flex flex-col justify-center items-center gap-12 mt-12'>
            {/* <div>
                <LChart width={800} height={700} data={mathMarksData}>
                <XAxis dataKey={'name'}/>
                <YAxis/>
                <Line dataKey='math' stroke='red'></Line>
                <Line dataKey='physics' stroke='green'></Line>
            </LChart>
            </div> */}
            <div>

                <PChart width={500} height={500}>
                    <Pie data={mathMarksData} dataKey="math" outerRadius={60} fill="#8884d8" />
                    <Pie data={mathMarksData} dataKey="name" outerRadius={60} fill="#8884d0" />
                </PChart>
            </div>
            <div>
                <BarChart width={1000} height={500} data={mathMarksData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={'name'} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="math" fill="green" activeBar={<Rectangle fill="pink" stroke="blue" />}/>
                    <Bar dataKey="physics" fill="blue"  activeBar={<Rectangle fill="gold" stroke="purple" />}/>
                    <Bar dataKey="chemistry" fill="red"  activeBar={<Rectangle fill="gold" stroke="purple" />}/>
                </BarChart>
            </div>
        </div>
    );
};

export default LineChart;