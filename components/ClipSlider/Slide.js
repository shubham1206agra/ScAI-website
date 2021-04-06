const Slide = (props) => {
    return (
        <div className={`slide ${props.active ? 's--active' : ''} ${props.prev ? 's--prev' : ''}`}>
            <div className="slide__inner" style={{backgroundImage: `url(${props.backImg})`}}>
                {props.children}
                <div className="slide__content">
                    <h2 className="slide__heading">
                        {props.heading}
                    </h2>
                    <p className="slide__text">{props.subText}</p>
                </div>
            </div>
        </div>
    );
};

export default Slide;
