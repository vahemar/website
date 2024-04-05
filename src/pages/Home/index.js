import { Flex } from '@chakra-ui/react';
import React from 'react';
import Navbar from './Navbar';
import Solutions from './Solutions';
import Budget from './Budget';
import Doordash from './Doordash';
import Brex from './Brex';

const Home = () => {
    return (
        <Flex direction={'column'} width={'full'}>
            <Navbar />
            <Solutions />
            <Budget />
            <Doordash />
            <Brex />
        </Flex>
    );
}

export default Home;
