import React from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';

import { createChangeUserNameAction } from '../actions/UserNameEvents';
import IUser from '../states/IUser';
import store, { IState } from '../Store';
import { TextBox } from './TextBox';

class UserForm extends React.Component<IUser, {}> {
    public render() {
        return (
            <div>
                <p>
                    <TextBox label="user name" type="text" value={this.props.name}
                        onChangeText={this.onChangeText} />
                </p>
            </div>
        );
    }
    private onChangeText = (value: string) => {
        store.dispatch(createChangeUserNameAction(value));
    }
}

const MapStateToProps = (state: IState) => {
    return state.User;
};

export default connect(MapStateToProps)(UserForm);
