import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <nav>
                <div>
                    <Link to="/">Geral</Link>
                    <Link to="/terror">Terror</Link>
                </div>
                <p>API filmes</p>
                <div>
                    <Link to="/acao">Acao</Link>
                    <Link to="/comedia">Comedia</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;