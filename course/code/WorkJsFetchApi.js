// ps://my-json-server.typicode.com/

function getJsonServerPersonsNotAsync() {
  // Solicitação GET.
  fetch("https://my-json-server.typicode.com/weder96/demoJsonServer/person/1")
    // Tratamento do sucesso
    .then((response) => response.json()) // converter para json
    .then((json) => console.log(json)) //imprimir dados no console
    .catch((err) => console.log("Erro de solicitação", err)); // lidar com os erros por catch
}

function getPersonsNotAsync() {
  fetch(
    "https://raw.githubusercontent.com/weder96/demoJsonServer/main/dbAll.json",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((json) => {
      //console.log(JSON.stringify(json))
      return json;
    })
    .catch((err) => console.log("Erro de solicitação", err)); // lidar com os erros por catch
}

async function logPersons() {
  const response = await fetch(
    "https://raw.githubusercontent.com/weder96/demoJsonServer/main/dbAll.json",
    { method: "GET" }
  );
  let persons = await response.json();
  console.log("call");
  loadPerson(persons);
  return persons;
}

//logPersons();

function loadPerson(persons) {
  console.log("call 2");
  persons.persons.forEach((pers) => console.log(pers.id));
}
