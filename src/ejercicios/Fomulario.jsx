export default function Form() {
    let firstName = '';
    let lastName = '';
  
    function handleFirstNameChange(e) {
      firstName = e.target.value;
    }
  
    function handleLastNameChange(e) {
      lastName = e.target.value;
    }
  
    function handleReset() {
      firstName = '';
      lastName = '';
    }
  
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          placeholder="Nombre"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          placeholder="Apellido"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <h1>Hola, {firstName} {lastName}</h1>
        <button onClick={handleReset}>Reiniciar</button>
      </form>
    );
  }