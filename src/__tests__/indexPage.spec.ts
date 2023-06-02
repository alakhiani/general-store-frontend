import { render, screen } from '@testing-library/react';
import IndexPage, { IndexPageProps } from '@/pages/index';
import '@testing-library/jest-dom';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

describe('Home page', () => {
    test('renders a heading', () => {
        const props: IndexPageProps = {
            title: 'General Store',
            summary: 'My summary',
        };

        render(<IndexPage {...props} /> as typeof IndexPage<IndexPageProps>);
        // render(<IndexPage { ...props } /> as typeof IndexPage);

        const title = screen.getByRole('heading', { name: /General Store/i });
        expect(title).toBeInTheDocument();

        const summary = screen.getByText('My summary');
        expect(summary).toBeInTheDocument();
    });
});
