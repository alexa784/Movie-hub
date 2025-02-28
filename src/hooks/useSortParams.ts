
export interface Parameter{
    name:string;
    apiParam:string;
}

const sortParams=[
    {
        name:"Popular",
        apiParam:"popularity.desc"
    },
    {
        name:"Newest",
        apiParam:"release_date.desc"
    },
    /*{
        name:"Title",
        apiParam:"original_title.desc"
    },*/
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