import { useState } from 'react'
import Container from '../components/ui/Container'
import useAxios from '../hooks/useAxios'
import { useQuery } from '@tanstack/react-query'
import ServiceCard from '../components/ServiceCard'

const Service = () => {
    const axios = useAxios();
    const getServices = async () => {
        const res = await axios.get('/services');
        return res;
    }
    const { data: services, isLoading, isError, error } = useQuery({
        queryKey: ['service'],
        queryFn: getServices,
    })
    console.log(services);

    if(isLoading){
        return <p>Loading....</p>
    }
    if(isError){
        return <p>Something Went Wrong: {error}</p>
    }


    return (
        <>
            <Container className='mt-10'>

            </Container>
            <Container className="mb-64">
                <div className='grid  mt-24 grid-cols-3 gap-10'>
                    {/* Services Card Here  */}
                    {
                        services?.data?.map((item) => (
                            <ServiceCard key={item?.id} service={item} />
                        ))
                    }
                </div>
            </Container>
        </>
    )
}

export default Service