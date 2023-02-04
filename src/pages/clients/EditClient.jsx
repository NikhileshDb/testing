import React from 'react'
import { useLoaderData } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'

async function loader({ params }) {
    return [{
        name: "Nikhilesh"
    }]
}

function EditClient() {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="">
            <PageHeader title="Create New User" />
        </div>
    )
}

export { EditClient, loader }