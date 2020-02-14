import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { nodes: droneList } = data.droneData

  return (
    <div>
      <h1>FPV Drone List ({data.droneData.totalCount})</h1>
      <ul>
        {droneList.map(drone => (
          <li key={drone.id}>
            <span>{drone.Make}</span>
            <span>{drone.Model}</span>
            <span>{drone.Class}</span>
            <span>{drone.Prop_diameter}</span>
            <span>{drone.Motor_size}</span>
            <span>{drone.Motor_kv}</span>
            <span>{drone.Battery_voltage}</span>
            <span>{drone.Battery_mAh}</span>
            <span>{drone.Dry_Weight__g_}</span>
            <span>{drone.field10}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const droneData = graphql`
  query {
    droneData: allMotorAndPropDataCsv {
      totalCount
      nodes {
        id
        Make
        Model
        Class
        Prop_diameter
        Motor_size
        Motor_kv
        Battery_Voltage
        Battery_mAh
        Dry_Weight__g_
        field10
      }
    }
  }
`
