import type { IGame } from "../types";

interface IGameCard extends IGame 
{
    
}


export function GameCard({cover, rating, title, description, price }: IGameCard) {
    return (
        <article className="card">
            <div className="card__cover"> 
                {cover && <img src={cover.url} alt={cover.alternativeText}/>}
                {rating && <b className="card__rating">{rating}</b>}
            </div>

            <div className="card__body">
                <h3>{title}</h3>
                {/* <p className="card__meta">Жанр, год</p> */}
                {description && (
                    <p className="card__desc"> 
                    {description[0].children[0].text}
                    </p>
                    )}
                <p className="card__platforms">Платформы</p>
            </div>

            <footer className="card__footer">
                {price && (
                <strong 
                className={`$price === 0 ? 'free' : ''}`}>
                </strong>
                )}
                <button className="link-btn">Удалить</button>
            </footer>
        </article>
    )
}
