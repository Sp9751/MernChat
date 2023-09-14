import React from 'react'
import Avatar from './Avatar'

function Contact({id, username, onClick, selectedid, online}) {
    return (
        <div key={id} onClick={() => onClick(id)} className={'border-b border-grey-100 flex items-center gap-2 cursor-pointer ' +(selectedid ? 'bg-blue-50' : '')}>
            {selectedid && (
                <div className='w-1 bg-blue-500 h-14 rounded-r-md'></div>
            )}
            <div className='flex items-center gap-2 py-2 pl-4'>
                <Avatar online={online} username={username} UserId={id} />
                <span className='text-grey-800'>{username}</span>
            </div>
        </div>
    )
}

export default Contact