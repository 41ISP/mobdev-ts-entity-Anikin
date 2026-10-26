export function GameForm() {
    return (
        <form className="form">
            <h2>Добавить игру</h2>

            <label className="field">
                Название
                <input type="text" required />
            </label>

            <label className="field">
                Описание
                <textarea rows={3} />
            </label>

            <div className="row">
                <label className="field">
                    Жанр
                    <select>
                        <option>РПГ</option>
                    </select>
                </label>
                <label className="field">
                    Дата выхода
                    <input type="date" required />
                </label>
            </div>

            <div className="row">
                <label className="field">
                    Рейтинг: 0
                    <input type="range" min={0}  max={10} step={0.5} />
                </label>
                <label className="field">
                    Цена, €
                    <input type="number" min={0} step={0.01} />
                </label>
            </div>

            <fieldset>
                <legend>Платформы</legend>
                <label className="check">
                    <input type="checkbox" />
                    ПК
                </label>
            </fieldset>

            <button className="btn">Сохраняем… Добавить игру</button>
        </form>
    )
}
