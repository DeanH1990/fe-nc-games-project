const ErrorPage = (props) => {
    const {message} = props

    return !message ? 
    <div className="wrong-route">
        <h3>Page does not exist</h3> 
        <img src="https://image.shutterstock.com/image-vector/error-404-web-page-not-600w-1937139211.jpg" alt="404 page" />
    </div> : message.status === 404 ? 
    <div className="error-page-404">
        <h3>{message.data.msg}</h3>
        <img src="https://image.shutterstock.com/image-vector/error-404-web-page-not-600w-1937139211.jpg" alt="404 page" />
    </div> : message.status === 400 ?
    <div className="error-page-400">
        <h3>{message.data.msg}</h3>
        <img src="https://previews.123rf.com/images/leremy/leremy1702/leremy170200035/71368169-website-error-400-bad-request-.jpg" alt="400 page" />
    </div> : <></>
    

    
}

export default ErrorPage