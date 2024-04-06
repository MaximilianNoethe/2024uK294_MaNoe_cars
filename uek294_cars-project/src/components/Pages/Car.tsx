export interface CarProp {
  id: number
  name: String
  year: String
}

function Car(prop: CarProp) {
  return (
    <>
      <div>CarId: {prop.id}</div>
      <div>Name: {prop.name}</div>
      <div>Year: {prop.year}</div>

    </>
  );
}

export default Car