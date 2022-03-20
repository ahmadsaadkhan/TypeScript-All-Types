type JusticeLeagueType = {
    JusticeLeagueCast: {
        first: string;
        last: string;
    }[]
}
export const PersonLists = ({JusticeLeagueCast} : JusticeLeagueType) => {
    return (
        <div>
            <h1>Person Lists</h1>
            {JusticeLeagueCast.map((person, index) => {
                return (
                    <div key={index}>
                        <p>{`${person.first} ${person.last}`}</p>
                    </div>
                )
            })}
        </div>
    )
}