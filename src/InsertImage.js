import React, { Component, PropTypes } from 'react';
import upload from '../images/img.png';
import fileUploader from './FileUploader';

class InsertImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            percent: 0,
            showProgress: false
        }
    }
    handleChange(e) {
        if(e.target.files && e.target.files.length>0) {
            fileUploader.uploadFiles({

            })
            this.setState({
                percent: 0,
                showProgress: true
            })
        }
    }
    render() {
        return (<div className="insert-image">
            <input value={this.state.value} type="file" name="insert-image-file" id="insert-image-file" multiple accept="image/(*)" style={{opacity: 0}} onChange={(e)=>this.handleChange(e)}/>
            <label htmlFor="insert-image-file">
                <span className="icon-insert">插入图片</span>
            </label>
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