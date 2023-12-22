import { createBoard } from '@wixc3/react-board';
import { SubmitButton } from '../../../components/submitbutton/submitbutton';

export default createBoard({
    name: 'SubmitButton',
    Board: () => <SubmitButton children="Submit"/>,
    isSnippet: true,
});
