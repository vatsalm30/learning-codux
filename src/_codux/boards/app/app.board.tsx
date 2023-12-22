import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowHeight: 896,
        windowWidth: 940,
        canvasWidth: 466
    }
});
