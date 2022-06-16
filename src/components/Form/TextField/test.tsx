import { FieldValues, useForm } from 'react-hook-form';
import { render, screen, waitFor } from 'utils/tests';
import userEvent from '@testing-library/user-event';
import { TextField } from '.';

describe('<TextField />', () => {
  it('should render correctly', () => {
    const Component = () => {
      const { control } = useForm<FieldValues>();
      return <TextField name="textfield" label="TextField" control={control} />;
    };

    render(<Component />);

    expect(screen.getByLabelText('TextField')).toBeInTheDocument();
  });

  it('should change the value when typing', async () => {
    const onChange = jest.fn();

    const Component = () => {
      const { control } = useForm<FieldValues>();
      return (
        <TextField
          name="textfield"
          label="TextField"
          control={control}
          onChange={onChange}
        />
      );
    };

    render(<Component />);

    const input = screen.getByLabelText('TextField');

    expect(input).toBeInTheDocument();
    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onChange).toHaveBeenCalledTimes(text.length);
    });
  });
});
