import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link as GatsbyLink } from "gatsby"

import { Heading, Text, Link } from "@chakra-ui/react"

const ContactPage = () => (
  <Layout>
    <SEO title="About" />
    <Heading>About</Heading>
    <Text>
      This site was developed as part of an ICS4U0 project, so will likely not
      see that much maintenance.
    </Text>
    <Text>
      If you find value in this project,{" "}
      <Link as={GatsbyLink} to="/contact" color="blue.500">
        let us know on our contact page!
      </Link>
    </Text>
  </Layout>
)

export default ContactPage
