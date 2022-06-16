import { FieldValues, useForm } from 'react-hook-form';
import { render, screen } from 'utils/tests';
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
});
