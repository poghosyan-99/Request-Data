import { Link } from 'react-router-dom';
import './style.css'

const Menu = () => {
    return(
        <div className="Menu">
            <nav className='Menu-nav'>
               <Link to="/" className="Menu-link">Products</Link>
               <Link to="/QuotesPage" className="Menu-link">Quotes</Link>
               <Link to="/UsersPage" className="Menu-link">Users</Link>
               <Link to="/CartsPage" className="Menu-link">Carts</Link>
               <Link to="/CommentsPage" className="Menu-link">Comments</Link>
               <Link to="/PostsPage" className="Menu-link">Posts</Link>
               <Link to="/TodosPage" className="Menu-link">Todos</Link>
            </nav>
        </div>
    )
}

export default Menu;
