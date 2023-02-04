import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import { getClients } from '../../models/Operations'
import { Form, useLoaderData } from 'react-router-dom'
import { Table } from 'antd'
import { AiOutlineRight, AiOutlineEye, AiOutlineArrowRight } from 'react-icons/ai'
import Modal from '../../components/Modal'

async function loader() {
    const clients = await getClients()
    return { clients }
}

function Clients() {
    const { clients } = useLoaderData();
    const [searchedText, setSearchedText] = useState("");
    const [shouldShowModal, setShouldShowModal] = useState(false);
    const [record, setRecord] = useState(null)
    const handleShouldShow = (record) => {
        setShouldShowModal(true)
        setRecord(record)
        console.log(record)
    }
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
                <div className="cursor-pointer hover:text-blue-400">
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
                <div onClick={() => handleShouldShow(record)} className="cursor-pointer hover:text-blue-400">
                    <AiOutlineEye className="h-4 w-4" />
                </div>
            )

        },
    ];

    return (
        <div className="">
            <PageHeader title="Clients" showSearch={true} showFilters={true} setSearchedText={setSearchedText} />
            <Table rowSelection={{ type: 'checkbox' }} dataSource={clients} columns={columns} />
            {
                record == null ?
                    null :
                    <Modal shouldShow={shouldShowModal} onClose={() => setShouldShowModal(false)}>
                        {/* Modal Header */}
                        <div className="bg-gray-400 flex justify-between">
                            <div className="h-[10rem] w-[10rem] bg-gray-700">
                            </div>
                            <div>
                                <Form action={`${record.name}/edit`}>
                                    <button type="submit" className="bg-white cursor-pointer rounded flex flex-row items-center justify-between gap-4 px-3 py-1 mr-4 mt-4">
                                        <div>Edit account</div>
                                        <AiOutlineArrowRight />
                                    </button>
                                </Form>
                            </div>
                        </div>
                        {/*Modal Body */}
                        <div className="w-full h-full flex flex-row justify-between px-2 py-2">
                            <div className="font-bold text-[1.2rem]">
                                {record.name}
                            </div>
                            <div className="w-[10rem] bg-white flex flex-col justify-evenly gap-2">
                                <div className="">
                                    <div className="font-[500] text-[1rem]">
                                        Phone:
                                    </div>
                                    <div>
                                        {record.phone}
                                    </div>
                                </div>
                                <div className="">
                                    <div className="font-[500] text-[1rem]">
                                        City:
                                    </div>
                                    <div>
                                        {record.city}
                                    </div>
                                </div>
                                <div className="">
                                    <div className="font-[500] text-[1rem]">
                                        Address:
                                    </div>
                                    <div>
                                        {record.address}
                                    </div>
                                </div>
                                <div className="">
                                    <div className="font-[500] text-[1rem]">
                                        Orders:
                                    </div>
                                    <div>
                                        {record.orders}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
            }
        </div>
    )
}

export { Clients, loader }