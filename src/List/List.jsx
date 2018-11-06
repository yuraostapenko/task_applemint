import React from 'react';
import PropTypes from 'prop-types';
import './List.css';

const List = ({state, del}) => {
    return (
        <div className='List'>
          {state.map(el => 
        <p onClick={del} id={el.id} key={el.id}>{el.name}</p> 
        )} <button onClick={del}>delete</button> 
        </div>
    );
};

List.propTypes ={
    state: PropTypes.array,  
    del: PropTypes.func,
}
export default List;