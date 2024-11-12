import React from 'react'
import { useParams } from "react-router-dom"
import TwoColumnLayout from "../../components/shared/layout/TwoColumnLayout"
import Detail from "../../components/project/Detail"

const DetailPage = () => {
  const { id } = useParams();

  return (
    <TwoColumnLayout>
      <Detail />
    </TwoColumnLayout>
  )
}

export default DetailPage