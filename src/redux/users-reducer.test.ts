
import usersReducer, {followAC, unfollowAC, usersType} from './users-reducer';
/*

test('write user should be correct change follow',()=>{
const startState: usersType={
    users:[
    {id: '1', followed: false, name: 'Dim', status: 'I\'m BOSS', location: {city: 'Minsk', country: 'Belarus'},
        photos:{small: "123", large: "126"}},
    {id: '2', followed: true, name: 'Ann', status: 'I\'m BOSS', location: {city: 'Moscow', country: 'Russian'},
        photos:{small: "123", large: "126"}},
]}
    const endState=usersReducer(startState,followAC('1'))

    expect(endState).toEqual({
        users:[
            {id: '1', followed: true, name: 'Dim', status: 'I\'m BOSS', location: {city: 'Minsk', country: 'Belarus'},
                photos:{small: "123", large: "126"}},
            {id: '2', followed: true, name: 'Ann', status: 'I\'m BOSS', location: {city: 'Moscow', country: 'Russian'},
                photos:{small: "123", large: "126"}},
        ]})
})

test('write user should be correct change unfollow',()=>{
    const startState: usersType={
        users:[
            {id: '1', followed: true, name: 'Dim', status: 'I\'m BOSS', location: {city: 'Minsk', country: 'Belarus'},
                photos:{small: "123", large: "126"}},
            {id: '2', followed: false, name: 'Ann', status: 'I\'m BOSS', location: {city: 'Moscow', country: 'Russian'},
                photos:{small: "123", large: "126"}},
        ]}
    const endState=usersReducer(startState,unfollowAC('1'))

    expect(endState).toEqual({
        users:[
            {id: '1', followed: false, name: 'Dim', status: 'I\'m BOSS', location: {city: 'Minsk', country: 'Belarus'},
                photos:{small: "123", large: "126"}},
            {id: '2', followed: false, name: 'Ann', status: 'I\'m BOSS', location: {city: 'Moscow', country: 'Russian'},
                photos:{small: "123", large: "126"}},
        ]})
})
*!/*/
