import React from 'react';

const Filters = ({ setFilter, filter, allFilters }) => {
    const filters = Object.keys(allFilters); // ['All', 'Done', 'Todo']

    return (
        <div className='filters'>
            {filters.map((f) => (
                <button key={f} onClick={() => setFilter(f)} className={filter === f ? 'active' : ''}>{f}</button>
            ))}
        </div>
    );
}

export default Filters;
