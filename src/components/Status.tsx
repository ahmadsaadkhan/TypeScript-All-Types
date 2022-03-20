type StatusType = {
    status: 'loading' | 'success' | 'error';
}

export const Status = ({status}: StatusType) => {
    let message
    if(status === 'loading') {
        message = 'Loading...'
    } else if(status === 'success') {
        message = 'Success!'
    } else if(status === 'error') {
        message = 'Error!'
    }
    return (
        <div>
            <h1>Status</h1>
            <p>{message}</p>
        </div>
    )
}