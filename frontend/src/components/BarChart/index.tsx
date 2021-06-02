import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSucess } from 'types/sale';
import { round } from 'utils/format';

type SeriesData = {
    name: String;
    data: number[];
}

type ChartData = {
    labels: {
        categories: String[];
    };
    series: SeriesData[];
}

const BarChart = () => {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "% Sucesso",
                data: []
            }
        ]
    });

    useEffect(() => {
        axios.get("http://localhost:8080/sales/success-by-seller")
            .then(response => {
                const data = response.data as SaleSucess[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => round(100.0 * x.deals / x.visited, 1));

                setChartData({
                    labels: {
                        categories: myLabels
                    },
                    series: [
                        {
                            name: "% Sucesso",
                            data: mySeries
                        }
                    ]
                });
                });
            }, []);

        const options = {
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
        };


        return (
            <Chart
                options={{ ...options, xaxis: chartData.labels }}
                series={chartData.series}
                type="bar"
                height="240"
            />
        );
    }

export default BarChart;
