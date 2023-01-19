import { useNavigate } from "react-router-dom";




export function MoneyManager() {
const navigate = useNavigate();

  const home = {
    img: "https://repository-images.githubusercontent.com/21298446/df3f3500-938f-11eb-9ced-1fc42aec4e90"
  };
  return (
    <div className='home-page'>
      <h1><b>Money Manager</b></h1>
      <img className='img' src={home.img} alt="" />
      <div className='button'>
        <button type="button" 
        class="btn btn-outline-secondary"
        onClick={() => navigate ("/mainpage")}>
        Click Me
        </button>
        
      </div>
    </div>
  );
}
