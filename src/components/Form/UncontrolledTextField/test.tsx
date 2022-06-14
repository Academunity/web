import { Email } from 'styled-icons/material-outlined';
import { render, screen } from 'utils/tests';

import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';

import { UncontrolledTextField } from '.';

describe('<UncontrolledTextField />', () => {
  it('should render correctly', () => {
    render(<UncontrolledTextField />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('render with label', () => {
    render(<UncontrolledTextField label="Label" name="label" />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<UncontrolledTextField placeholder="Placeholder" />);

    expect(screen.getByPlaceholderText('Placeholder')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    render(<UncontrolledTextField icon={<Email data-testid="icon" />} />);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders with icon on the right side', () => {
    render(
      <UncontrolledTextField
        icon={<Email data-testid="icon" />}
        iconPosition="right"
      />,
    );

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 });
  });

  it('is accessible by tab', () => {
    render(
      <UncontrolledTextField
        label="UncontrolledTextField"
        name="UncontrolledTextField"
      />,
    );

    const input = screen.getByLabelText('UncontrolledTextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('does not change its value when disabled', async () => {
    const onChange = jest.fn();
    render(
      <UncontrolledTextField
        label="UncontrolledTextField"
        name="UncontrolledTextField"
        onChange={onChange}
        disabled
      />,
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });

    expect(onChange).not.toHaveBeenCalled();
  });

  it('is not accessible by tab when disabled', () => {
    render(
      <UncontrolledTextField
        label="UncontrolledTextField"
        name="UncontrolledTextField"
        disabled
      />,
    );

    const input = screen.getByLabelText('UncontrolledTextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).not.toHaveFocus();
  });
});

it('renders with error', () => {
  render(
    <UncontrolledTextField
      label="UncontrolledTextField"
      name="UncontrolledTextField"
      error="Error message"
    />,
  );

  expect(screen.getByText('Error message')).toBeInTheDocument();
});
