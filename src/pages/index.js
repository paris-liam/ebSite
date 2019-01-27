import React from 'react'
import { Link } from 'gatsby'
import HeaderImage from '../components/image';
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import styled from 'styled-components';
import {grey} from '../styles';
const MainGrid = styled.div`
    display:grid;
    grid-template-columns: auto;
    grid-template-rows:auto;
`
const HeaderCover = styled.div`
    width:100%;
    overflow:hidden;
`
const HeaderBar = styled.div`
  background-color: ${grey};
  position:absolute;
  z-index:2;
  top:50%;
  width:100%;
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MainGrid>
                <HeaderCover>
                    <HeaderImage></HeaderImage>
                    <HeaderBar>Eibhleann Clyne</HeaderBar>
                </HeaderCover>
            </MainGrid>
  </Layout>
)

export default IndexPage
