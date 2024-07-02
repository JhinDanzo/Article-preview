import "./SharePage.scss"

function SharePage({children, show}){
    if (!show){
        return null;
    }

    return(
        <>
            <div className="modal-overlay">
                <div className="modal-contetn">
                    {children}
                </div>
            </div>
            <div className="triangle"></div>
        </>
    )
}

export default SharePage