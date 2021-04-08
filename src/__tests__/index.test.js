import React from 'react'
import {render, screen} from '@testing-library/react'
import Collapsible from '../'

test('increments the count', () => {
  render(<Collapsible>children</Collapsible>)
  expect(screen.queryByText("children")).toBeNull();

  userEvent.click(screen.getByRole("button", { name: "Expand" }));
  expect(screen.getByText("children")).toBeInTheDocument();

  userEvent.click(screen.getByRole("button", { name: "Collapse" }));
  expect(screen.queryByText("children")).toBeNull();
})

