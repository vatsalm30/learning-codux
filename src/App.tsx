import { useState } from 'react';
import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButton } from './components/submitbutton/submitbutton';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}><form>
            <Label htmlFor={'name'}>Name</Label><Input id={'name'} name={'name'} />
            <Label htmlFor={'email'}>Email</Label><Input id={'email'} name={'email'} />
            <Label htmlFor={"message"}>Message</Label><Input id={'message'} name={'message'} />
            <SubmitButton>{'Submit'}</SubmitButton>
        </form>
        </div>
    );
}

export default App;
