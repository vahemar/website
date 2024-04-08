import { Flex, Image, Text, Button, Box } from '@chakra-ui/react';
import React from 'react';
import brexEnterprise from '../../../assets/png/background_image_brex.png'
import brexStartups from '../../../assets/png/background_image_brex_second.png'
import iphone from '../../../assets/png/iphone.png'
import cards from '../../../assets/png/brex_cards.png'

const Solutions = () => {
    return (
        <Flex w={'full'}>
            <Flex display={['none', 'none', 'flex', 'flex']} pt={44} pl={2} pr={2} pb={24} w={'full'} direction={'column'}>
                <Flex pb={12} justify={'center'} direction={'column'} align={'center'} gap={4}>
                    <Text fontSize={'36px'} fontWeight={500} lineHeight={'52px'}>Solutions that work for you.</Text>
                    <Text fontSize={'19px'} lineHeight={'32px'}>Brex meets you where you are — and takes you where you want to go.</Text>
                </Flex>
                <Flex w={'full'} justify={'center'}>
                    <Flex pos={'relative'}>
                        <Image src={brexEnterprise} />
                        <Flex justify={'space-between'} direction={'column'} pos={'absolute'}  >
                            <Flex gap={4} p={8} w={'full'} color={'white'} direction={'column'} align={'center'} justify={'space-between'}>
                                <Text fontSize={'32px'} textAlign={'center'} >Brex for enterprise.</Text>
                                <Text textAlign={'center'} fontSize={'16px'}>Easy-to-use corporate cards and spend management software in an integrated global solution.</Text>
                                <Button color={'white'} bg={'transparent'} w={'160px'} h={'48px'} border={'1px'} borderColor={'white'}>Learn more</Button>
                            </Flex>
                            <Image src={iphone} />
                        </Flex>
                    </Flex>
                    <Flex ml={'8px'} pos={'relative'}>
                        <Image src={brexStartups} />
                        <Flex justify={'space-between'} direction={'column'} pos={'absolute'}  >
                            <Flex gap={4} p={10} color={'black'} direction={'column'} align={'center'}>
                                <Text fontSize={'32px'} textAlign={'center'} >Brex for startups.</Text>
                                <Text textAlign={'center'} fontSize={'16px'}>Fast access to global cards, business account (send ACH and wires), spend management, and bill pay.</Text>
                                <Button bg={'transparent'} w={'160px'} h={'48px'} border={'1px'} borderColor={'black'}>Learn more</Button>
                            </Flex>
                            <Image src={cards} />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex mt={14} w={'full'} p={8} direction={'column'} align={'center'} display={['flex', 'flex', 'none', 'none']}>
                <Flex pb={12} direction={'column'} align={'center'} gap={4}>
                    <Text fontSize={'40px'} fontWeight={500} textAlign={'center'} lineHeight={'25px'}>Solutions that work for you.</Text>
                </Flex>
                <Flex w={'full'} direction={'column'} gap={4}>
                    <Flex w={'full'} pos={'relative'} >
                        <Image src={brexEnterprise} w={'full'} pos={'relative'} />
                        <Flex justify={'space-between'} direction={'column'} pos={'absolute'}  >
                            <Flex gap={4} p={8} w={'full'} color={'white'} direction={'column'} align={'center'} justify={'space-between'}>
                                <Text fontSize={'32px'} textAlign={'center'} >Brex for enterprise.</Text>
                                <Text textAlign={'center'} fontSize={'16px'}>Easy-to-use corporate cards and spend management software in an integrated global solution.</Text>
                                <Button color={'white'} bg={'transparent'} w={'160px'} h={'48px'} border={'1px'} borderColor={'white'}>Learn more</Button>
                            </Flex>
                            <Image src={iphone} />
                        </Flex>
                    </Flex>
                    <Flex ml={'8px'} pos={'relative'} w={'full'}>
                        <Image src={brexStartups} w={'full'} pos={'relative'} />
                        <Flex justify={'space-between'} direction={'column'} pos={'absolute'}>
                            <Flex gap={4} p={10} color={'black'} direction={'column'} align={'center'}>
                                <Text fontSize={'32px'} textAlign={'center'} >Brex for startups.</Text>
                                <Text textAlign={'center'} fontSize={'16px'}>Fast access to global cards, business account (send ACH and wires), spend management, and bill pay.</Text>
                                <Button bg={'transparent'} w={'160px'} h={'48px'} border={'1px'} borderColor={'black'}>Learn more</Button>
                            </Flex>
                            <Image src={cards} />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Solutions;
