import { useState } from "react"
export function XFollowcard({userName, name, initialIsFollowing = false}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    
    const text = isFollowing 
        ? 'siguiendo' 
        : 'seguir'

    const buttonClassName = isFollowing
        ? 'x-follow-card-button is-following tw-followCard-text'
        : 'x-follow-card-button' 

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return(
        <article className = 'x-follow-card'>
            <header className = 'x-follow-card-header'>
                <img
                className = 'x-follow-card-avatar'
                src={`https://unavatar.io/twitter/${userName}`}
                alt = {`imagen de ${userName}`}
                />
                <div className = 'x-follow-card-info'>
                    <strong>{name}</strong>
                    <span className = 'x-follow-card-info-username'> {`@${userName}`}</span>

                </div>
                
            </header>
            <aside>
                <button className = {buttonClassName} onClick={handleClick}>
                    <span className = 'x-follow-card-text'> {text} </span>
                    <span className = 'x-follow-card-stopFollow'> dejar de seguir </span>
                </button>
                
            </aside>
        </article>
    )
}