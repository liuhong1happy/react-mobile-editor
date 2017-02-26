import React, { Component, PropTypes } from 'react';
import img from '../images/img.png';

class InsertImage extends Component {
    render() {
        const { imgWidth, imgHeight, sources} = this.props;
        const images = sources.contact(upload);
        return (<div className="insert-image">
            <img src={img} />
            <span>插入图片</span>
        </div>)
    }
}

InsertImage.defaultProps = {
    onChange: (context, type, images)=>{}
}

InsertImage.protoTypes = {
    onChange: PropTypes.func
}

export default InsertImage;