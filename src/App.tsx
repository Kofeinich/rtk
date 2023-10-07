import React, {FC} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from "./components/Home";
import {Detail} from "./components/Detail";

export const App: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/:id" element={<Detail />} />
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    );
}

