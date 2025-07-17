const Carde = ({tittle}) => {
    return (
        <h2>{tittle}</h2>
    )
}

const App = () => {
    return (
        <>
            <h2>Functional Arrow Component</h2>
            <Carde tittle="Star Wars"/>
            <Carde tittle="Avatars"/>
            <Carde tittle="The Lion King"/>
        </>
    )
}

export default App
