import { Flex, Box, Text } from '@chakra-ui/react';
import React from 'react';
import { ReactComponent as FaceBook } from '../../assets/svg/fb.svg';
import { ReactComponent as YouTube } from '../../assets/svg/youtube.svg';
import { ReactComponent as Instgram } from '../../assets/svg/instagram.svg';
import { ReactComponent as LinkedIn } from '../../assets/svg/linkedin.svg';
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg';
import { ReactComponent as AppStore } from '../../assets/svg/appstore.svg';
import { ReactComponent as GooglePlay } from '../../assets/svg/googleplay.svg';
import { footer } from '../../constants/constants';

const Footer = () => {
    return (
        <Flex w={'full'}>
            <Flex w={'full'} display={['none', 'none', 'flex', 'flex']} direction={'column'} p={24} pl={12} pr={12} bg={'#171717'}>
                <Flex w={'full'} direction={'column'} gap={4} color={'white'}>
                    <Flex w={'full'} justify={'space-between'}>
                        {
                            footer?.map(({ id, channelName, firstPage, secondPage, thirdPage, fourthPage, fifthPage, sixthPage, seventhPage, eigthPage, ninethPage, tenthPage, eleventhPage, twelethPage }) => (
                                <Flex key={id} direction={'row'} justify={'space-between'}>
                                    <Flex color={'#BCBDBD'} direction={'column'} align={'flex-start'} gap={2}>
                                        <Box fontSize={'16px'} lineHeight={'24px'} color={'white'}>{channelName}</Box>
                                        <Box>{firstPage}</Box>
                                        <Box>{secondPage}</Box>
                                        <Box>{thirdPage}</Box>
                                        <Box>{fourthPage}</Box>
                                        <Box>{fifthPage}</Box>
                                        <Box>{sixthPage}</Box>
                                        <Box>{seventhPage}</Box>
                                        <Box>{eigthPage}</Box>
                                        <Box>{ninethPage}</Box>
                                        <Box>{tenthPage}</Box>
                                        <Box>{eleventhPage}</Box>
                                        <Box>{twelethPage}</Box>
                                    </Flex>
                                </Flex>
                            ))
                        }
                    </Flex>
                    <Flex pt={24} w={'full'} direction={'row'} >
                        <Flex w={'full'} justify={'space-evenly'} maxW={'15%'}>
                            <FaceBook />
                            <YouTube />
                            <LinkedIn />
                            <Twitter />
                            <Instgram />
                        </Flex>
                        <Flex ml={'192px'} gap={6}>
                            <AppStore />
                            <GooglePlay />
                        </Flex>
                    </Flex>
                    <Flex gap={2} color={'#BCBDBD'} pt={24} direction={'column'} w={'full'} align={'flex-start'}>
                        <Text>©2022 Brex Inc. (“Brex”) and the Brex logo are registered trademarks.</Text>
                        <Text>Brex Inc. provides the Brex Mastercard® Corporate Credit Card, issued by Emigrant Bank, Member FDIC or Fifth Third Bank, NA., Member FDIC. Use of Brex’s user data access application programming interfaces is subject to the</Text>
                        <Text>Brex Treasury LLC (“Brex Treasury”) is an affiliate of Brex and a member of FINRA and SIPC that provides Brex Cash, an account that allows customers to sweep uninvested cash balances into certain money market mutual funds or FDIC-insured bank accounts at Brex’s partner banks, such as JPMorgan Chase Bank, Member FDIC. A list of partner banks is available at</Text>
                        <Text>https://www.brex.com/legal</Text>
                        <Text>Investing in securities products involves risk and you could lose money. Brex Treasury is not a bank nor an investment adviser and your Brex Cash account is not an FDIC-insured bank account.</Text>
                        <Text>*Your account earns yield on an annual basis. The figure shown here is an estimate of the annualized yield based on the average performance of the past seven days.* Yield is variable and fluctuates. Carefully consider a fund's investment objectives, risks, charges and expenses, as described in the applicable mutual fund’s prospectus. Contact us for a copy of the fund prospectus. Past performance does not guarantee future results, which may vary.</Text>
                        <Text>SIPC currently protects the assets in each of your securities accounts at Brex Treasury up to $500,000 (including $250,000 for claims for cash). Please see</Text>
                        <Text>This is not an offer, solicitation of an offer, recommendation or advice to buy or sell any security, financial product, instrument or to open a brokerage account in any jurisdiction where Brex Treasury is not registered. Review the background of Brex Treasury or its investment professionals on</Text>
                        <Text>Deposit Sweep Program Disclosure Statement</Text>
                        <Text>Brex does not provide, nor does it guarantee, any third-party product, service, information, or recommendation and may pay third parties and/or be paid by them for customer referrals.</Text>
                        <Text color={'white'}>Services may be provided by Brex Payments LLC (NMLS #2035354).</Text>
                    </Flex>
                </Flex>
            </Flex>




            <Flex display={['flex', 'flex', 'none', 'none']} w={'full'} direction={'column'} p={24} pl={12} pr={12} bg={'#171717'}>
                <Flex w={'full'} direction={'column'} gap={4} color={'white'}>
                    <Flex w={'full'} justify={'space-between'}>
                        {
                            footer?.map(({ id, channelName, firstPage, secondPage, thirdPage, fourthPage, fifthPage, sixthPage, seventhPage, eigthPage, ninethPage, tenthPage, eleventhPage, twelethPage }) => (
                                <Flex key={id}  justify={'space-between'}>
                                    <Flex color={'#BCBDBD'} direction={'column'} align={'flex-start'} gap={2}>
                                        <Box fontSize={'16px'} lineHeight={'24px'} color={'white'}>{channelName}</Box>
                                        <Box>{firstPage}</Box>
                                        <Box>{secondPage}</Box>
                                        <Box>{thirdPage}</Box>
                                        <Box>{fourthPage}</Box>
                                        <Box>{fifthPage}</Box>
                                        <Box>{sixthPage}</Box>
                                        <Box>{seventhPage}</Box>
                                        <Box>{eigthPage}</Box>
                                        <Box>{ninethPage}</Box>
                                        <Box>{tenthPage}</Box>
                                        <Box>{eleventhPage}</Box>
                                        <Box>{twelethPage}</Box>
                                    </Flex>
                                </Flex>
                            ))
                        }
                    </Flex>
                    <Flex pt={12} w={'full'} direction={'row'} justify={'space-between'} >
                        <Flex w={'full'} gap={4} >
                            <FaceBook />
                            <YouTube />
                            <LinkedIn />
                            <Twitter />
                            <Instgram />
                        </Flex>
                        <Flex gap={6}>
                            <AppStore />
                            <GooglePlay />
                        </Flex>
                    </Flex>
                    <Flex gap={2} color={'#BCBDBD'} pt={24} direction={'column'} w={'full'} align={'flex-start'}>
                        <Text>©2022 Brex Inc. (“Brex”) and the Brex logo are registered trademarks.</Text>
                        <Text>Brex Inc. provides the Brex Mastercard® Corporate Credit Card, issued by Emigrant Bank, Member FDIC or Fifth Third Bank, NA., Member FDIC. Use of Brex’s user data access application programming interfaces is subject to the</Text>
                        <Text>Brex Treasury LLC (“Brex Treasury”) is an affiliate of Brex and a member of FINRA and SIPC that provides Brex Cash, an account that allows customers to sweep uninvested cash balances into certain money market mutual funds or FDIC-insured bank accounts at Brex’s partner banks, such as JPMorgan Chase Bank, Member FDIC. A list of partner banks is available at</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Footer;
