export const isLogged = () => {
    return localStorage.getItem('user') !== null;
}