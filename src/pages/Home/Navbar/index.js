import { Flex, Text, Button, Image, Divider } from '@chakra-ui/react';
import React from 'react';
import navbarImage from '../../../assets/png/navbar_image.png'
import { ReactComponent as OrangeRightArrow } from '../../../assets/svg/arrow_right_orange.svg';
import { ReactComponent as Obminator } from '../../../assets/svg/ombinator.svg';
import { ReactComponent as Doordash } from '../../../assets/svg/doordash.svg';
import { ReactComponent as Airtable } from '../../../assets/svg/airtable.svg';
import { ReactComponent as Whatnot } from '../../../assets/svg/whatnot.svg';
import { ReactComponent as Classpass } from '../../../assets/svg/classpass.svg';
import { ReactComponent as Airbnb } from '../../../assets/svg/airbnb.svg';
import { ReactComponent as Scale } from '../../../assets/svg/scale.svg';
import { ReactComponent as Deel } from '../../../assets/svg/deel.svg';

const Navbar = () => {
    return (
        <Flex w={'full'} direction={'column'} gap={20}>
            <Flex w={'full'} direction={'row'} gap={20} justify={'space-between'}>
                <Flex w={'full'} pt={12} pl={8} direction={'column'}>
                    <Flex direction={'column'} gap={6} pb={20}>
                        <Text fontSize={'40px'} lineHeight={'52px'} fontWeight={400}>Corporate cards and spend management teams actually love.</Text>
                        <Flex direction={'row'} gap={2}>
                            <Button w={'160px'} h={'48px'} bg={'#F46A35'} borderRadius={'10px'} color={'white'}>Contact sales</Button>
                            <Button w={'160px'} h={'48px'} bg={'white'} borderRadius={'10px'} border={'1px'} borderColor={'#E8E8E8'}>Open an account</Button>
                        </Flex>
                    </Flex>
                    <Flex direction={'column'} gap={6}>
                        <Divider borderColor={'#E8E8E8'} />
                        <Flex direction={'column'} fontWeight={500} gap={2} align={'flex-start'}>
                            <Text fontSize={'16px'}>Brex for enterprise</Text>
                            <Text fontSize={'14px'}>Easy-to-use corporate cards and spend management software in an integrated global solution.</Text>
                            <Flex align={'center'} direction={'row'} gap={2}>
                                <Text color={'#F46A35'} fontSize={'16px'} lineHeight={'24px'}>Learn more </Text>
                                <OrangeRightArrow />
                            </Flex>
                        </Flex>
                        <Divider borderColor={'#E8E8E8'} />
                        <Flex direction={'column'} fontWeight={500} gap={2} align={'flex-start'}>
                            <Text fontSize={'16px'}>Brex for startups</Text>
                            <Text fontSize={'14px'}>Fast access to global cards, business account (send ACH and wires), spend management, and bill pay.</Text>
                            <Flex align={'center'} direction={'row'} gap={2}>
                                <Text color={'#F46A35'} fontSize={'16px'} lineHeight={'24px'}>Learn more </Text>
                                <OrangeRightArrow />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex w={'full'} justify={'flex-end'}>
                    <Image src={navbarImage} alt='navbar' />
                </Flex>
            </Flex>
            <Flex p={2} direction={'row'} justify={'space-between'} gap={2}>
                <Obminator />
                <Doordash />
                <Scale />
                <Airtable />
                <Whatnot />
                <Classpass />
                <Deel />
                <Airbnb />
            </Flex>
        </Flex>
    );
}

export default Navbar;
