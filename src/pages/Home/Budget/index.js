import { Flex, Text, Button, Image } from '@chakra-ui/react';
import React from 'react';
import budget from '../../../assets/png/create_a_budget.png'

const Budget = () => {
    return (
        <Flex w={'full'} p={12} direction={'column'}>
            <Flex direction={'column'} align={'flex-start'} gap={2}>
                <Text h={'52px'} pb={4} fontSize={'36px'} lineHeight={'52px'}>Flexible spend limits for any need.</Text>
                <Text>Enable spend for any purpose — from travel to stipends to procurements — at all levels of your company. All on one card. With controls built in. That's the magic of budgets.</Text>
                <Button textAlign={'center'} mb={8} bg={'white'} borderColor={'black'} w={'203px'} h={'48px'} border={'1px'}>See how budgets work</Button>
                <Flex w={'full'} justify={'center'} align={'center'}>
                    <Image src={budget} />
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Budget;
