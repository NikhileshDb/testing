import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import { getClients } from '../../models/Operations'
import { useLoaderData } from 'react-router-dom'
import { Table } from 'antd'
import { Link } from 'react-router-dom'
import { AiOutlineRight, AiOutlineEye } from 'react-icons/ai'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend']
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend']
    },
    {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend']
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend']
    },
    {
        title: 'Ordres',
        dataIndex: 'orders',
        key: 'orders',
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend']
    },
    {
        title: 'Order History',
        dataIndex: 'order history',
        key: 'order history',
        render: (_, record) => (
            <Link to={""}>
                <div className="flex flex-row items-center justify-between w-[4rem]">
                    <div>View</div>
                    <AiOutlineRight />
                </div>

            </Link>
        )
    },
    {
        title: '',
        dataIndex: 'view',
        key: 'view',
        render: (_, record) => (
            <Link to={""}>
                <AiOutlineEye className="h-4 w-4" />
            </Link>
        )

    },
];


async function loader() {
    const clients = await getClients()
    return { clients }
}

function Clients() {
    const { clients } = useLoaderData()
    return (
        <>
            <PageHeader type="Users" title="Clients" />
            <Table rowSelection={{ type: 'checkbox' }} dataSource={clients} columns={columns} />
        </>
    )
}

export { Clients, loader }