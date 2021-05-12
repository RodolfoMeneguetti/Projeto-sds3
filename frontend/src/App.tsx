import Footer from './components/Footer';
import NavBar from './components/NavBar';
import BarChart from './components/BarChart';
import DonutChart from './components/DonutChart';
import DataTable from './components/DataTable';


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">DashBoard Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Taxa de Sucesso (%)</h5>
            <BarChart />

          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Total De Vendas</h5>
            <DonutChart />

          </div>
          <div className="py-3">
            <h3 className="text-primary"> Todas as Vendas</h3>
          </div>
          <DataTable />
        </div>
        <div className="py-3">
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
