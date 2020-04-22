import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.imageRef= React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log(this.ImageRef.current.clientHeight);
    }

    render() {
        const {description , urls } = this.props.image;
        return <div>
            <img  
            ref={this.imageRef}
            alt={description} 
            stc={urls.regular}/>
        </div>
    }
}

export default ImageCard;