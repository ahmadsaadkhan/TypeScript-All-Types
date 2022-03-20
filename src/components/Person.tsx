import { PersonTypes } from "./Person.Types"
export const Person = ({name}: PersonTypes) => {
    return (
        <div>Hello {name.first} {name.last}! </div>
    )
}