export const productsURL = 'https://dummyjson.com/products';
export const quotesURL = 'https://dummyjson.com/quotes';
export const usersURL = 'https://dummyjson.com/users';
export const cartsURL = 'https://dummyjson.com/carts';
export const commentsURL = 'https://dummyjson.com/comments';
export const postsURL = 'https://dummyjson.com/posts';
export const todosURL = 'https://dummyjson.com/todos';



export const generateIdURLs = (id) => {
    return {
        productsIdURL: `https://dummyjson.com/products/${id}`,
        quotesIdURL: `https://dummyjson.com/quotes/${id}`,
        usersIdURL: `https://dummyjson.com/users/${id}`,
        cartsIdURL: `https://dummyjson.com/carts/${id}`,
        commentsIdURL: `https://dummyjson.com/comments/${id}`,
        postsIdURL: `https://dummyjson.com/posts/${id}`,
        todosIdURL: `https://dummyjson.com/todos/${id}`
    };
};

