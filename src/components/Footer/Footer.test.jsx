import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Footer  from './Footer'

it('shows the footer', () => {
    render(<Footer />)
    
    //userEvent.type(screen.getByLabelText('Name', 'johny'))
})