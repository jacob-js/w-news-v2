function Empty({emptyText}: {emptyText?: string}) {
  return (
    <div className='flex justify-center p-10 flex-col items-center gap-5'>
        <img src="/empty.svg" alt="No data!" className="w-32 object-center" />
        <div className="text-gray-600 ml-3">{emptyText || "No Data Found!"}</div>
    </div>
  )
}

export default Empty