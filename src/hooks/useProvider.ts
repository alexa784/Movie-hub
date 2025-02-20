import React from 'react'
import useProviders from './useProviders'

const useProvider = (id:number|undefined) => {
  const {providers,error,isLoading}=useProviders();

  if(!id) return null;
  if(error) throw error;
  if(isLoading) return null;
  return providers?.find(p=>p.provider_id===id);
}

export default useProvider