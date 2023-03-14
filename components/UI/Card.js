const Card = (props) => {
    return (
        <>
            <div className="main-card shadow p-2">
                {props.children}
            </div>
        </>
    );
};


export default Card;