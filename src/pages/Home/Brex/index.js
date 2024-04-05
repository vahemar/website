import React from 'react';
import { Box, Flex, Text, Button, Image } from '@chakra-ui/react';
import { ReactComponent as ArrowRight } from '../../../assets/svg/arrow_right_orange.svg';
import { companies } from '../../../constants/constants';
import { ReactComponent as Forbes } from '../../../assets/svg/forbe.svg';
import { ReactComponent as ZDNet } from '../../../assets/svg/zdnet.svg';
import { ReactComponent as TheNewYorkTimes } from '../../../assets/svg/tnyt.svg';
import { ReactComponent as TechCrunch } from '../../../assets/svg/techCrunch.svg';
import brexsOpportunities from '../../../assets/png/brexs_opportunities.png'

const Brex = () => {
    return (
        <Flex w={'full'} gap={20} align={'center'} direction={'column'}>
            <Flex p={24} align={'center'} justify={'center'}>
                <Text lineHeight={'52px'} fontSize={'40px'} textAlign={'center'} fontWeight={500}>How our customers use Brex to power their companies.</Text>
            </Flex>
            <Flex gap={6} w={'full'} justify={'space-between'} >
                {
                    companies?.map(({ id, companyLogo, description, readCaseStudy }) => (
                        <Flex direction={'row'} w={'full'} justify={'center'} gap={6} key={id}>
                            <Flex w={'325px'} gap={4} direction={'column'} align={'flex-start'}>
                                <Box w={'full'}>{companyLogo}</Box>
                                <Text fontSize={'20px'} lineHeight={'28px'} fontWeight={500}>{description}</Text>
                                <Flex direction={'row'} align={'center'} gap={2}>
                                    <Text color={'#F46A35'}>{readCaseStudy} </Text>
                                    <ArrowRight />
                                </Flex>
                            </Flex>
                        </Flex>
                    ))
                }
            </Flex>
            <Flex direction={'row'} p={12}>
                <Flex justify={'center'} align={'center'} w={'275px'} h={'200px'} border={'1px'} borderColor={'#DEDEDE'}><TechCrunch /></Flex>
                <Flex justify={'center'} align={'center'} w={'275px'} h={'200px'} border={'1px'} borderColor={'#DEDEDE'}><TheNewYorkTimes /></Flex>
                <Flex justify={'center'} align={'center'} w={'275px'} h={'200px'} border={'1px'} borderColor={'#DEDEDE'}><ZDNet /></Flex>
                <Flex justify={'center'} align={'center'} w={'275px'} h={'200px'} border={'1px'} borderColor={'#DEDEDE'}><Forbes /></Flex>
            </Flex>
            <Flex align={'center'} w={'full'} gap={24} p={12} bg={'#F4F4F4'}>
                <Flex gap={6} direction={'column'} align={'flex-start'} >
                    <Text fontSize={'40px'} lineHeight={'52px'}>See what Brex can do for you.</Text>
                    <Text fontSize={'20px'}>Get in touch to learn how our spend solution can increase financial efficiency and speed for your company.</Text>
                    <Flex direction={'row'} gap={4}>
                        <Button w={'160px'} h={'48px'} bg={'#F46A35'} borderRadius={'10px'} color={'white'}>Contact Sales</Button>
                        <Button w={'160px'} h={'48px'} bg={'white'} borderRadius={'10px'} border={'1px'} borderColor={'#E8E8E8'}>Open an account</Button>
                    </Flex>
                </Flex>
                <Image src={brexsOpportunities} alt='brexs opportunities' />
            </Flex>
        </Flex>
    );
}

export default Brex;
