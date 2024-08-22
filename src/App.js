
import './App.css';
import Button from '@mui/material/Button';
import SearchAppBar from './components/SearchAppBar';
import JobCard from './components/JobCard';
import JobPaging from './components/JobPaging';
import Homes from './pages/HomePage';
import { Container } from '@mui/material';

function App() {
  return (
    <div>
      <SearchAppBar/>
       <Homes></Homes>
    </div>
  );
}

export default App;
