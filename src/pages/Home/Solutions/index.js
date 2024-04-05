import { Flex, Image, Text, Button } from '@chakra-ui/react';
import React from 'react';
import brexEnterprise from '../../../assets/png/background_image_brex.png'
import brexStartups from '../../../assets/png/background_image_brex_second.png'
import iphone from '../../../assets/png/iphone.png'
import cards from '../../../assets/png/brex_cards.png'

const Solutions = () => {
    return (
        <Flex pt={44} pl={2} pr={2} pb={24} w={'full'} direction={'column'}>
            <Flex pb={12} justify={'center'} direction={'column'} align={'center'} gap={4}>
                <Text fontSize={'36px'} fontWeight={500} lineHeight={'52px'}>Solutions that work for you.</Text>
                <Text fontSize={'19px'} lineHeight={'32px'}>Brex meets you where you are — and takes you where you want to go.</Text>
            </Flex>
            <Flex w={'full'} gap={4} justify={'space-evenly'} p={6}>
                <Flex>
                    <Image src={brexEnterprise} />
                    <Flex direction={'column'} pos={'absolute'} >
                        <Flex justify={'space-between'}>
                            <Flex gap={4} p={10} color={'white'} pos={'absolute'} direction={'column'} align={'center'}>
                                <Text fontSize={'32px'} textAlign={'center'}>Brex for enterprise.</Text>
                                <Text textAlign={'center'} fontSize={'16px'}>Easy-to-use corporate cards and spend management software in an integrated global solution.</Text>
                                <Button color={'white'} bg={'transparent'} w={'160px'} h={'48px'} border={'1px'} borderColor={'white'}>Learn more</Button>
                            </Flex>
                            <Image src={iphone} pos={'relative'} top={'240px'} />
                        </Flex>
                    </Flex>
                </Flex>
                <Flex>
                    <Image src={brexStartups} />
                    <Flex direction={'column'} pos={'absolute'} >
                        <Flex justify={'space-between'}>
                            <Flex gap={4} p={10} color={'black'} pos={'absolute'} direction={'column'} align={'center'}>
                                <Text fontSize={'32px'} textAlign={'center'} >Brex for startups.</Text>
                                <Text textAlign={'center'} fontSize={'16px'}>Fast access to global cards, business account (send ACH and wires), spend management, and bill pay.</Text>
                                <Button bg={'transparent'} w={'160px'} h={'48px'} border={'1px'} borderColor={'black'}>Learn more</Button>
                            </Flex>
                            <Image src={cards} pos={'relative'} top={'240px'} />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Solutions;
