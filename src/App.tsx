import React, {FC} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from "./components/Home";
import {Detail} from "./components/Detail";

export const App: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="rtk/:id" element={<Detail />} />
                <Route path="/rtk" element={<Home/>}/>
            </Routes>
        </Router>
    );
}

