
export interface Parameter{
    name:string;
    apiParam:string;
}

const sortParams=[
    {
        name:"Favorites",
        apiParam:"favorites"
    },
    {
        name:"Popular",
        apiParam:"popularity.desc"
    },
    {
        name:"Top Rated",
        apiParam:"vote_average.desc"
    },
    {
        name:"Most Voted",
        apiParam:"vote_count.desc"
    },
    {
        name:"Newest",
        apiParam:"release_date.desc"
    },
]

const useSortParams=()=>{
    return sortParams;
}

export default useSortParams;