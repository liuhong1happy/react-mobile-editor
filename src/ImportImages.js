import React, { Component, PropTypes } from 'react';
import upload from '../images/upload.png';
import fileUploader from './FileUploader';

class ImportImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            percent: 0,
            showProgress: false,
            loadedFileCount: 0,
            loadedFiles: []
        }
    }
    handleChange(e) {
        if(e.target.files && e.target.files.length>0) {
            const fileCount = e.target.files.length;
            fileUploader.uploadFiles({
                files: e.target.files,
                onLoad: (e, {files}) => this.handleLoad(e,files),
                onSuccess: (res)=>{
                    const source =  this.props.uploadResponseHandler(res);
                    if(source) {
                        const loadedFiles = this.state.loadedFiles;
                        loadedFiles.push(source);
                        this.setState({
                            loadedFiles
                        })
                    }
                },
                onEnd: (e) => this.handleEnd(e, fileCount)
            })
            this.setState({
                percent: 0,
                showProgress: true,
                loadedFileCount: 0,
                loadedFiles: []
            })
        }
    }
    handleLoad(e, files) {
        // 渲染百分比
        const percent = 0;
        const total = 0;
        const loaded = 0;

        for(let i=0;i<files.length;i++) {
            total += files.total || 100;
            loaded += files.loaded || 0;
        }
        percent = loaded / total * 100;
        this.setState({
            percent,
            showProgress: true
        })
    }
    handleEnd(e, fileCount) {
        // 处理次数需要等于文件次数
        const loadedFileCount = this.state.loadedFileCount + 1;
        if(loadedFileCount===fileCount) {
            const loadedFiles = this.state.loadedFiles;
            this.setState({
                percent: 100,
                showProgress: false,
                loadedFileCount
            })
            this.props.onChange(e,'images', [...this.props.sources, ...loadedFiles])
        }
    }
    render() {
        const { imgWidth, imgHeight, sources} = this.props;
        return (<div className="import-images">
            <input type="file" id="import-images-file" onChange={e => this.handleChange(e)}/>
            {
                sources.map((img)=>{
                    return (<img src={images} width={imgWidth} height={imgHeight} />)
                })
            }
            <label htmlFor="import-images-file">
                <img src={upload} width={imgWidth} height={imgHeight}/>
            </label>
        </div>)
    }
}

ImportImages.defaultProps = {
    sources: [],
    imgWidth: 60,
    imgHeight: 60
}

ImportImages.propTypes = {
    sources: PropTypes.array,
    imgWidth: PropTypes.number,
    imgHeight: PropTypes.number
}

export default ImportImages;