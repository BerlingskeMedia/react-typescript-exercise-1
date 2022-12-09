import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Basket } from '../Basket'

describe('Products', () => {
    test("should display no products", () => {

        render(<Basket />);

        expect(screen.getByText(/Empty basket/i)).toBeDefined()
    })
})
