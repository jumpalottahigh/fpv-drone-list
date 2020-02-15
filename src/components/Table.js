import React from 'react'
import { DebounceInput } from 'react-debounce-input'
import { sortBy } from 'lodash'

const TableHeadings = ({ onTableHeadingClick }) => (
  <tr>
    <th onClick={() => onTableHeadingClick('Make')}>Make</th>
    <th onClick={() => onTableHeadingClick('Model')}>Model</th>
    <th onClick={() => onTableHeadingClick('Class')}>Class</th>
    <th onClick={() => onTableHeadingClick('Prop_diameter')}>Prop diameter</th>
    <th onClick={() => onTableHeadingClick('Motor_size')}>Motor size</th>
    <th onClick={() => onTableHeadingClick('Motor_kv')}>Motor KV</th>
    <th onClick={() => onTableHeadingClick('Battery_Voltage')}>
      Battery voltage
    </th>
    <th onClick={() => onTableHeadingClick('Battery_mAh')}>Battery mAh</th>
    <th onClick={() => onTableHeadingClick('Dry_Weight__g_')}>Dry weight(g)</th>
    <th onClick={() => onTableHeadingClick('field10')}>Product page</th>
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

  console.log(data)

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

  const handleSort = (field = 'Model') => {
    let sortedData
    // Sort the already filtered search data
    if (isFiltered) {
      sortedData = sortBy(filteredData, [field, 'Make'])
    } else {
      // Or the full list
      sortedData = sortBy(data, [field, 'Make'])
    }

    setFilteredData(sortedData)
    setIsFiltered(true)
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
          <TableHeadings onTableHeadingClick={handleSort} />
        </thead>
        <tfoot>
          <TableHeadings onTableHeadingClick={handleSort} />
        </tfoot>
        <TableBody data={isFiltered ? filteredData : data} />
      </table>
    </>
  )
}
