import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactComponent as DoordashLogo } from "../../../assets/svg/doordash.svg";

// function PrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: 'gray' }}
//             onClick={onClick}
//         />
//     );
// }

// function NextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: 'gray' }}
//             onClick={onClick}
//         />
//     );
// }

const Doordash = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // nextArrow: <NextArrow />,
        // previousArrow: <PrevArrow />,
    };
    return (
        <div style={{ paddingTop: '100px', paddingBottom: '100px', paddingLeft: '50px', paddingRight: '50px', justifyContent: 'center' }} className="slider-container">
            <Slider {...settings}>
                <Box>
                    <Flex gap={6} direction={'column'} align={'center'}>
                        <DoordashLogo />
                        <Text fontSize={'18px'} fontWeight={500} lineHeight={'24px'}>"DoorDash went from a 100-person startup to over 9,000 employees. We needed a solution that was innovative in the T&E space."</Text>
                        <Text fontSize={'16px'} lineHeight={'20px'} fontWeight={500}>— Mike Kim, VP of Finance, DoorDash</Text>
                    </Flex>
                </Box>
                <Box>
                    <Flex gap={6} direction={'column'} align={'center'}>
                        <DoordashLogo />
                        <Text fontSize={'18px'} fontWeight={500} lineHeight={'24px'}>"DoorDash went from a 100-person startup to over 9,000 employees. We needed a solution that was innovative in the T&E space."</Text>
                        <Text fontSize={'16px'} lineHeight={'20px'} fontWeight={500}>— Mike Kim, VP of Finance, DoorDash</Text>
                    </Flex>
                </Box>
                <Box>
                    <Flex gap={6} direction={'column'} align={'center'}>
                        <DoordashLogo />
                        <Text fontSize={'18px'} fontWeight={500} lineHeight={'24px'}>"DoorDash went from a 100-person startup to over 9,000 employees. We needed a solution that was innovative in the T&E space."</Text>
                        <Text fontSize={'16px'} lineHeight={'20px'} fontWeight={500}>— Mike Kim, VP of Finance, DoorDash</Text>
                    </Flex>
                </Box>
            </Slider>
        </div>
    );
}

export default Doordash;


// function PrevArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //         <div
    //             className={className}
    //             style={{ ...style, display: "block", background: "green" }}
    //             onClick={onClick}
    //         />
    //     );
    // }