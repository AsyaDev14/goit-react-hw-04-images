import React from "react";

export const Searchbar =({onSubmit}) => {
    return (
      <>
        <header className="searchbar">
          <form className="form" onSubmit={onSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    )
}

