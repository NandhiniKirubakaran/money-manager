


export function MainPage() {
  return (
    <div>
      <h3 className="dashboard">Dashboard</h3>
      <div className="dropdown">
      <select className="dropdown-list"  id="attributes">
        <option value="text">Select</option>
        <option value="text">Month wise income and expenditure</option>
        <option value="text">Weekly income and expenditure</option>
        <option value="text">Yearly income and expenditure</option>
      </select>
      </div>
      
    </div>
  );
}



