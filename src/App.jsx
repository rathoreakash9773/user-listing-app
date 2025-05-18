import UserList from './components/UserList';
import CreateProfile from './components/createProfile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/create-profile" element={<CreateProfile />} />
                <Route path="/" element={<UserList />} />
            </Routes>
        </Router>
    );
};

export default App;