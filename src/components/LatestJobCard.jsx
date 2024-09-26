import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Badge } from './ui/badge';


    const LatestJobCard = ({job}) => {

        const navigate = useNavigate();
        return (
            <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
                <div  className='flex items-center justify-around'>
                <img src={job.company.logo} alt="" className='rounded-full h-16 '
                />
                    <h1 className='font-medium text-lg '>{job?.company?.name}</h1>
                </div>
                    <p className='text-sm text-gray-500'>{job.location}</p>
                <div>
                    <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                    <p className='text-sm text-gray-600'>{job?.description}</p>
                </div>
                <div className='flex items-center gap-2 mt-4'>
                    <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
                    <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                    <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
                </div>
    
            </div>
        )
    }
    


export default LatestJobCard
