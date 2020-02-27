import React from 'react'
import 'react-chat-elements/dist/main.css';
import { MessageBox } from 'react-chat-elements';



class ChatImage extends React.Component {
    render() {

        return (
            <div className="container2 pt-3">
                
                <MessageBox
                    position={'right'}
                    type={'photo'}
                    text={'react.svg'}
                    data={{
                        uri: '',
                        status: {
                            click: false,
                            loading: 0,
                        }
                    }} />
            </div>

        );
    }
}




export default ChatImage;
