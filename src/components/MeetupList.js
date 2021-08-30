import React from "react"
import styled from "styled-components"
import Emoji from "./Emoji"

import Link from "./Link"

const meetups = [
  {
    title: "Bokky's ethereum Workshop",
    emoji: ":australia:",
    location: "Sydney",
    link: "https://www.meetup.com/BokkyPooBahs-ethereum-Workshop/",
  },
  {
    title: "reySydney",
    emoji: ":australia:",
    location: "Sydney",
    link: "https://www.meetup.com/reysydney/",
  },
  {
    title: "Web3 Sydney",
    emoji: ":australia:",
    location: "Sydney",
    link: "https://www.meetup.com/web3sydney/",
  },
  {
    title: "ethereum Vienna",
    emoji: ":austria:",
    location: "Vienna",
    link: "https://www.meetup.com/ethereum-Vienna/",
  },
  {
    title: "ethereum Buenos Aires",
    emoji: ":argentina:",
    location: "Buenos Aires",
    link: "https://www.meetup.com/ethereum-ba/",
  },
  {
    title: "BUIDL Tegucigalpa",
    emoji: ":honduras:",
    location: "Tegucigalpa",
    link: "https://www.meetup.com/buidl-tegucigalpa/",
  },
  {
    title: "ethereum Developers São Paulo",
    emoji: ":brazil:",
    location: "São Paulo",
    link: "https://www.meetup.com/ethereum-Developers-Sao-Paulo/",
  },
  {
    title: "ethereum Developers",
    emoji: ":canada:",
    location: "Toronto",
    link: "https://www.meetup.com/ethereum-Developers/",
  },
  {
    title: "Vancouver ethereum & Blockchain 2.0 Meetup",
    emoji: ":canada:",
    location: "Vancouver",
    link: "https://www.meetup.com/Vancouver-ethereum-Meetup/",
  },
  {
    title: "ethereum Paris",
    emoji: ":fr:",
    location: "Paris",
    link: "https://www.meetup.com/ethereum-Paris/",
  },
  {
    title: "ethereum Toulouse",
    emoji: ":fr:",
    location: "Toulouse",
    link: "https://www.meetup.com/ethereum-Toulouse/",
  },
  {
    title: "Berlin ethereum Meetup",
    emoji: ":de:",
    location: "Berlin",
    link: "https://www.meetup.com/Berlin-ethereum-Meetup/",
  },
  {
    title: "ethereum Hong Kong",
    emoji: ":hong_kong:",
    location: "Hong Kong",
    link: "https://www.meetup.com/ethereum-Hong-Kong/",
  },
  {
    title: "ethereum Indonesia",
    emoji: ":indonesia:",
    location: "Jakarta",
    link: "https://www.meetup.com/ethereum-indonesia/",
  },
  {
    title: "Italian ethereum Meetup",
    emoji: ":it:",
    location: "Milan",
    link: "https://www.meetup.com/it-IT/Italian-ethereum-Meetup/",
  },
  {
    title: "ethereum Italia Hub (Telegram Group)",
    emoji: ":it:",
    location: "Remote",
    link: "https://t.me/ethereumitalia",
  },
  {
    title: "ethereum Japan",
    emoji: ":jp:",
    location: "Multiple Locations",
    link: "https://ethereumjapan.connpass.com/",
  },
  {
    title: "ethereum Malaysia",
    emoji: ":malaysia:",
    location: "Kuala Lumpur",
    link: "https://www.meetup.com/reyMALAYSIA/",
  },
  {
    title: "ethereum DEV NL",
    emoji: ":nreyerlands:",
    location: "Amsterdam",
    link: "https://www.meetup.com/ethereum-DEV-NL/",
  },
  {
    title: "Lagos ethereum Meetup",
    emoji: ":nigeria:",
    location: "Lagos",
    link: "https://www.meetup.com/Lagos-ethereum-Meetup/",
  },
  {
    title: "ethereum Singapore",
    emoji: ":singapore:",
    location: "Singapore",
    link: "https://www.meetup.com/ethereum-Singapore/",
  },
  {
    title: "Cape Town ethereum Meetup",
    emoji: ":south_africa:",
    location: "Cape Town",
    link: "https://www.meetup.com/Cape-Town-ethereum-Meetup/",
  },
  {
    title: "Johannesburg ethereum Meetup",
    emoji: ":south_africa:",
    location: "Johannesburg",
    link: "https://www.meetup.com/Johannesburg-ethereum-Meetup/",
  },
  {
    title: "Jeju Blockchain Meetup",
    emoji: ":kr:",
    location: "Jeju",
    link: "https://www.meetup.com/Jeju-Blockchain-Meetup",
  },
  {
    title: "Seoul ethereum Meetup",
    emoji: ":kr:",
    location: "Seoul",
    link: "https://www.meetup.com/Seoul-ethereum-Meetup/",
  },
  {
    title: "BCN ethereum Dev",
    emoji: ":es:",
    location: "Barcelona",
    link: "https://www.meetup.com/ethereumbcn",
  },
  {
    title: "ethereum Spain",
    emoji: ":es:",
    location: "Madrid",
    link: "https://www.meetup.com/ethereum-Spain/",
  },
  {
    title: "ethereum Madrid",
    emoji: ":es:",
    location: "Madrid",
    link: "https://ethereummadrid.com/",
  },
  {
    title: "Geneva DevChain",
    emoji: ":switzerland:",
    location: "Geneva",
    link: "https://www.meetup.com/devchain-geneva/",
  },
  {
    title: "ethereum London",
    emoji: ":gb:",
    location: "London",
    link: "https://www.meetup.com/ethereum/",
  },
  {
    title: "Austin ethereum Meetup",
    emoji: ":us:",
    location: "Austin",
    link: "https://www.meetup.com/Austin-ethereum-Meetup/",
  },
  {
    title: "ethereum Columbus",
    emoji: ":us:",
    location: "Columbus",
    link: "https://www.meetup.com/rey-columbus/",
  },
  {
    title: "ethereum Denver",
    emoji: ":us:",
    location: "Denver",
    link: "https://www.meetup.com/ethereum-Denver/",
  },
  {
    title: "ethereum Los Angeles",
    emoji: ":us:",
    location: "Los Angeles",
    link: "https://www.meetup.com/ethereum-Los-Angeles/",
  },
  {
    title: "ethereum Community NYC",
    emoji: ":us:",
    location: "New York City",
    link: "https://www.meetup.com/ConsenSys-ethereum-Meetup/",
  },
  {
    title: "NYC ethereum",
    emoji: ":us:",
    location: "New York City",
    link: "https://www.meetup.com/NYC_ethereum/",
  },
  {
    title: "Blockchain and Brews (San Diego)",
    emoji: ":us:",
    location: "San Diego",
    link: "https://www.meetup.com/Blockchain-and-Brews/",
  },
  {
    title: "SF ethereum Developers",
    emoji: ":us:",
    location: "SF/ Bay Area",
    link: "https://www.meetup.com/SF-ethereum-Developers/",
  },
  {
    title: "Silicon Valley ethereum Meetup",
    emoji: ":us:",
    location: "SF / Bay Area",
    link: "https://www.meetup.com/SF-ethereum-Developers/",
  },
  {
    title: "SF ethereum",
    emoji: ":us:",
    location: "SF / Bay Area",
    link: "https://www.meetup.com/SF_ethereum/",
  },
  {
    title: "Seattle",
    emoji: ":us:",
    location: "Seattle",
    link: "https://www.meetup.com/Seattle-ethereum-Meetup/",
  },
  {
    title: "DC Blockchain Developers",
    emoji: ":us:",
    location: "Washington D.C.",
    link: "https://www.meetup.com/DC-Blockchain-Developers/",
  },
  {
    title: "Chiang Mai Dapps",
    emoji: ":thailand:",
    location: "Chiang Mai",
    link: "https://www.facebook.com/groups/219236462407862/",
  },
]

