import { AuthContext } from './AuthContext';
import React from 'react';

export const useAuth = () => React.useContext(AuthContext)