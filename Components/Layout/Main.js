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
    <div className='container mx-auto w-full' >
      <Header />
      <br />
      {/** Childe Component start */}
      <MainContent />
      <br />
      {/** Childe Component end */}
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
    </div>
  )
}

export default Main
