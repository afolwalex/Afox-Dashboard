import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const DashboardLine = () => {
    let newArr = [10, 20, 100, 120, 45, 16, 72, 88, 109, 40, 10, 60];

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Line Chart',
            },
        },
    };

    const labels = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset',
                data: newArr,
                borderColor: '#F56476',
                backgroundColor: '#BE3E82',
            },
        ],
    };

    return <Line options={options} data={data} />;
};

export default DashboardLine;
