import React, {Component} from 'react';
import './FaceBook.css';

class FaceBookLeftPage extends Component {
    render() {
        return (
            <div id="leftbod">


                <div className="connect bolder">
                    <h2>Connect with friends and the
                        the world around you on Facebook</h2>
                </div>

                <div className="leftbar">


                    <img
                        src="https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.2365-6/851565_602269956474188_918638970_n.png"
                        alt="" className="iconwrap fb1"/>
                    <div className="fb1">qwert
                        <span className="rowtext">see photes and updates from friends in the news feed</span>
                        <div> see photes and updates from friends in the news feed</div>
                        <span className="rowtext2 fb1"></span>
                    </div>
                </div>

                <div className="leftbar">
                    <h3>Test</h3>
                    <img
                        src="https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.2365-6/851585_216271631855613_2121533625_n.png"
                        alt="" className="iconwrap fb1"/>
                    <div className="fb1">
                        <span className="rowtext"></span>
                        <span className="rowtext2 fb1"></span>
                    </div>
                </div>

                <div className="leftbar">
                    <div>TEST</div>
                    <img
                        src="https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xap1/t39.2365-6/851558_160351450817973_1678868765_n.png "
                        alt="" className="iconwrap fb1"/>
                    <div className="fb1">
                        <span className="rowtext"></span>
                        <div> TEST</div>
                        <span
                            className="rowtext2 fb1"></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default FaceBookLeftPage;