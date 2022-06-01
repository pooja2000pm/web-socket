const ProgressBar = () => {
    return ( 
        <div className='d-flex align-items-center w-200px w-sm-300px flex-column mt-3'>
        <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
          <span className='fw-bold fs-6 text-gray-400'>Loading the results</span>
          <span className='fw-bolder fs-6'>50%</span>
        </div>
        <div className='h-5px mx-3 w-100 bg-light mb-3'>
          <div
            className='bg-success rounded h-5px'
            role='progressbar'
            style={{width: '50%'}}
          ></div>
        </div>
      </div>
     );
}
 
export default ProgressBar;