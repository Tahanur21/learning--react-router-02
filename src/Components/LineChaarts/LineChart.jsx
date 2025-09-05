import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {

    const mathMarksData = [
  {id: 1, name: "Alice Johnson", math: 85, physics: 78, chemistry: 82},
  {id: 2, name: "Brian Smith", math: 92, physics: 88, chemistry: 91},
  {id: 3, name: "Catherine Lee", math: 78, physics: 74, chemistry: 80},
  {id: 4, name: "Daniel Kim", math: 88, physics: 90, chemistry: 86},
  {id: 5, name: "Eva Martinez", math: 94, physics: 89, chemistry: 93},
  {id: 6, name: "Franklin Davis", math: 67, physics: 70, chemistry: 65},
  {id: 7, name: "Grace Nguyen", math: 81, physics: 84, chemistry: 79},
  {id: 8, name: "Hassan Ali", math: 73, physics: 69, chemistry: 72},
  {id: 9, name: "Isabella Wilson", math: 90, physics: 87, chemistry: 88},
  {id: 10, name: "Jack Thompson", math: 76, physics: 75, chemistry: 77}
];


    return (
        <div className='flex justify-center mt-12'>
            <LChart width={800} height={700} data={mathMarksData}>
                <XAxis dataKey={'name'}/>
                <YAxis/>
                <Line dataKey='math' stroke='red'></Line>
                <Line dataKey='physics' stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;