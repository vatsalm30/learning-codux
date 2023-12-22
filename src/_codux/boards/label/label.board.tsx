import '../../../index.css';
import { createBoard } from '@wixc3/react-board';
import { Label } from '../../../components/label/label';

export default createBoard({
    name: 'Label',
    Board: () => <Label className="Label">Label</Label>,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        canvasWidth: 32
    }
});
