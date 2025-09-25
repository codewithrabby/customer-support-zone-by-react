import React, { useState, useEffect } from 'react'
import calenderImg from "../assets/ri_calendar-line.png"

const CustomersTicketsAndAside = ({ customersPromise, setInProgressCount, setResolvedCount }) => {
  const [customersData, setCustomersData] = useState([])
  const [tasks, setTasks] = useState([])
  const [resolvedTasks, setResolvedTasks] = useState([])
  const [toast, setToast] = useState({ show: false, message: "" })

  useEffect(() => {
    let mounted = true
    customersPromise.then(data => {
      if (mounted) setCustomersData(data)
    })
    return () => mounted = false
  }, [customersPromise])

  // Add Task & Remove from Customer Tickets Section Starts from here...
  const handleAddTask = (customer) => {
    if (!tasks.find(t => t.id === customer.id) && !resolvedTasks.find(t => t.id === customer.id)) {
      setTasks(prev => [...prev, customer])
      setInProgressCount(tasks.length + 1)
      setCustomersData(prev => prev.filter(c => c.id !== customer.id))
      setToast({ show: true, message: "In Progress!" })
      setTimeout(() => setToast({ show: false, message: "" }), 3000)
    }
  }

  // Complete Task Section Starts from here...
  const handleCompleteTask = (taskId) => {
    const taskToResolve = tasks.find(t => t.id === taskId)
    if (!taskToResolve) return

    // Remove from Task Status Section Starts from here...
    const newTasks = tasks.filter(t => t.id !== taskId)
    setTasks(newTasks)
    setInProgressCount(newTasks.length)

    // Add to Resolved Tasks Section Starts from here...
    const newResolved = [{ ...taskToResolve, completed: true }, ...resolvedTasks]
    setResolvedTasks(newResolved)
    setResolvedCount(newResolved.length)

    setToast({ show: true, message: "Completed!" })
    setTimeout(() => setToast({ show: false, message: "" }), 3000)
  }

  if (!customersData.length && tasks.length === 0) return <div className="text-center py-20">Loading Tickets...</div>

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 relative">

      {/* Customer Tickets Starts from here... */}
      <div className="lg:w-3/4 w-full">
        <h2 className="text-[#34485A] font-semibold text-2xl mb-4">Customer Tickets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {customersData.map((customer) => {
            let priorityColor = customer.customerPriority.toLowerCase() === 'high' ? 'text-[#F83044]' : customer.customerPriority.toLowerCase() === 'medium' ? 'text-[#FEBB0C]' :'text-[#02A53B]'

            return (
              <div key={customer.id} onClick={() => handleAddTask(customer)}
                className="p-4 bg-white rounded-md shadow-md space-y-2 cursor-pointer hover:bg-gray-50">
                <div className="flex justify-between items-center">
                  <h2 className="text-[#001931] text-lg font-semibold">{customer.title}</h2>
                  <span className={`flex items-center gap-2 px-3 py-1 text-sm font-semibold rounded-lg
                    ${customer.status === 'Open' ? 'bg-[#B9F8CF] text-[#0B5E06]' : ''}
                    ${customer.status === 'In Progress' ? 'bg-[#F8F3B9] text-yellow-800' : ''}`}>
                    <span className={`w-3 h-3 rounded-full block
                      ${customer.status === 'Open' ? 'bg-[#02A53B]' : ''}
                      ${customer.status === 'In Progress' ? 'bg-[#FEBB0C]' : ''}`}></span>
                    {customer.status}
                  </span>
                </div>
                <p className="text-[#627382]">{customer.description}</p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#627382]">{customer.id}</span>
                    <p className={priorityColor}>{customer.customerPriority}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#627382]">
                    <p>{customer.customerName}</p>
                    <span className="flex items-center gap-1">
                      <img src={calenderImg} alt="Calendar" className="w-4 h-4" /> {customer.date}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Task Status & Resolved Section Starts from here... */}
      <div className="lg:w-1/4 w-full space-y-6 ml-4 lg:ml-0">

        {/* Task Status Section Starts from here... */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">Task Status</h3>
          {tasks.length === 0 && <p className="text-gray-400 text-sm">Select a ticket to add</p>}
          {tasks.map(task => (
            <div key={task.id} className="p-4 bg-white rounded-md shadow-md space-y-2">
              <h4 className="font-semibold">{task.title}</h4>
              <button onClick={() => handleCompleteTask(task.id)}
                className="bg-[#02A53B] text-white w-full px-3 py-1 rounded hover:bg-green-700">
                Complete
              </button>
            </div>
          ))}
        </div>

        {/* Resolved Tasks Section Starts from here... */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">Resolved Tasks</h3>
          {resolvedTasks.length === 0 && <p className="text-gray-400 text-sm">No resolved tasks yet.</p>}
          {resolvedTasks.map(task => (
            <div key={task.id} className="p-4 bg-white rounded-md shadow-md space-y-1">
              <h4 className="font-semibold">{task.title}</h4>
              {task.completed && <p className="text-green-600 font-semibold text-sm">Completed</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Toast Section Starts from here... */}
      {toast.show && (
        <div className="fixed right-5 top-17 bg-white shadow-md px-4 py-2 rounded w-64 z-50">
          <p className="font-semibold">{toast.message}</p>
        </div>
      )}
    </div>
  )
}

export default CustomersTicketsAndAside
