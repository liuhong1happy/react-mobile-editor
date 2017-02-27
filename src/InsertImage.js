import React, { Component, PropTypes } from 'react';
import upload from '../images/img.png';

class InsertImage extends Component {
    render() {
        return (<div className="insert-image">
            <img src={upload}/>
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