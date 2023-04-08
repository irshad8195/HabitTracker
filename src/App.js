import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/home/Home'

import Navbar from './components/navbar/Navbar'
import DashBoard from './components/dashboard/DashBoard'
import HabitDetails from './components/habitDetails/HabitDetails'

const App = () => {
  return (
    <div className='container'>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/dashboard" element={<DashBoard/>} />
  <Route exact path="/dashboard/habit/:id/details" element={<HabitDetails/>}/>
      </Routes>
    </div>
  )
}

export default App





// import React from 'react';
// import { Routes, Route,  BrowserRouter } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './components/Home';
// import AddTask from './components/AddTask';
// import WeekTask from './components/WeekTask';
// // import actions from './actions'

// const App = () => {
//     return (
//         <div className='container' >
          
//           <BrowserRouter >
          
//             <Routes >
                
                
//                 {/* <Switch> */}
//                     <Route path='/' exact component={Home} />
//                     <Route path='/AddTask' exact component={AddTask} />
//                     <Route path='/WeekTask' exact component={WeekTask} />
//                 {/* </Switch> */}
                
//             </Routes>
//             </BrowserRouter>
//         </div>
//     )
// };

// export default App;