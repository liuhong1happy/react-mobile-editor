import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ImportImages from './ImportImages';
import InsertImage from './InsertImage';

class ReactMobileEditor extends Component {
    handleChange(context, type, value) {
        if(this.props.onChange) {
            this.props.onChange(context, type, value);
        }
    }
    render() {
        const { content, uploadResponseHandler } = this.props;
        
        return (<div className="react-mobile-editor">
        {
            content.map((c)=> {
                switch(c.type) {
                    case 'text':
                        return (<textarea value={c.text} onChange={(e)=>this.handleChange(e,'text', e.target.value)}/>)
                    case 'images':
                        return (<ImportImages sources={c.sources} uploadResponseHandler={uploadResponseHandler} onChange={(e)=>this.handleChange(e, 'images', e.sources)}/>)
                    default:
                        return null;
                }
            })
        }
        <InsertImage />
        </div>)
    }
}

ReactMobileEditor.propTypes = {
    content: PropTypes.array,
    uploadResponseHandler: PropTypes.func
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
    }
}


export default ReactMobileEditor;
