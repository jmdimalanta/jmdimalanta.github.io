import { Link } from "@reach/router";

const Header = (props)=>{

    const {titleText, link, linkText} = props;



    return(
        <header style={{
            fontSize: '25px', borderBottom: '5px double lightgrey',
            marginLeft: '450px', marginRight: '450px'
        }}>
            <h1>
                {titleText}
            </h1>
            <Link to={link}>
                {linkText}
            </Link>
        </header>
    )
}

export default Header;