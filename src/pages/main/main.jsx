import React from 'react';

import './main.scss';
import * as features from '../../features';

export default function Main() {
    return (
        <div className='main'>
            <features.Landing />
            <features.Featured />
            <features.Socials />
        </div>
    )
}
