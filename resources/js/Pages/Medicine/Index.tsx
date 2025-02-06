import TableOne from '@/components/Tables/TableOne'
import TableThree from '@/components/Tables/TableThree'
import FilterBar from '@/components/FilterBar/FilterBar'
import DefaultLayout from '@/Layouts/DefaultLayout'
import React from 'react'

const index = () => {
  return (

        <DefaultLayout>
            <div>
                <h2>Medicine Manage</h2>
            </div>
            <div className='flex gap-10'>

                {/* medicine manage  */}
                <div className='w-2/3 bg-white border shadow-md p-10'>
                    <FilterBar />
                    <TableThree />

                </div>
                {/* dose and dosetime manage */}
                <div className='w-1/3 bg-white border shadow-md p-10'></div>

            </div>
        </DefaultLayout>

  )
}

export default index
