import { clientsData, ridersData } from './DataSource'

const getClients = () => {
    const res = clientsData
    return res
}


const getRider = () => {
    const rider = ridersData
    return rider
}

const getOrders = () => {
    const orders = [{}]
    return orders
}

const getJobs = () => {
    const jobs = [{}]
    return jobs
}
const getRestaurents = () => {
    const restaurents = [{}]
    return restaurents
}
const getServices = () => {
    const services = [{}]
    return services

}

export { getClients, getRider, getJobs, getRestaurents, getServices, getOrders }