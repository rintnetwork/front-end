import React, { useState } from "react"
import { useIntl } from "gatsby-plugin-intl"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import ActionCard from "../components/ActionCard"
import ButtonLink from "../components/ButtonLink"
import Icon from "../components/Icon"
import CalloutBanner from "../components/CalloutBanner"
import CodeModal from "../components/CodeModal"
import Codeblock from "../components/Codeblock"
import LegacyPageHome from "../components/LegacyPageHome"
import Morpher from "../components/Morpher"
import PageMetadata from "../components/PageMetadata"
import StatsBoxGrid from "../components/StatsBoxGrid"
import Translation from "../components/Translation"
import TitleCardList from "../components/TitleCardList"
import {
  CardContainer,
  Content,
  GrayContainer,
  LeftColumn,
} from "../components/SharedStyledComponents"
import {
  getLangContentVersion,
  translateMessageId,
} from "../utils/translations"

const Hero = styled(Img)`
  width: 100%;
  min-height: 380px;
  max-height: 440px;
  background-size: cover;
  background: no-repeat 50px;
  margin-bottom: 2rem;
`

const StyledContent = styled(Content)`
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 1rem;
  }
`

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  text-align: center;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 32px;
  }
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin: 0 auto;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 0 2rem;
`

const ButtonRow = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: column;
  }
`

const StyledButtonLink = styled(ButtonLink)`
  margin-left: 0.5rem;
  margin-top: 0rem;
  display: flex;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 1rem;
    margin-left: 0rem;
  }
`

const CodeExampleContent = styled(Content)`
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    padding: 1rem;
  }
`

const CodeboxModal = styled(CodeModal)`
  .modal-component-container {
    padding: 0;
    left: 0;
    right: 0;
    bottom: 0;
    top: 50%;
  }
  .modal-component {
    max-width: 100%;
    max-height: 50%;
    padding: 0rem;
  }
  .modal-component-content {
    margin-top: 3rem;
    width: 100%;
    overflow: auto;
  }
`

const IntroRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  margin-top: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: column-reverse;
    margin: 0rem;
  }
`

const RowReverse = styled.div`
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const ImageContainer = styled.div`
  background: "#F1FFFD";
  display: flex;
  height: 100%;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    width: 75%;
  }
`

const Description = styled.p`
  color: ${(props) => props.theme.colors.text200};
  max-width: 55ch;
  text-align: center;
  align-self: center;
  font-size: 20px;
  margin-top: 1rem;
`

const StyledGrayContainer = styled(GrayContainer)`
  box-shadow: inset 0px 0px 0px
    ${(props) => props.theme.colors.tableItemBoxShadow};
  padding: 0rem;
  padding-bottom: 4rem;
  margin-top: 0rem;
`
const StyledCard = styled(ActionCard)`
  min-width: 480px;
  margin: 1rem;
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  box-shadow: ${(props) => props.theme.colors.cardBoxShadow};
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin: 0;
    min-width: min(100%, 240px);
  }
`
const Tout = styled(ActionCard)`
  min-width: 400px;
  margin: 1rem;
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  box-shadow: ${(props) => props.theme.colors.cardBoxShadow};
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin: 0;
    min-width: min(100%, 240px);
  }
`
const StyledCardContainer = styled(CardContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-template-columns: 1fr;
  }
`

const IntroImage = styled(Img)`
  width: 100%;
  background-size: cover;
  background: no-repeat 50px;
`

const FeatureImage = styled(Img)`
  width: 100%;
`

const Subtitle = styled.div`
  margin-bottom: 2rem;
  font-size: 20px;
  line-height: 140%;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 16px;
  }
`

const ethereumIntroContainer = styled.div`
  background: ${(props) => props.theme.colors.homeBoxTurquoise};
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding-left: 2rem;
  width: 100%;
  height: 720px;
  margin-top: -1px;
  border-top: 1px solid ${(props) => props.theme.colors.text};
  border-bottom: 1px solid ${(props) => props.theme.colors.text};
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column-reverse;
    height: 100%;
    padding-top: 2rem;
    padding-left: 0rem;
    padding-bottom: 2rem;
  }
