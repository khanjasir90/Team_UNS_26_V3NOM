import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import "./Stats.css";
import { useDispatch, useSelector } from "react-redux";
import { GetCosts } from "../../../store/farmerSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
const optionsWeather = {
  scales: {
    y: {
      title: {
        display: true,
        text: "Temprature (deg Celsius)",
      },
    },

    x: {
      title: {
        display: true,
        text: "Date",
      },
    },
  },
};

const optionsPrecipitation = {
  scales: {
    y: {
      title: {
        display: true,
        text: "Precipitation (Percentage %)",
      },
    },

    x: {
      title: {
        display: true,
        text: "Date",
      },
    },
  },
};

const labels = [];

const CropData = {
  labels,
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const cropOptions = {
  plugins: {
    legend: false,
  },
};

const Stats = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  // eslint-disable-next-line
  const [data, setData] = useState([]);
  const [Labels, setLabels] = useState([]);
  const [temps, setTemps] = useState([]);
  const [rains, setRains] = useState([]);

  const dispatch = useDispatch();

  const costs_data = useSelector((store) => store.farmer);

  useEffect(() => {
    dispatch(GetCosts());
    console.log(costs_data);
    // eslint-disable-next-line
  }, []);

  const getLabels = (data) => {
    const labelreq = [];
    const req = data["daily"];

    for (let i = 0; i < req.length; i++) {
      let date = new Date(req[i].dt * 1000);
      let d =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      labelreq.push(d.toString());
    }

    setLabels(labelreq);
  };

  const getTempratures = (data) => {
    let temp_values = [];
    const req = data["daily"];

    for (let i = 0; i < req.length; i++) {
      const element = req[i]["temp"];
      let t = (element.max + element.min) / 2;
      temp_values.push(t);
    }

    setTemps(temp_values);
  };

  const getRain = (data) => {
    let rain_values = [];
    const req = data["daily"];

    for (let i = 0; i < req.length; i++) {
      const element = req[i].rain;
      if (element) {
        rain_values.push(element);
      } else {
        rain_values.push(0);
      }
    }

    setRains(rain_values);
  };

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&APPID=8a528f36d6bbe9779e7512a072af7646`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          getLabels(result);
          getTempratures(result);
          getRain(result);
        });

      console.log("Latitude is:", lat);
      console.log("Longitude is:", long);
    };
    fetchData();
  }, [lat, long]);

  const weatherData = {
    labels: Labels,
    datasets: [
      {
        label: "Temprature",
        data: temps,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const rainData = {
    labels: Labels,
    datasets: [
      {
        label: "Precipitation",
        data: rains,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="stats__main">
      <div className="header__dash">
        <h1>Your Statistics</h1>
      </div>
      <div className="weather__graphs flex__center">
        <div className="graph__container">
          <Line data={weatherData} options={optionsWeather} />
        </div>
        <div className="graph__container">
          <Line data={rainData} options={optionsPrecipitation} />
        </div>
      </div>
      <div className="sales__section">
        <h2>Sales</h2>
        <h3>Total Crops selled :</h3>
        <div className="sales__analytics flex__center">
          <div className="sales__chart flex__center">
            <div className="graph__container">
              <Pie data={CropData} options={cropOptions} />
            </div>
          </div>
          <div className="sales__data flex__center">
            <div className="sales__data__container">
              <h3>Total Mass Sold</h3>
              <h1>Kg</h1>
              <h1>8000</h1>
            </div>
            <div className="sales__data__container">
              <h3>Total Money Earned</h3>
              <h1>₹</h1>
              <h1> 30 Lakhs</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="payments__section">
        <h2>Payments</h2>
        <div className="payments"></div>
      </div>
    </div>
  );
};

export default Stats;
