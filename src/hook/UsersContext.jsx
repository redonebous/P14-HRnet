import { employees } from '../data/employees';
import { createContext, useContext, useReducer } from 'react';


const UsersContext = createContext(null);

const UsersDispatchContext = createContext(null);

export function UsersProvider({ children }) {
    const [users, dispatch] = useReducer(
        usersReducer,
        employees
    );

    return (
        <UsersContext.Provider value={users}>
            <UsersDispatchContext.Provider value={dispatch}>
                {children}
            </UsersDispatchContext.Provider>
        </UsersContext.Provider>
    );
}

export function useUsers() {
    return useContext(UsersContext);
}

export function useUsersDispatch() {
    return useContext(UsersDispatchContext);
}

function usersReducer(users, action) {
    switch (action.type) {
        case 'USER_ADD': {
            return [...users, { ...action.payload }];
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

