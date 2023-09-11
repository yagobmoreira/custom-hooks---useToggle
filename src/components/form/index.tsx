import Swal from 'sweetalert2';
import useFormInput from '../../hooks/useFormInput';
import './form.css';

type FormProp = {
  toggle: () => void;
};

function Form({ toggle }: FormProp) {
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const email = useFormInput('');

  function resetForm() {
    firstName.onChange('');
    lastName.onChange('');
    email.onChange('');
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (firstName.value && lastName.value && email.value) {
      Swal.fire(
        'Formulário enviado',
        JSON.stringify({
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
        }),
        'success'
      );
      resetForm();
      toggle();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Você precisa preencher todos os campos.',
      });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          First name:
          <input
            value={firstName.value}
            onChange={({ target }) => firstName.onChange(target.value)}
          />
        </label>
        <label>
          Last name:
          <input
            value={lastName.value}
            onChange={({ target }) => lastName.onChange(target.value)}
          />
        </label>
        <label>
          E-mail:
          <input
            value={email.value}
            onChange={({ target }) => email.onChange(target.value)}
          />
        </label>
        <button>Submeter formulário</button>
      </form>
    </>
  );
}

export default Form;
