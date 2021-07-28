import usersReducer, {followAC, unfollowAC, usersType} from './users-reducer';


test('write user should be correct change follow',()=>{
const startState: usersType={
    users:[
    {id: '1', followed: false, fullName: 'Dim', status: 'I\'m BOSS', location: {city: 'Minsk', country: 'Belarus'}},
    {id: '2', followed: false, fullName: 'Ann', status: 'I\'m BOSS', location: {city: 'Moscow', country: 'Russian'}},
]}
    const endState=usersReducer(startState,followAC('1'))

    expect(endState).toEqual({
        users:[
            {id: '1', followed: true, fullName: 'Dim', status: 'I\'m BOSS', location: {city: 'Minsk', country: 'Belarus'}},
            {id: '2', followed: true, fullName: 'Ann', status: 'I\'m BOSS', location: {city: 'Moscow', country: 'Russian'}},
        ]})
})

test('write user should be correct change unfollow',()=>{
    const startState: usersType={
        users:[
            {id: '1', followed: true, fullName: 'Dim', status: 'I\'m BOSS', location: {city: 'Minsk', country: 'Belarus'}},
            {id: '2', followed: false, fullName: 'Ann', status: 'I\'m BOSS', location: {city: 'Moscow', country: 'Russian'}},
        ]}
    const endState=usersReducer(startState,unfollowAC('1'))

    expect(endState).toEqual({
        users:[
            {id: '1', followed: false, fullName: 'Dim', status: 'I\'m BOSS', location: {city: 'Minsk', country: 'Belarus'}},
            {id: '2', followed: false, fullName: 'Ann', status: 'I\'m BOSS', location: {city: 'Moscow', country: 'Russian'}},
        ]})
})
