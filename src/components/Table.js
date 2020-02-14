import React from 'react'

export default function Table({ data }) {
  const TableHeadings = (
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

  return (
    <table class="table">
      <thead>{TableHeadings}</thead>
      <tfoot>{TableHeadings}</tfoot>
      <tbody>
        {/* <tr class="is-selected"> */}
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
    </table>
  )
}
