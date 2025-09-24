import React, { use } from 'react';
import calenderImg from "../assets/ri_calendar-line.png"

const CustomersTickets = ({ customersPromise }) => {
    const customersData = use(customersPromise);
    console.log(customersData);

    return (
        <div className="max-w-7xl mx-auto space-y-4">
            <h2 className="text-[#34485A] font-semibold text-2xl mb-4">Customer Tickets</h2>

            {customersData.map((customer) => {
                let priorityColor = '';
                if (customer.customerPriority.toLowerCase().includes('high')) {
                    priorityColor = 'text-[#F83044]';
                } else if (customer.customerPriority.toLowerCase().includes('medium')) {
                    priorityColor = 'text-[#FEBB0C]';
                } else if (customer.customerPriority.toLowerCase().includes('low')) {
                    priorityColor = 'text-[#02A53B]';
                }

                return (
                    <div key={customer.id} className="p-4 bg-[#FFFFFF] rounded-md shadow-gray-300 shadow-lg space-y-2">
                        <div className="flex justify-between items-center">
                            <h2 className="text-[#001931] text-lg font-semibold">{customer.title}</h2>
                        <span className={`flex items-center gap-2 px-3 py-1 text-sm font-semibold rounded-lg ${customer.status === 'Open' ? 'bg-[#B9F8CF]text-[#0B5E06]' : ''} ${customer.status === 'In Progress' ? 'bg-[#F8F3B9] text-yellow-800' : ''}`}>
                            <span className={`w-3 h-3 rounded-full block ${customer.status === 'Open' ? 'bg-[#02A53B]' : ''} ${customer.status === 'In Progress' ? 'bg-[#FEBB0C]' : ''}`}></span>{customer.status}
                        </span>
                        </div>
                        <p className="text-[#627382]">{customer.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex justify-between items-center gap-2">
                                <span className='text-[#627382]'>{customer.id}</span>
                                <p className={priorityColor}>{customer.customerPriority}</p>
                            </div>
                            <div className="flex justify-between items-center gap-2 text-[#627382]">
                                <p className='mr-4' >{customer.customerName}</p>
                                <span className="flex items-center gap-1">
                                    <img src={calenderImg} alt="Calendar" className="w-4 h-4" />{customer.date}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CustomersTickets;
