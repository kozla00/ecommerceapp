import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from "react-router-dom";
import { CreateContainer, Header, MainContainer, AboutUs, Services, Contact } from "./components/ExportIndex";
import { useStateValue } from './components/context/StateProvider';
import { getAllFurnitureItems } from './utils/firebaseFunctions';
import { actionType } from './components/context/reducer';


const App = () => {

  const [{ furnitureItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFurnitureItems().then(data => {
      dispatch({
        type: actionType.SET_FURNITURE_ITEMS,
        furnitureItems: data,
      })
    })
  }

  useEffect (() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence>
    <div className="w-screen h-auto flex flex-col">
        <Header />

        <main className="mt-14 md:mt-24 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/service" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      </AnimatePresence>
  )
}

export default App

