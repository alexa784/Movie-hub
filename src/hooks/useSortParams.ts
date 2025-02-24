
export interface Parameter{
    name:string;
    apiParam:string;
}

const sortParams=[
    {
        name:"Popularity",
        apiParam:"popularity.desc"
    },
    {
        name:"Date",
        apiParam:"release_date.desc"
    },
    {
        name:"Title",
        apiParam:"original_title.desc"
    },
    {
        name:"Rate",
        apiParam:"vote_average.desc"
    },
    {
        name:"Votes",
        apiParam:"vote_count.desc"
    },
]

const useSortParams=()=>{
    return sortParams;
}

export default useSortParams;