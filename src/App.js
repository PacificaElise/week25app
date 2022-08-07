import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ["September", "October", "November", "December"],
    datasets: [
        {
            label: "# of Votes",
            data: [30, 40, 25, 17],
            backgroundColor: ["rgba(189, 189, 242)", "rgba(152, 92, 255)", "rgba(255, 189, 211)", "rgba(255, 188, 173)"],
            borderWidth: 1,
        },
    ],
};

export function App() {
    return (
        <>
            <h1 class="pieTitle">Pie Chart</h1>
            <div class ="pieChart">
                <Pie data={data}
                options={{
                  maintainAspectRatio: false
                }}
                />;
            </div>
        </>
    );
}

export default App;