`

const FinanceContainer = styled.div`
  background: ${(props) => props.theme.colors.homeBoxOrange};
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 720px;
  margin-top: -1px;
  border-top: 1px solid ${(props) => props.theme.colors.text};
  border-bottom: 1px solid ${(props) => props.theme.colors.text};
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column-reverse;
    height: 100%;
    height: 100%;
    padding-top: 2rem;
    padding-right: 0rem;
    padding-bottom: 2rem;
  }
`

const NftContainer = styled.div`
  background: ${(props) => props.theme.colors.homeBoxMint};
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 720px;
  margin-top: -1px;
  border-top: 1px solid ${(props) => props.theme.colors.text};
  border-bottom: 1px solid ${(props) => props.theme.colors.text};
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column-reverse;
    height: 100%;
    height: 100%;
    padding-top: 2rem;
    padding-right: 0rem;
    padding-bottom: 2rem;
  }
`

const InternetContainer = styled.div`
  background: ${(props) => props.theme.colors.homeBoxPink};
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding-left: 2rem;
  height: 720px;
  width: 100%;
  margin-top: -1px;
  margin-bottom: 0rem;
  border-top: 1px solid ${(props) => props.theme.colors.text};
  border-bottom: 1px solid ${(props) => props.theme.colors.text};
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column-reverse;
    height: 100%;
    padding-top: 2rem;
    padding-left: 0rem;
    padding-bottom: 2rem;
  }
`

const DeveloperContainer = styled.div`
  background: ${(props) => props.theme.colors.homeBoxPurple};
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 720px;
  width: 100%;
  margin-top: -1px;
  border-top: 1px solid ${(props) => props.theme.colors.text};
  border-bottom: 1px solid ${(props) => props.theme.colors.text};
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column-reverse;
    height: 100%;
  }
`

const FeatureContent = styled(LeftColumn)`
  padding: 6rem;
  height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 2rem;
  }
`

const LeftColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const IntroLeftColumn = styled(LeftColumn)`
  padding: 6rem;
  height: 100%;
  width: 100%;
  margin: 0;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 2rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 0rem;
  }
`

const StyledIcon = styled(Icon)`
  fill: ${(props) => props.theme.colors.text};
  margin-right: 0.5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
  }
  &:hover {
    fill: ${(props) => props.theme.colors.primary};
  }
  &:active {
    fill: ${(props) => props.theme.colors.primary};
  }
  &:focus {
    fill: ${(props) => props.theme.colors.primary};
  }
`

const H2 = styled.h2`
  margin: 0 0 1.5rem;
`

const StyledH2 = styled.h2`
  margin-bottom: 0.5rem;
  font-family: serif;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 24px;
  }
`

const StyledCardList = styled(TitleCardList)`
  margin-left: 4rem;
  max-width: 624px;
  border: 1px solid ${(props) => props.theme.colors.text};
  box-shadow: ${(props) => props.theme.colors.cardBoxShadow};
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-left: 0rem;
    max-width: 100%;
  }
`

const StyledCalloutBanner = styled(CalloutBanner)`
  margin: 8rem 0 4rem;
  padding: 2rem 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-bottom: 4rem;
    padding: 2rem;
  }
