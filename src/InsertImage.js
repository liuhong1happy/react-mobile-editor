import React, { Component, PropTypes } from 'react';
import upload from '../images/img.png';
import fileUploader from './FileUploader';

class InsertImage extends Component {
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
            this.props.onChange(e,'images', [...loadedFiles])
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