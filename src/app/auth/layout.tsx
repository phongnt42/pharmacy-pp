'use client'
import { Box, Flex } from "@chakra-ui/react"
import { ChevronLeftIcon, CloseIcon } from '@chakra-ui/icons'
export default function Auth({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
           <Flex justify="space-between" align="center" paddingRight="5px" backgroundColor="#00B4D8">
              <ChevronLeftIcon color="white" boxSize={8} />
              <CloseIcon color="white" />
           </Flex>
        {children}
      </section>
    )
  }