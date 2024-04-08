import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
import { ReactComponent as Brex } from '../../assets/svg/logo.svg';
import { ReactComponent as ArrowUp } from '../../assets/svg/arrow_up.svg';

const Header = () => {
    return (
        <Flex w={'full'}>
            <Flex w={'full'} p={4} justify={'space-between'} gap={20} display={['none', 'none', 'flex', 'flex']} >
                <Flex gap={4} w={'full'} justify={'space-between'} align={'center'}>
                    <Brex />
                    <Flex align={'center'} gap={2}>
                        <Text>Solutions</Text>
                        <ArrowUp />
                    </Flex>
                    <Flex align={'center'} gap={2}>
                        <Text>Products</Text>
                        <ArrowUp />
                    </Flex>
                    <Text>Why Brex?</Text>
                    <Text>Empower</Text>
                    <Flex align={'center'} gap={2}>
                        <Text>Resources</Text>
                        <ArrowUp />
                    </Flex>
                </Flex>
                <Flex align={'center'} justify={'flex-end'} gap={10} w={'full'}>
                    <Text>Open an account</Text>
                    <Text>Sign in</Text>
                    <Button w={'148px'} h={'36px'} bg={'#F46A35'} borderRadius={'10px'} color={'white'}>Contact Sales</Button>
                </Flex>
            </Flex>
            <Flex w={'full'} display={['flex', 'flex', 'none', 'none']}>
                <Flex align={'center'} w={'full'} justify={'space-between'} p={4}>
                    <Brex />
                    <Flex direction={'row'} gap={4} align={'center'}>
                        <Text>Sign in</Text>
                        <Button color={'white'} bg={'#F46A35'} borderRadius={'10px'}>Contact Sales</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Header;
