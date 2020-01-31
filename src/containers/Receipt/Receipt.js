import React, {Component} from 'react';
import './Receipt.css';

class Receipt extends Component {
    render() {
        return (
            <div className='receipt'>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-success">
                        Your Order
                    </li>
                    {/*<li className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">*/}
                    {/*    Dapibus ac facilisis in*/}
                    {/*    <span className="badge badge-primary badge-pill">2</span>*/}
                    {/*</li>*/}
                    <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-info">
                        Total: som
                    </li>
                </ul>
            </div>
        );
    }
}

export default Receipt;