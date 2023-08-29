import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const testCases = [
    { amount: '100', from: 'PLN', to: 'USD', expect: 'PLN 100.00 = $28.57' },
    { amount: '20', from: 'USD', to: 'PLN', expect: '$20.00 = PLN 70.00' },
    { amount: '200', from: 'PLN', to: 'USD', expect: 'PLN 200.00 = $57.14' },
    { amount: '345', from: 'USD', to: 'PLN', expect: '$345.00 = PLN 1,207.50' },
    { amount: '200', from: 'PLN', to: 'PLN', expect: 'PLN 200.00 = PLN 200.00' },
    { amount: '345', from: 'PLN', to: 'PLN', expect: 'PLN 345.00 = PLN 345.00' },
    { amount: '200', from: 'USD', to: 'USD', expect: '$200.00 = $200.00' },
    { amount: '345', from: 'USD', to: 'USD', expect: '$345.00 = $345.00' },
];

describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });
    it('should render proper info about conversion PLN -> USD / USD -> PLN / USD -> USD / PLN -> PLN', () => {
        for (const testObj of testCases) {
            if ((testObj.from === 'PLN' && testObj.to === 'USD') || (testObj.from === 'USD' && testObj.to === 'PLN') ||
            (testObj.from === 'USD' && testObj.to === 'USD') || (testObj.from === 'PLN' && testObj.to === 'PLN')) 
            render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(testObj.expect);
            cleanup();
        }
    });
});