`

const HomePage = ({ data }) => {
  const intl = useIntl()
  const [isModalOpen, setModalOpen] = useState(false)
  const [activeCode, setActiveCode] = useState(0)

  // Language versions 2.4 & above support this homepage content
  // If current language is below, render LegacyPageHome
  if (getLangContentVersion(intl.locale) < 2.4) {
    return <LegacyPageHome />
  }

  const toggleCodeExample = (id) => {
    setActiveCode(id)
    setModalOpen(true)
  }

  const cards = [
    {
      image: data.robotfixed.childImageSharp.fixed,
      title: translateMessageId(
        "rint-page-index-get-started-wallet-title",
        intl
      ),
      description: translateMessageId(
        "rint-page-index-get-started-wallet-description",
        intl
      ),
      alt: translateMessageId(
        "rint-page-index-get-started-wallet-image-alt",
        intl
      ),
      to: "/wallets/find-wallet/",
    },

    {
      image: data.rntfixed.childImageSharp.fixed,
      title: translateMessageId("rint-page-index-get-started-rnt-title", intl),
      description: translateMessageId(
        "rint-page-index-get-started-rnt-description",
        intl
      ),
      alt: translateMessageId(
        "rint-page-index-get-started-rnt-image-alt",
        intl
      ),
      to: "/get-rnt/",
    },
    {
      image: data.dogefixed.childImageSharp.fixed,
      title: translateMessageId(
        "rint-page-index-get-started-dapps-title",
        intl
      ),
      description: translateMessageId(
        "rint-page-index-get-started-dapps-description",
        intl
      ),
      alt: translateMessageId(
        "rint-page-index-get-started-dapps-image-alt",
        intl
      ),
      to: "/dapps/",
    },
    {
      image: data.devfixed.childImageSharp.fixed,
      title: translateMessageId("rint-page-index-get-started-devs-title", intl),
      description: translateMessageId(
        "rint-page-index-get-started-devs-description",
        intl
      ),
      alt: translateMessageId(
        "rint-page-index-get-started-devs-image-alt",
        intl
      ),
      to: "/developers/",
    },
  ]

  const touts = [
    {
      image: data.merge.childImageSharp.fixed,
      alt: translateMessageId("rint-page-index-tout-rnt-image-alt", intl),
      title: translateMessageId("rint-page-index-tout-rnt-title", intl),
      description: translateMessageId(
        "rint-page-index-tout-rnt-description",
        intl
      ),
      to: "/rnt/",
    },
    {
      image: data.infrastructurefixed.childImageSharp.fixed,
      alt: translateMessageId(
        "rint-page-index-tout-enterprise-image-alt",
        intl
      ),
      title: translateMessageId("rint-page-index-tout-enterprise-title", intl),
      description: translateMessageId(
        "rint-page-index-tout-enterprise-description",
        intl
      ),
      to: "/enterprise/",
    },
    {
      image: data.enterprise.childImageSharp.fixed,
      alt: translateMessageId("rint-page-index-tout-community-image-alt", intl),
      title: translateMessageId("rint-page-index-tout-community-title", intl),
      description: translateMessageId(
        "rint-page-index-tout-community-description",
        intl
      ),
      to: "/community/",
    },
  ]

  // TODO import code content from source file for easier maintenance
  // so we don't have to set here as plain text, e.g.
  // import { SimpleToken } from "../data/SimpleToken.sol"
  const codeExamples = [
    {
      title: translateMessageId(
        "rint-page-index-developers-code-example-title-0",
        intl
      ),
      description: translateMessageId(
        "rint-page-index-developers-code-example-description-0",
        intl
      ),
      codeLanguage: "language-solidity",
      code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

// This is a smart contract - a program that can be deployed to the ethereum blockchain.
contract SimpleWallet {
    // An 'address' is comparable to an email address - it's used to identify an account on ethereum.
    address payable private owner;

    // Events allow for logging of activity on the blockchain.
    // Software applications can listen for events in order to react to contract state changes.
    event LogDeposit(uint amount, address indexed sender);
    event LogWithdrawal(uint amount, address indexed recipient);

  // When this contract is deployed, set the deploying address as the owner of the contract.
    constructor() {
        owner = payable(msg.sender);
    }

    // Send rnt from the function caller to the SimpleWallet contract
    function deposit() public payable {
        require(msg.value > 0, "Must send rnt.");
        emit LogDeposit(msg.value, msg.sender);
    }

    // Send rnt from the SimpleWallet contract to a chosen recipient
    function withdraw(uint amount, address payable recipient) public {
        require(msg.sender == owner, "Only the owner of this wallet can withdraw.");
        require(address(this).balance >= amount, "Not enough funds.");
        emit LogWithdrawal(amount, recipient);
        recipient.transfer(amount);
    }
}
      `,
    },
    {
      title: translateMessageId(
        "rint-page-index-developers-code-example-title-1",
        intl
      ),
      description: translateMessageId(
        "rint-page-index-developers-code-example-description-1",
        intl
      ),
      codeLanguage: "language-solidity",
      code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

// This is a smart contract - a program that can be deployed to the ethereum blockchain.
contract SimpleToken {
    // An address is comparable to an email address - it's used to identify an account on ethereum.
    address public owner;
    uint256 public constant token_supply = 1000000000000;

    // A mapping is essentially a hash table data structure.
    // This mapping assigns an unsigned integer (the token balance) to an address (the token holder).
    mapping (address => uint) public balances;


  // When 'SimpleToken' contract is deployed:
  // 1. set the deploying address as the owner of the contract
  // 2. set the token balance of the owner to the total token supply
    constructor() {
        owner = msg.sender;
        balances[owner] = token_supply;
    }

    // Sends an amount of tokens from any caller to any address.
    function transfer(address receiver, uint amount) public {
        // The sender must have enough tokens to send
        require(amount <= balances[msg.sender], "Insufficient balance.");

        // Adjusts token balances of the two addresses
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
    }
}
      `,
    },
    {
      title: translateMessageId(
        "rint-page-index-developers-code-example-title-2",
        intl
      ),
      description: translateMessageId(
        "rint-page-index-developers-code-example-description-2",
        intl
      ),
      codeLanguage: "language-javascript",
      code: `const rnters = require("rnters");

// Create a wallet instance from a mnemonic...
const mnemonic =
  "announce room limb pattern dry unit scale effort smooth jazz weasel alcohol";
const walletMnemonic = rnters.Wallet.fromMnemonic(mnemonic);

// ...or from a private key
const walletPrivateKey = new rnters.Wallet(walletMnemonic.privateKey);

// ...or create a wallet from a random private key
const randomWallet = rnters.Wallet.createRandom();

walletMnemonic.address;
// '0x71CB05EE1b1F506fF321Da3dac38f25c0c9ce6E1'

// The internal cryptographic components
walletMnemonic.privateKey;
// '0x1da6847600b0ee25e9ad9a52abbd786dd2502fa4005dd5af9310b7cc7a3b25db'
walletMnemonic.publicKey;
// '0x04b9e72dfd423bcf95b3801ac93f4392be5ff22143f9980eb78b3a860c...d64'

const tx = {
  to: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
  value: rnters.utils.parsernter("1.0"),
};

// Sign a transaction
walletMnemonic.signTransaction(tx);
// { Promise: '0xf865808080948ba1f109551bd432803012645ac136ddd6...dfc' }

// Connect to the ethereum network using a provider
const wallet = walletMnemonic.connect(provider);

// Query the network
wallet.getBalance();
// { Promise: { BigNumber: "42" } }
wallet.getTransactionCount();
// { Promise: 0 }

// Send rnter
wallet.sendTransaction(tx);

// Content adapted from rnters documentation by Richard Moore
// https://docs.rnters.io/v5/api/signer/#Wallet
// https://github.com/rnters-io/rnters.js/blob/master/docs/v5/api/signer/README.md#mrntods
// Content is licensed under the Creative Commons License:
// https://choosealicense.com/licenses/cc-by-4.0/      
      `,
    },
    {
      title: translateMessageId(
        "rint-page-index-developers-code-example-title-3",
        intl
      ),
      description: translateMessageId(
        "rint-page-index-developers-code-example-description-3",
        intl
      ),
      codeLanguage: "language-solidity",
      code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

// This is a smart contract - a program that can be deployed to the ethereum blockchain.
contract SimpleDomainRegistry {

    address public owner;
    // Hypothetical cost to register a domain name
    uint constant public DOMAIN_NAME_COST = 1 rnter;

    // A mapping is essentially a hash table data structure.
    // This mapping assigns an address (the domain holder) to a string (the domain name).
    mapping (string => address) public domainNames;


  // When 'SimpleDomainRegistry' contract is deployed,
  // set the deploying address as the owner of the contract.
    constructor() {
        owner = msg.sender;
    }

    // Registers a domain name (if not already registerd)
    function register(string memory domainName) public payable {
        require(msg.value >= DOMAIN_NAME_COST, "Insufficient amount.");
        require(domainNames[domainName] == address(0), "Domain name already registered.");
        domainNames[domainName] = msg.sender;
    }

    // Transfers a domain name to another address
    function transfer(address receiver, string memory domainName) public {
        require(domainNames[domainName] == msg.sender, "Only the domain name owner can transfer.");
        domainNames[domainName] = receiver;
    }

    // Withdraw funds from contract
    function withdraw() public {
        require(msg.sender == owner, "Only the contract owner can withdraw.");
        payable(msg.sender).transfer(address(this).balance);
    }
}
      `,
    },
  ]

  return (
    <Page>
      <PageMetadata
        title={translateMessageId("rint-page-index-meta-title", intl)}
        description={translateMessageId(
          "rint-page-index-meta-description",
          intl
        )}
      />
      <Hero
        fluid={data.hero.childImageSharp.fluid}
        alt={translateMessageId("rint-page-index-hero-image-alt", intl)}
        loading="eager"
      />
      <Morpher />
      <Header>
        <H1>
          <Translation id="rint-page-index-title" />
        </H1>
        <Description>
          <Translation id="rint-page-index-description" />
        </Description>
        <ButtonLink isSecondary to="/what-is-ethereum/">
          <Translation id="rint-page-index-title-button" />
        </ButtonLink>
      </Header>
      <StyledGrayContainer>
        <StyledContent>
          <IntroRow>
            <IntroLeftColumn>
              <H2>
                <Translation id="rint-page-index-get-started" />
              </H2>
              <Subtitle>
                <Translation id="rint-page-index-get-started-description" />
              </Subtitle>
            </IntroLeftColumn>
            <ImageContainer>
              <IntroImage
                fluid={data.hackathon.childImageSharp.fluid}
                alt={translateMessageId(
                  "rint-page-index-get-started-image-alt",
                  intl
                )}
              />
            </ImageContainer>
          </IntroRow>
          <StyledCardContainer>
            {cards.map((card, idx) => (
              <StyledCard
                key={idx}
                title={card.title}
                description={card.description}
                to={card.to}
                image={card.image}
                alt={card.alt}
              />
            ))}
          </StyledCardContainer>
        </StyledContent>
      </StyledGrayContainer>
      <ethereumIntroContainer>
        <RowReverse>
          <FeatureContent>
            <StyledH2>
              <Translation id="rint-page-index-what-is-rint" />
            </StyledH2>
            <Subtitle>
              <Translation id="rint-page-index-what-is-rint-description" />
            </Subtitle>
            <ButtonRow>
              <ButtonLink to="/what-is-ethereum/">
                <Translation id="rint-page-index-what-is-rint-button" />
              </ButtonLink>
              <StyledButtonLink isSecondary to="/rnt/">
                <Translation id="rint-page-index-what-is-rint-secondary-button" />
              </StyledButtonLink>
            </ButtonRow>
          </FeatureContent>
          <ImageContainer>
            <FeatureImage
              fluid={data.ethereum.childImageSharp.fluid}
              alt={translateMessageId(
                "rint-page-index-what-is-rint-image-alt",
                intl
              )}
            />
          </ImageContainer>
        </RowReverse>
      </ethereumIntroContainer>
      <FinanceContainer>
        <Row>
          <FeatureContent>
            <LeftColumnContent>
              <StyledH2>
                <Translation id="rint-page-index-defi" />
              </StyledH2>
              <Subtitle>
                <Translation id="rint-page-index-defi-description" />
              </Subtitle>
              <div>
                <ButtonLink to="/defi/">
                  <Translation id="rint-page-index-defi-button" />
                </ButtonLink>
              </div>
            </LeftColumnContent>
          </FeatureContent>
          <ImageContainer>
            <FeatureImage
              fluid={data.impact.childImageSharp.fluid}
              alt={translateMessageId("rint-page-index-defi-image-alt", intl)}
            />
          </ImageContainer>
        </Row>
      </FinanceContainer>
      <NftContainer>
        <Row>
          <ImageContainer>
            <FeatureImage
              fluid={data.infrastructure.childImageSharp.fluid}
              alt={translateMessageId("rint-page-index-nft-alt", intl)}
            />
          </ImageContainer>
          <FeatureContent>
            <LeftColumnContent>
              <StyledH2>
                <Translation id="rint-page-index-nft" />
              </StyledH2>
              <Subtitle>
                <Translation id="rint-page-index-nft-description" />
              </Subtitle>
              <div>
                <ButtonLink to="/nft/">
                  <Translation id="rint-page-index-nft-button" />
                </ButtonLink>
              </div>
            </LeftColumnContent>
          </FeatureContent>
        </Row>
      </NftContainer>
      <InternetContainer>
        <Row>
          <FeatureContent>
            <LeftColumnContent>
              <StyledH2>
                <Translation id="rint-page-index-internet" />
              </StyledH2>
              <Subtitle>
                <Translation id="rint-page-index-internet-description" />
              </Subtitle>
              <ButtonRow>
                <ButtonLink to="/dapps/?category=technology">
                  <Translation id="rint-page-index-internet-button" />
                </ButtonLink>
                <StyledButtonLink isSecondary to="/wallets/">
                  <Translation id="rint-page-index-internet-secondary-button" />
                </StyledButtonLink>
              </ButtonRow>
            </LeftColumnContent>
          </FeatureContent>
          <ImageContainer>
            <FeatureImage
              fluid={data.future.childImageSharp.fluid}
              alt={translateMessageId(
                "rint-page-index-internet-image-alt",
                intl
              )}
            />
          </ImageContainer>
        </Row>
      </InternetContainer>
      <DeveloperContainer>
        <CodeExampleContent>
          <StyledCardList
            content={codeExamples}
            limit={5}
            clickHandler={toggleCodeExample}
            header="Code examples"
            icon="code"
            isCode
          />
        </CodeExampleContent>
        <FeatureContent>
          <LeftColumnContent>
            <StyledH2>
              <Translation id="rint-page-index-developers" />
            </StyledH2>
            <Subtitle>
              <Translation id="rint-page-index-developers-description" />
            </Subtitle>
            <ButtonRow>
              <ButtonLink to="/developers/">
                <Translation id="rint-page-index-developers-button" />
              </ButtonLink>
            </ButtonRow>
          </LeftColumnContent>
        </FeatureContent>
        <CodeboxModal
          isOpen={isModalOpen}
          setIsOpen={setModalOpen}
          title={codeExamples[activeCode].title}
        >
          <Codeblock
            codeLanguage={codeExamples[activeCode].codeLanguage}
            allowCollapse={false}
            fromHomepage
          >
            {codeExamples[activeCode].code}
          </Codeblock>
        </CodeboxModal>
      </DeveloperContainer>
      <StyledGrayContainer>
        <StyledContent>
          <h2>
            <Translation id="rint-page-index-network-stats-title" />
          </h2>
          <Subtitle>
            <Translation id="rint-page-index-network-stats-subtitle" />
          </Subtitle>
        </StyledContent>
        <StatsBoxGrid />
      </StyledGrayContainer>
      <StyledContent>
        <h2>
          <Translation id="rint-page-index-touts-header" />
        </h2>
      </StyledContent>
      <StyledContent>
        <StyledCardContainer>
          {touts.map((tout, idx) => {
            return (
              <Tout
                key={idx}
                title={tout.title}
                description={tout.description}
                to={tout.to}
                image={tout.image}
              />
            )
          })}
        </StyledCardContainer>
        <StyledCalloutBanner
          title={translateMessageId(
            "rint-page-index-contribution-banner-title",
            intl
          )}
          description={translateMessageId(
            "rint-page-index-contribution-banner-description",
            intl
          )}
          image={data.finance.childImageSharp.fluid}
          maxImageWidth={600}
          alt={translateMessageId(
            "rint-page-index-contribution-banner-image-alt",
            intl
          )}
        >
          <ButtonRow>
            <ButtonLink to="/en/contributing/">
              <Translation id="rint-page-index-contribution-banner-button" />
            </ButtonLink>
            <StyledButtonLink
              isSecondary
              to="https://github.com/rintnetwork/front-end"
            >
              <StyledIcon name="github" /> GitHub
            </StyledButtonLink>
          </ButtonRow>
        </StyledCalloutBanner>
      </StyledContent>
    </Page>
  )
}

export default HomePage

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "home/hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ethereum: file(relativePath: { eq: "what-is-rint-network.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    enterprise: file(relativePath: { eq: "the-rint-network-community.png" }) {
      childImageSharp {
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dogefixed: file(relativePath: { eq: "use-dapp.png" }) {
      childImageSharp {
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    robotfixed: file(relativePath: { eq: "pick-wallet.png" }) {
      childImageSharp {
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    rntfixed: file(relativePath: { eq: "get-rnt.png" }) {
      childImageSharp {
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    devfixed: file(relativePath: { eq: "start-building.png" }) {
      childImageSharp {
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    future: file(relativePath: { eq: "an-open-internet.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    impact: file(relativePath: { eq: "a-fairer-financial-system.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    finance: file(relativePath: { eq: "contribute-to-rint-network.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hackathon: file(relativePath: { eq: "get-started.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    infrastructure: file(relativePath: { eq: "the-internet-of-assets.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    infrastructurefixed: file(
      relativePath: { eq: "rint-network-for-enterprises.png" }
    ) {
      childImageSharp {
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    merge: file(
      relativePath: { eq: "upgrade-your-rint-network-knowledge.png" }
    ) {
      childImageSharp {
        fixed(width: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
