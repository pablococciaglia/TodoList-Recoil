import React from 'react';
import { useRecoilValue } from 'recoil';
import { userDataSelector } from '../atomsAndSelectors';

const UserData = () => {
	const userData = useRecoilValue(userDataSelector);
	return <h1>{userData.name}</h1>;
};

export default UserData;
