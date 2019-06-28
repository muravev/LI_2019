import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './../ErrorBoundaries/ErrorBoundaries';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import './modal.css';


const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
lengModal = 15;
constructor(props) {
super(props);
this.el =   document.createElement('div');
this.el.class    =    'modBox';
}

componentDidMount() {
modalRoot.appendChild(this.el);
}

componentWillUnmount() {
modalRoot.removeChild(this.el);
}

get portal() {
return ReactDOM.createPortal(
<div>
<div className="mo-index"></div>
<div className="modalN2">

<div className="modalN1">
<Icon
type="close"
className="okno1"
onClick={this.props.onClose}
/>
{this.props.children}
</div>
</div>
</div>,
this.el,
);
}

render() {
return (
<ErrorBoundary>
<div>
{this.portal}
</div>
</ErrorBoundary>
);
}
}

Modal.propTypes = {
children: PropTypes.node,
onClose: PropTypes.func.isRequired
};

export default Modal;
