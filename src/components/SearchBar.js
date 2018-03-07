import React from 'react'

const SearchBar = ({
  filterText,
  onFilterTextChange,
  filterCategory,
  onFilterCategoryChange,
}) => {
  const categories = ['pecs', 'shoulder', 'arms', 'legs']

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={e => {
          onFilterTextChange(e.target.value)
        }}
      />
      <p>
        <select
          value={filterCategory}
          onChange={e => {
            onFilterCategoryChange(e.target.value)
          }}
        >
          <option value="">Category...</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))})})}
        </select>
      </p>
    </form>
  )
}
export default SearchBar
