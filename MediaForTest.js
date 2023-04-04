import React, { useState } from "react"

const ComponentName = props => {
  const [users, setUsers] = useState([
    {
      name: "Mario",
      surname: "Rossi",
      username: "mario.rossi",
      email: "mario.rossi@email.com",
      phone: "1234567890",
      address: "Via Roma 1",
      cap: "12345",
      city: "Roma",
      province: "RM",
      state: "Italia"
    },
    {
      name: "Luigi",
      surname: "Verdi",
      username: "luigi.verdi",
      email: "luigi.verdi@email.com",
      phone: "1234567890",
      address: "Via Roma 1",
      cap: "12345",
      city: "Roma",
      province: "RM",
      state: "Italia"
    },
    {
      name: "Giovanni",
      surname: "Bianchi",
      username: "giovanni.bianchi",
      email: "giovanni.bianchi@email.com",
      phone: "1234567890",
      address: "Via Roma 1",
      cap: "12345",
      city: "Roma",
      province: "RM",
      state: "Italia"
    }
  ])

  const handleSorting = e => {
    // Funzione di ordinamento
  }

  const handleFilter = e => {
    // Funzione di filtraggio
  }

  return (
    <>
      <div className="filters">
        <div className="filter">
          <label htmlFor="name">Città</label>
          <input type="checkbox" name="city" id="city" onClick={handleFilter} />
        </div>
        <div className="filter">
          <label htmlFor="name">Provincia</label>
          <input type="checkbox" name="province" id="province" onClick={handleFilter} />
        </div>
        <div className="filter">
          <label htmlFor="name">Stato</label>
          <input type="checkbox" name="state" id="state" onClick={handleFilter} />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th onClick={handleSorting}>Nome</th>
            <th onClick={handleSorting}>Cognome</th>
            <th onClick={handleSorting}>Username</th>
            <th onClick={handleSorting}>Email</th>
            <th onClick={handleSorting}>Telefono</th>
            <th onClick={handleSorting}>Indirizzo</th>
            <th onClick={handleSorting}>Cap</th>
            <th onClick={handleSorting}>Città</th>
            <th onClick={handleSorting}>Provincia</th>
            <th onClick={handleSorting}>Stato</th>
          </tr>
        </thead>

        <tbody>
          {Boolean(users.length) &&
            users.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.cap}</td>
                <td>{item.city}</td>
                <td>{item.province}</td>
                <td>{item.state}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default ComponentName
