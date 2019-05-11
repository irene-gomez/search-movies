import React from 'react';

function MovieItem(props) {
    const { data } = props;
    
    return (
        <li className="movie-list__item">
            <h1 className="title">{data.Title}</h1>
            <p>{data.Year}</p>
            <img src={data.Poster} alt="" />
        </li>
    );
}

export default MovieItem;
