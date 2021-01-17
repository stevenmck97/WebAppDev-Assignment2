export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const addFavouriteMovies = (userName, movieId) => {
    return fetch(`/api/users/${userName}/favourites`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ id: movieId })
    }).then(res => res.json)
}

export const getFavouriteMovies = (userName, movieId) => {
    return fetch(`/api/users/${userName}/favourites`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'get',
        body: JSON.stringify({ id: movieId })
    }).then(res => res.json)
}