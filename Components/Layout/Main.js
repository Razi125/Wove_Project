import React from 'react'
import AfterWove from '../AfterWove/AfterWove'
import BeforeWove from '../BeforeWove/BeforeWove'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Loop from '../Loop/Loop'
import MainContent from '../MainContent/MainContent'
import SourceTruth from '../SourceTruth/SourceTruth'
import Tabs from '../Tabs/Tabs'
import WorkFlow from '../WorkFlow/WorkFlow'

const Main = () => {
  return (
    < >
      <Header />
      <br />
      {/** Childe Component start */}
      <MainContent />
      <br />
      <Tabs />
      <br />
       <WorkFlow />
      <br />
      <BeforeWove />
       <br />
        <AfterWove />
      <br />
       <SourceTruth />
      <br />
      <Loop />
      <br />
      <Footer />
    </>
  )
}

export default Main
