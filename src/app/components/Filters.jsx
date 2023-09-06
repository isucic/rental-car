const Filters = ({vratiUParent, resetFilters, clickedFilter}) => {

    const filters = [
        {name: "mini", category: "a"},
        {name: "compact", category: "b"},
        {name: "economy", category: "c"},
    ]

    return (
        <div className="flex items-center my-4">
        <h2 className="text-2xl font-comfortea mr-4 hidden md:block">Filter: </h2>
        <div className="">
        {filters.map((filter, index) => {
            return (
                <button value={filter.category} onClick={(e) => vratiUParent(e.target.value)} 
                        className={`shadow-md border border-rent-red text-rent-red md:text-xl uppercase p-2 mx-2 my-1 rounded
                                    hover:bg-rent-red hover:text-white hover:border-white
                                    ${(clickedFilter === filter.category) ? 'bg-rent-red text-white border-white' : 'bg-rent-white'}
                                    test-base`}
                                    >
                    {filter.name}
                </button>                
            )
        })}
        <button onClick={resetFilters} 
         className="bg-rent-white shadow-md border border-rent-red text-rent-red md:text-xl uppercase p-2 mx-2 my-1 rounded
                                    hover:bg-rent-red hover:text-white hover:border-white
                                    text-base">See all</button>
        </div>
        </div>
    )
}

export default Filters;