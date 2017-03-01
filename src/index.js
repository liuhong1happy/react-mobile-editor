import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ImportImages from './ImportImages';
import InsertImage from './InsertImage';
import indexLess from './editor.less';

class ReactMobileEditor extends Component {
    handleChange(context, type, value) {
        if(this.props.onChange) {
            this.props.onChange(context, type, value);
        }
    }
    render() {
        const { content, uploadResponseHandler, fullscreen, height} = this.props;
        const style = fullscreen ? {height: window.innerHeight} : { height: height};
        return (<div className={`react-mobile-editor ${fullscreen?'fullscreen':''}`} style={style}>
            <div className="editor-content">
            {
                content.map((c,pos)=> {
                    switch(c.type) {
                        case 'text':
                            return (<textarea data-index={pos} value={c.text} onChange={(e)=>this.handleChange(e,'text', e.target.value)}/>)
                        case 'images':
                            return (<ImportImages data-index={pos} sources={c.sources} uploadResponseHandler={uploadResponseHandler} onChange={(e)=>this.handleChange(e, 'images', e.sources)}/>)
                        default:
                            return null;
                    }
                })
            }
            </div>
            <InsertImage uploadResponseHandler={uploadResponseHandler}/>
        </div>)
    }
}

ReactMobileEditor.propTypes = {
    content: PropTypes.array,
    uploadResponseHandler: PropTypes.func,
    fullscreen: PropTypes.bool
}

ReactMobileEditor.defaultProps = {
    content: [
        {
            type: 'text',
            text: '请输入内容'
        },
        {
            type: 'images',
            sources: []
        }
    ],
    uploadResponseHandler: (res)=> {
        return res.status === 'success' ? res.data.src : false;
    },
    fullscreen: true,
    height: 450
}


export default ReactMobileEditor;
