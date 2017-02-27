import React, { Component, PropTypes } from 'react';
import upload from '../images/upload.png';

class ImportImages extends Component {
    render() {
        const { imgWidth, imgHeight, sources} = this.props;
        const images = sources.concat(upload);
        return (<div className="import-images">
            {
                images.map((img)=>{
                    return (<img src={images} width={imgWidth} height={imgHeight} />)
                })
            }
        </div>)
    }
}

ImportImages.defaultProps = {
    sources: [],
    imgWidth: 120,
    imgHeight: 120
}

ImportImages.propTypes = {
    sources: PropTypes.array,
    imgWidth: PropTypes.number,
    imgHeight: PropTypes.number
}

export default ImportImages;