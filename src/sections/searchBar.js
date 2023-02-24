import React from 'react';

function Search() {
    return (
        <section className="search">
            <form action="/" method="get">
                <input type="text" placeholder="Search..." className="search" />
            </form>
        </section>
    );
}

export default Search;