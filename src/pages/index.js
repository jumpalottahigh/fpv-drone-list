import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Table from '../components/Table'
import './styles.scss'

export default ({ data }) => {
  const { nodes: droneList } = data.droneData

  return (
    <Layout>
      <h1 className="is-size-1 has-text-centered">
        FPV Drone List ({data.droneData.totalCount})
      </h1>
      <Table data={droneList} />
    </Layout>
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
