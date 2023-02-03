import React from 'react'
import { useQuery, gql } from '@apollo/client';



const COUNTRY_Query = [{

}]


async function loader() {
    const response = await useQuery();
    return { response }
}

function Orders() {
    return (
        <div>Orders</div>
    )
}

export { Orders, loader }