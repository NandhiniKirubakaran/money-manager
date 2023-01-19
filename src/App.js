import './App.css';
import { Routes, Route,} from "react-router-dom";
import { MoneyManager } from './MoneyManager';
import { MainPage } from './MainPage';


function App() {
  return (
    <div>
      
    
      <Routes>
        <Route path="/home" element={<MoneyManager />} />
        <Route path="/mainpage" element={<MainPage />} />
        {/* <Route path="/nav" element={<NavList />} /> */}
      </Routes>

      <NavList />
    </div>
  );
}


function NavList(){
  const details = [{
    purpose: "office",
    month: "january",
    date: "01-01-2022",
    income: 100000,
    fuel_exp: 10000,
    salary_exp: 20000,
    food_exp: 5000,
    loan_exp:30000
    },
    {
    purpose: "office",
    month: "january",
    date: "05-01-2022",
    income: 150000,
    fuel_exp: 10000,
    salary_exp: 20000,
    food_exp: 5000,
    loan_exp:30000
    },
    {
    purpose: "office",
    month: "january",
    date: "15-01-2022",
    income: 130000,
    fuel_exp: 10000,
    salary_exp: 20000,
    food_exp: 5000,
    loan_exp:30000
    }];
    // {
    // "purpose": "office",
    // "month": "january",
    // "date": "18-01-2022",
    // "income": "250000",
    // "fuel_exp": "15000",
    // "salary_exp": "30000",
    // "food_exp": "6000",
    // "loan_exp":"30000"
    // },
    // {
    // "purpose": "office",
    // "month": "january",
    // "date": "25-01-2022",
    // "income": "100000",
    // "fuel_exp": "10000",
    // "salary_exp": "20000",
    // "food_exp": "5000",
    // "loan_exp":"30000"
    // },
    // {
    // "purpose": "office",
    // "month": "january",
    // "date": "28-01-2022",
    // "income": "300000",
    // "fuel_exp": "10000",
    // "salary_exp": "20000",
    // "food_exp": "8000",
    // "loan_exp":"50000"
    // }
    // ]
  return(
   <div>
    <h2>{details.purpose}</h2>
   </div>
  );
}

export default App;
