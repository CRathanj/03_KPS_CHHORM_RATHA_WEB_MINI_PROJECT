import ListBoardComponentHeader from '@/components/ListBoardComponentHeader'
import MonthlyStatisticsComponent from '@/components/MonthlyStatisticsComponent'
import TodoCardComponent from '@/components/TodoCardComponent'
import WorkspacePopupComponent from '@/components/WorkspacePopupComponent'
import { getWorkSpaceById } from '@/service/auth/workSpace.service'
import React from 'react'

const page = () => {
    const workId = getWorkSpaceById();
  return (
    <div className='flex w-full'>
      <div className='p-10 w-full'>
        <ListBoardComponentHeader />
        <div>
          <TodoCardComponent />
        </div>
      </div>
    </div>
  )
}

export default page