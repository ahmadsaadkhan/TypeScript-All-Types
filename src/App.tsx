import { Button } from './components/Button';
import { Container } from './components/Container';
import { Counter } from './components/Counter';
import { DomRef } from './components/DomRef';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { LoggedIn } from './components/LoggedIn';
import { MutableRefs } from './components/MutableRefs';
import { Optional } from './components/Optional';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonLists } from './components/PersonLists';
import { Status } from './components/Status';
import { Theme } from './components/Theme';
import { User } from './components/User';
import { UserContext } from './components/UserContext';

const App = () => {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }
  const JusticeLeagueCast = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ]
  return (
      <div className="App">
        <Theme />
        <Greet name={`${personName.first} ${personName.last}`} messageCount={10} isLoggedIn={true} />
        <Person name={personName} />
        <PersonLists JusticeLeagueCast={JusticeLeagueCast} />
        <Status status="loading" />
        <Heading>Placeholder Text</Heading>
        <Oscar>
          <Heading>Oscar text for heading props</Heading>
        </Oscar>
        <Optional name="John" isLoggedIn={true} />
        <Button handleClick={(event) => console.log('Clicked!', event)} />
        <Input value='i am textbox value' handleChange={(e) => console.log(e.target.value)} />
        <Container styles={{ border: '1px solid black', padding: '1rem' }} />
        <LoggedIn />
        <User />
        <Counter />
        <UserContext />
        <DomRef />
        <MutableRefs />
      </div>
  );
}

export default App;
