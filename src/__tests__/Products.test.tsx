import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Products } from '../Products'

describe('Products', () => {
    test("should display no products", () => {

        render(<Products />);

        expect(screen.getByText(/No products/i)).toBeDefined()
    })
})