export function TwitterFollowCard ({userName, name, isFollowing}) {
    const imageScr = `https://unavatar.io/${userName}`
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="El avatar de alguien" src={imageScr}/>
                <div className='tw-followCard-info'>
                    <strong>Señor de unavatar</strong>
                    <span className='tw-followCard-infoUserName'>@unavatar</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}