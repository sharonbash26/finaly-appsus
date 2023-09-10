const { useState, useEffect } = React

export function MailFilter({ filterBy, onSetFilterBy }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilterBy(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break;

            case 'checkbox':
                value = target.checked
                break

            default:
                break;
        }

        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilterBy(filterByToEdit)
    }

    const { subject} = filterByToEdit
    return (
        <section className="mail-filter">
            <form onSubmit={onSubmitFilter}>
                <label htmlFor="title">Search: </label>
                <input value={subject} onChange={handleChange} type="text" placeholder="Search" id="title" name="title" />

                {/* <label htmlFor="price">Price: </label>
                <input value={price} onChange={handleChange} type="number" placeholder="By Price" id="price" name="price" /> */}

                <button>Search</button>
            </form>
        </section>

    )
}