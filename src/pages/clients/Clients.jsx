import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import { getClients } from '../../models/Operations'
import { useLoaderData } from 'react-router-dom'
import { Table } from 'antd'
import { Link } from 'react-router-dom'
import { AiOutlineRight, AiOutlineEye } from 'react-icons/ai'
import Modal from '../../components/Modal'

async function loader() {
    const clients = await getClients()
    return { clients }
}

function Clients() {
    const { clients } = useLoaderData();
    const [searchedText, setSearchedText] = useState("");
    const [shouldShowModal, setShouldShowModal] = useState(false);


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
            filteredValue: [searchedText],
            onFilter: (value, record) => {
                return String(record.name).toLowerCase().includes(value.toLowerCase())
                    || String(record.phone).toLowerCase().includes(value.toLowerCase())
                    || String(record.city).toLowerCase().includes(value.toLowerCase())
                    || String(record.address).toLowerCase().includes(value.toLowerCase());
            }
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            sorter: (a, b) => a.city.length - b.city.length,
            sortDirections: ['descend']
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
            sorter: (a, b) => a.city.length - b.city.length,
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
                <div onClick={() => setShouldShowModal(true)} className="cursor-pointer hover:text-blue-400">
                    <div className="flex flex-row items-center justify-between w-[4rem]">
                        <div>View</div>
                        <AiOutlineRight />
                    </div>
                </div>
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

    return (
        <div className="">
            <PageHeader type="Users" title="Clients" setSearchedText={setSearchedText} />
            <Table rowSelection={{ type: 'checkbox' }} dataSource={clients} columns={columns} />
            <Modal shouldShow={shouldShowModal} onClose={() => setShouldShowModal(false)}>
                <div>Hello, Detail View</div>
            </Modal>
        </div>
    )
}

export { Clients, loader }