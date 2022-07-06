import {useState} from "react";


import './styles/index.scss'
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import AltMenu from "./components/AltMenu";
import data from "./data";


function App() {
    const [grid, setGrid] = useState(true)
    const [altMenu, setAltMenu] = useState(false)
    const [type, setType] = useState('Na słono');

    const category = data.filter(item =>{
        // if (item.type === type){
        //     return item
        // }
        return item.type === type

    })

    console.log(category)

    return (
        <main className="main">
            <Navbar setGrid={setGrid} setAltMenu={setAltMenu} altMenu={altMenu}
                    setType={setType}
                    data={category[0].items}
            />
            {
                altMenu ?
                    <AltMenu data={category[0].items}/> :
                    <Menu grid={grid} setGrid={setGrid} data={category[0].items}/>
            }

        </main>
    );
}

export default App;
