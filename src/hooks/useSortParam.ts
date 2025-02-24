import useSortParams from "./useSortParams"

const useSortParam=(apiParam:string|null|undefined)=>{
    const sortParamsList=useSortParams();
    if(!apiParam) return null;
    
    return sortParamsList.find((p)=>p.apiParam===apiParam)
}

export default useSortParam;