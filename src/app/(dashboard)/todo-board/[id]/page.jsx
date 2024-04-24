import TodoCardComponent from '@/components/TodoCardComponent'
import React from 'react'
import {getWorkSpaceById} from "@/service/auth/workSpace.service";

const page = async ({params : {id}}) => {
    const res = await getWorkSpaceById(id);

  return (
    <div>
        <TodoCardComponent infoData = {res} />
    </div>
  )
}

export default page