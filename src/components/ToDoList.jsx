function Item({name, isDone}) {
    if (isDone) {
      return <li>{name} ✔</li>
    }
    return <li>{name} </li>
  
  }
  
  export default function List() {
    return(
      <section>
        <h1>lista de taraes</h1>
        <ul>
          <Item
            name= "hecer tp de programacion"
            isDone={true}
          />
          <Item
          name="Prepar Final para mayo"
          isDone={true}
          />
           <Item
          name="Limpia"
          isDone={false}
          />
        </ul>
      </section>
    )}