import React, { Component } from 'react';
import styled from 'styled-components'


const Wrapper = styled.div`
/* box-sizing: border-box;
margin: 0 auto; */
font-family: 'Roboto', sans-serif;
display: flex;
justify-content: center;
align-items: center;
background-color: #eee;
width: 100vw;
height: 100vh;
`

const Card = styled.div`
  width: 18%;
  height: auto;
  margin: 80px;
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Img = styled.img`
width: 100%;
height: 250px;

&.left{
  background-image: url("./img/1.jpg");
  background-size: cover;
}

&.right{
  background-image: url("./img/2.jpg");
  background-size: cover;
}
`

const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  `

const Title = styled.h3`
font-size: 1.2em;

&.title-left:after{
  content:'';
  display: table;
  border-bottom: 4px solid #ff779e;
  position: relative;
  left: 40%;
  width: 40px;
  padding-bottom: 20px;
}

&.title-right:after{
  content:'';
  display: table;
  border-bottom: 4px solid #00c7ff;
  position: relative;
  left: 40%;
  width: 40px;
  padding-bottom: 15px;
}
`

const Icon = styled.div`
  font-size: 35px;
  font-weight: 900;
  padding-bottom: 15px;

  &.male{
    color: #00c7ff;
  }

  &.female{
    color: #ff779e;
  }
`

const Description = styled.div`
  display: flex;
  justify-content: space-around;
  `
const P = styled.p`
  &.p-title{
    color: #ccc;
  }
`
const Button = styled.button`
  width: 100%;
  height: 70px;
  margin-top: 15px;
  border: none;
  font-size: 12px;
  font-weight: bold;
  background-color: #fff;
  color: #000;
  border-top: 1px solid #ccc;
  
  &.btn-female:hover{
    color: #fff;
    background-color: #ff779e;
    cursor: pointer;
    border: none;
  }

  &.btn-male:hover{
    color: #fff;
    background-color: #00c7ff;
    cursor: pointer;
    border: none;
  }
`

class App extends Component {

  render() {
    return (
      <Wrapper className="App">

        {/* Left Card */}
        <Card>
          
          <Img className="left" />

          <TitleSection>
            <Title  className="title-left">
              Misha
            </Title>
            <Icon className="female">
              ♀
            </Icon>
          </TitleSection>

          <Description>
            <div>
              <P className="p-title">ID</P>
              <P>21024</P>
            </div>

            <div>
              <P className="p-title">Age</P>
              <P>3 years</P>
            </div>

            <div>
              <P className="p-title">Registry</P>
              <P>AKC</P>
            </div>

          </Description>

          <Button className="btn-female">
            View more
          </Button>

        </Card>

        {/* Right Card */}
        <Card>
          <Img className="right" />
          <TitleSection>
            <Title  className="title-right">
              Figo
            </Title>
            <Icon className="male">
              ♂
            </Icon>
          </TitleSection>

          <Description>
            <div>
              <P className="p-title">ID</P>
              <P>30244</P>
            </div>

            <div>
              <P className="p-title">Age</P>
              <P>3 years</P>
            </div>

            <div>
              <P className="p-title">ID</P>
              <P>AKC</P>
            </div>

          </Description>
          <Button className="btn-male">
            View more
          </Button>

        </Card>
      </Wrapper>
    );
  }
}

export default App;
