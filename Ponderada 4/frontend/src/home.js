import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import "./App.css";

const PieChart = () => {
  const [chartData, setChartData] = useState({
    options: {
      labels: ["ativa", "inativa"],
    },
    series: [12, 6],
  });

  const [inputValues, setInputValues] = useState({
    Nome: "",
    Valor0: "",
    Valor1: "",
    Valor2: "",
    Valor3: "",
    Valor4: "",
    Valor5: "",
    Faturamento: "",
  });

  useEffect(() => {
    fetchChartData();
  }, []);

  async function fetchChartData() {
    try {
      const response = await axios.get("http://localhost:8000/startups", {
        headers: { "Content-Type": "application/json" },
      });
      const startupData = response.data;

      // Contar quantos dados são iguais a 1 e quantos são iguais a 0
      const countOnes = startupData.filter((startup) => startup.Status === 1)
        .length;
      const countZeros = startupData.filter((startup) => startup.Status === 0)
        .length;

      // Estruturar os dados para o gráfico
      const updatedChartData = {
        options: {
          labels: ["ativa", "inativa"],
        },
        series: [countOnes, countZeros],
      };

      setChartData(updatedChartData);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  async function createData() {
    try {
      const token = window.localStorage.getItem('token');
       console.log(token);
      await axios.post("http://localhost:8000/startups", {
        Name: inputValues.Nome,
        field_0: inputValues.Valor0,
        field_1: inputValues.Valor1,
        field_2: inputValues.Valor2,
        field_3: inputValues.Valor3,
        field_4: inputValues.Valor4,
        field_5: inputValues.Valor5,
        Faturamento: inputValues.Faturamento,
      },{headers: { Authorization: `Bearer ${token}`}});

      // Após a criação bem-sucedida, atualize o gráfico
      fetchChartData();
    } catch (error) {
      console.error("Erro ao criar dados:", error);
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Dashboard Leão</h1>
      </div>
      <div className="linha">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="pie"
          width="400"
        />
        <div className="container">
          {/* Inputs para valores */}
          {Object.keys(inputValues).map((key) => (
            <input
              key={key}
              name={key}
              placeholder={key}
              value={inputValues[key]}
              onChange={handleInputChange}
              required
            />
          ))}

          <button className="buttonHome" onClick={createData}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
