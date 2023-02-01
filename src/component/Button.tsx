interface button_t {
    count: React.ReactNode; // Pourquoi Number ne fonctionne pas  ?
    onClick: React.MouseEventHandler<HTMLButtonElement> ,
}

function Button({ count, onClick }: button_t) {
    return (
        <button onClick={onClick}>
            you clicked {count}
        </button>
    )
}
export default Button