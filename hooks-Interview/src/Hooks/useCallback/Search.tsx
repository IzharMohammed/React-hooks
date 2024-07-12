import React, { memo } from 'react';

interface SearchProps {
    onChange : (text : string)=> void;
}

function Search({ onChange } : SearchProps) {
    console.log('Search rendered!');
    return (
        <div>
            <input
                type="text"
                placeholder='Search users...'
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

export default memo(Search);