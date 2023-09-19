import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CatTerror from '../src/pages/terror/index'
import CatAcao from './pages/acao'
import CatComedia from './pages/comedia'
import CatPagp from './pages/geral'
import Header from './header/index'

function AppRoutes() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                    <Route path='/' element={ <CatPagp/> }></Route>
                    <Route path="/terror" element={ <CatTerror /> }></Route>
                    <Route path="/acao" element={ <CatAcao /> }></Route>
                    <Route path="/comedia" element={ <CatComedia /> }></Route>    
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes