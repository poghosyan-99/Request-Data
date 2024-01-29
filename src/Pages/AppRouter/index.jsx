import { Routes, Route } from "react-router";
import TodosPage from '../TodosPage';
import PostsPage from '../PostsPage';
import CommentsPage from "../CommentsPage";
import CartsPage from "../CartsPage";
import UsersPage from "../UsersPage";
import QuotesPage from "../QuotesPage"; 
import ProductsPage from "../ProductsPage";
import Layout from "../LayoutPage";
import Product from '../Product';
import Quote from "../Quote";
import User from '../User';
import Cart from '../Cart';
import Comment from '../Comment';
import Post from '../Post';
import Todo from "../Todo";


const AppRouter = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<ProductsPage />}/>
                    <Route path="/ProductsPage/:id" element={<Product/>} />
                    <Route path="/QuotesPage" element={<QuotesPage/>}/>
                    <Route path="/QuotesPage/:id" element={<Quote/>} />
                    <Route path="/UsersPage" element={<UsersPage/>} />
                    <Route path="/UsersPage/:id" element={<User/>} />
                    <Route path="/CartsPage" element={<CartsPage/>} />
                    <Route path="/CartsPage/:id" element={<Cart/>} />
                    <Route path="/CommentsPage" element={<CommentsPage/>} />
                    <Route path="/CommentsPage/:id" element={<Comment/>} />
                    <Route path="/PostsPage" element={<PostsPage/>} />
                    <Route path="/PostsPage/:id" element={<Post/>} />
                    <Route path='/TodosPage' element={<TodosPage/>} />
                    <Route path="/TodosPage/:id" element={<Todo/>} />
                </Route>
            </Routes>
        </div>
    )
}

export default AppRouter;
