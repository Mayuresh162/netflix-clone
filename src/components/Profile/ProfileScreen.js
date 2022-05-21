import React, { useEffect, useState }  from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'
import Nav from '../NavBar/Nav'
import PlansScreen from '../Plans/PlansScreen'
import db from '../../firebase';
import './ProfileScreen.css'

function ProfileScreen() {
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

    useEffect(() => {
        db.collection('customers')
        .doc(user.uid)
        .collection('subscriptions')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(async subscription => {
                setSubscription({
                    role: subscription.data().role,
                    current_period_end: subscription.data().current_period_end.seconds,
                    current_period_start: subscription.data().current_period_start.seconds,
                })
            })
        })
    }, [user.uid])

  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen__info'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''></img>
          <div className='profileScreen__details'>
            <h2>{ user.email }</h2>
            <div className='profileScreen__plans'>
              <h3>Plans {`(Current Plan: ${subscription?.role})`}</h3>
              <PlansScreen />
              <button className='profileScreen__signOut' onClick={() => auth.signOut()}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen