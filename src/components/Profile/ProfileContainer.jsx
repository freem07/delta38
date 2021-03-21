import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.jsx';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
       this.props.getUserProfile(userId)
    };

    render() {
        
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

let mapStateToProps = (props) => ({
    profile: props.profilePage.profile,

})


export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer) ;