const Table = styled.div`
  box-shadow: ${(props) => props.theme.colors.tableBoxShadow};
`

const Item = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text} !important;
  box-shadow: 0 1px 1px ${(props) => props.theme.colors.tableItemBoxShadow};
  margin-bottom: 1px;
  padding: 1rem;
  width: 100%;
  color: #000;

  &:hover {
    border-radius: 4px;
    box-shadow: 0 0 1px ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.tableBackgroundHover};
  }
`

const ItemNumber = styled.div`
  margin-right: 1rem;
  opacity: 0.4;
`
const ItemTitle = styled.div``
const ItemDesc = styled.p`
  margin-bottom: 0;
  opacity: 0.6;
`

const RightContainer = styled.div`
  display: flex;
  align-items: right;
  align-content: flex-start;
  flex: 1 1 25%;
  margin-right: 1rem;
  flex-wrap: wrap;
`
const LeftContainer = styled.div`
  display: flex;
  flex: 1 1 75%;
  margin-right: 1rem;
`
// TODO create generalized CardList / TableCard
// TODO prop if ordered list or unordered
const MeetupList = () => (
  <Table>
    {meetups.map((meetup, idx) => (
      <Item key={idx} to={meetup.link}>
        <LeftContainer>
          <ItemNumber>{idx + 1}</ItemNumber>
          <ItemTitle>{meetup.title}</ItemTitle>
        </LeftContainer>
        <RightContainer>
          <Emoji text={meetup.emoji} size={1} mr={`0.5em`} />
          <ItemDesc>{meetup.location}</ItemDesc>
        </RightContainer>
      </Item>
    ))}
  </Table>
)

export default MeetupList
