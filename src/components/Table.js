import React from 'react'
import { DebounceInput } from 'react-debounce-input'

const TableHeadings = () => (
  <tr>
    <th>Make</th>
    <th>Model</th>
    <th>Class</th>
    <th>Prop diameter</th>
    <th>Motor size</th>
    <th>Motor KV</th>
    <th>Battery voltage</th>
    <th>Battery mAh</th>
    <th>Dry weight(g)</th>
    <th>Product page</th>
  </tr>
)

const TableBody = ({ data }) => (
  <tbody>
    {data.map(drone => (
      <tr key={drone.id}>
        <td>{drone.Make}</td>
        <td>{drone.Model}</td>
        <td>{drone.Class}</td>
        <td>{drone.Prop_diameter}</td>
        <td>{drone.Motor_size}</td>
        <td>{drone.Motor_kv}</td>
        <td>{drone.Battery_voltage}</td>
        <td>{drone.Battery_mAh}</td>
        <td>{drone.Dry_Weight__g_}</td>
        <td>
          <a
            href={drone.field10}
            target="_blank"
            rel="noopener noreferrer"
            title={drone.field10}
          >
            Link
          </a>
        </td>
      </tr>
    ))}
  </tbody>
)

export default function Table({ data }) {
  const [isFiltered, setIsFiltered] = React.useState(false)
  const [filteredData, setFilteredData] = React.useState([])
  const [searchedValue, setSearchedValue] = React.useState('')

  const handleSearch = e => {
    const searchedValue = e?.target?.value

    if (!searchedValue) {
      setIsFiltered(false)
    }

    const filtered = data.filter(item => {
      let found = false

      Object.values(item).forEach(v => {
        if (
          v
            .toLowerCase()
            .trim()
            .includes(searchedValue.toLowerCase().trim())
        ) {
          found = true
          return
        }
      })

      if (found) {
        return item
      } else {
        return
      }
    })

    setFilteredData(filtered)
    setIsFiltered(true)
    setSearchedValue(searchedValue)
  }

  return (
    <>
      <div className="field">
        <div className="control">
          <DebounceInput
            minLength={0}
            debounceTimeout={100}
            className="input is-info"
            type="text"
            placeholder="Search"
            onKeyDown={e => {
              if (e.keyCode === 27) {
                setSearchedValue('')
                setIsFiltered(false)
              }
            }}
            onChange={handleSearch}
            value={searchedValue}
          />
        </div>
      </div>
      <table className="table">
        <thead>
          <TableHeadings />
        </thead>
        <tfoot>
          <TableHeadings />
        </tfoot>
        <TableBody data={isFiltered ? filteredData : data} />
      </table>
    </>
  )
}
