import MainSection from '../Common/MainSection';
import RightSection from '../Common/RightSection';
import LeftSection from '../Common/leftSection';
import './index.css';

function Main() {

  return (
    <div className='main-wrapper'>
      <LeftSection />
      <MainSection />
      <RightSection />
    </div>
  );
}

export default Main;