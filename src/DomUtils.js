export default {
    getSelection(){
		if(window.getSelection) return window.getSelection();
		else if(document.getSelection) return document.getSelection();
		else if(document.selection) return document.selection.createRange();
		else return null;
	},
	createRange(){
		if(this.storedRange) return;
		this.selection = this.getSelection();
		if(!this.validateSelection()) return;
		if(this.selection && this.selection.rangeCount>0) {
			this.range = this.selection.getRangeAt(0).cloneRange();
		}else{
			this.range = null;
		}
	},
}