import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Collapsible from '../'

test('collapses and expands children', () => {
  render(<Collapsible>children</Collapsible>)
  expect(screen.queryByText("children")).toBeNull();

  userEvent.click(screen.getByRole("button", { name: "Expand" }));
  expect(screen.getByText("children")).toBeInTheDocument();

  userEvent.click(screen.getByRole("button", { name: "Collapse" }));
  expect(screen.queryByText("children")).toBeNull();
})

