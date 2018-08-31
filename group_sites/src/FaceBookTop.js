import React, {Component} from 'react';
import './FaceBook.css';

class FaceBookTop extends Component {
    render() {
        return (
            <div id="navwrapper">
                <div id="navbar">
                    <table className="tablewrapper">
                        <tr>
                            <td className="row1">email/phone</td>
                            <td className="row1">password</td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                            </td>
                            <td>
                                <div id="button">Sign In</div>
                            </td>
                        </tr>
                        <tr >
                            <td>
                                <div className="row2"><input type="text"/></div>
                            </td>
                            <td className="row2 h"><input type="text"/></td>
                        </tr>
                    </table>

                    <h1 className="logowrapper">Facebook</h1>

                </div>
            </div>
        )
    }
}

export default FaceBookTop;