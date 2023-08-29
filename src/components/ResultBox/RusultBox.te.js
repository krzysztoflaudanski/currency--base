// import ResultBox from './ResultBox';
// import { render, screen, cleanup } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

// describe('Component ResultBox', () => {
//     it('should render without crashing', () => {
//         render(<ResultBox from="PLN" to="USD" amount={100} />);
//     });

//     const testCases = [
//         { amount: '100', from: 'PLN', to: 'USD' },
//         { amount: '20', from: 'USD', to: 'PLN' },
//         { amount: '200', from: 'PLN', to: 'USD' },
//         { amount: '345', from: 'USD', to: 'PLN' },s
//     ];

//     for (const testObj of testCases) {

//         it('should render proper info about conversion when PLN -> USD', () => {
//             render(<ResultBox from="PLN" to="USD" amount={testObj.amount} />);
//             const output = screen.getByTestId('output');
//             expect(output).toHaveTextContent('PLN 100.00 = $28.57');
//         });

//         // it('should render proper info about conversion when USD -> PLN', () => {
//         //     render(<ResultBox from="PLN" to="USD" amount={} />);
//         //     const output = screen.getByTestId('output');
//         //     expect(output).toHaveTextContent('PLN 100.00 = $28.57');
//         // });

//         cleanup();
//     }
// });