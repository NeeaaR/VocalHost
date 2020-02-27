import React from 'react'
import 'react-chat-elements/dist/main.css';
import { MessageBox } from 'react-chat-elements';
import { MessageList } from 'react-chat-elements';



class Chat extends React.Component {
    render() {

        return (
            <div className="container2">
                <MessageBox
<<<<<<< HEAD
                    position={'left'}
                    type={'text'}
                    text={'react.svg'}
                    data={{
                        uri: '',
                        status: {
                            click: false,
                            loading: 0,
                        }
                    }} />
                <MessageList
                    className='message-list'
                    lockable={true}
                    toBottomHeight={'100%'}
                    dataSource={[
                        {
                            position: 'right',
                            type: 'text',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                            // date: new Date(),
                        },

                    ]} />
=======
    position={'left'}
    type={'text'}
    text={'react.svg'}
    data={{
        uri: 'https://facebook.github.io/react/img/logo.svg',
        status: {
            click: false,
            loading: 0,
        }
    }}/>

    <MessageBox
    position={'right'}
    type={'photo'}
    text={'react.svg'}
    data={{
        uri: 'https://facebook.github.io/react/img/logo.svg',
        status: {
            click: false,
            loading: 0,
        }
    }}/>
    
    <MessageList
    className='message-list'
    lockable={true}
    toBottomHeight={'100%'}
    dataSource={[
        {
            position: 'right',
            type: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            date: new Date(),
        },
        
    ]} />

>>>>>>> 5c8f8f1461bbc7f9bbaece14fa7406f5eda917b1
            </div>

        );
    }
}




export default Chat;
