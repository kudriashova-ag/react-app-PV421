import React, { memo } from 'react';

const Count = ({ value, id }) => {
    console.log(id);
    
    return (
        <strong>
            {value}
        </strong>
    );
}

export default memo(Count);
