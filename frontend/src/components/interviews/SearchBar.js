import React, { useState } from 'react';

export default function SearchBar() {
    const onChange = (e) => {
        console.log(e.target.value);
    };

    return (
        <div className="SearchBar">
            <input
                name="search"
                placeholder="검색어를 입력하세요."
                onChange={onChange}
            />
        </div>
    )
}