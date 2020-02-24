import * as React from 'react';
import { render } from 'react-dom';

const App: React.FC = () => (
    <div>Hello, Happy World!</div>
);

render(<App />, document.getElementById('root'));