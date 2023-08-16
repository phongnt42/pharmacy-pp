'use client'
import React, { useState } from 'react'
import { Center, Image } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import {
    FormControl,
    FormLabel,
    Button,
    Input,
    Flex,
    Box,
    Text
} from '@chakra-ui/react'
import Link from 'next/link'

const Login = () => {
    const router = useRouter();
    function login(){
        router.push('/dashboard')
    }
    return (
        <Flex minHeight="calc(100vh - 38px)" direction="column" justifyContent="space-between" align="center">
            <Box>
                <Image src={'/../banner.png'} alt='phong' w='100%' />

                <Flex direction="column" gap="20px" px="15px">
                    <Flex direction="column" gap="10px">
                        <FormControl>
                            <FormLabel>Tài khoản</FormLabel>
                            <Input placeholder='Nhập số điện thoại' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Mật khẩu</FormLabel>
                            <Input type="password" placeholder='Nhập mật khẩu' />
                        </FormControl>
                    </Flex>
                    <Button w="100%" bg="#00B4D8" colorScheme='blue' variant='solid' onClick={login}>Đăng nhập</Button>
                    <Button w="100%" color="#00B4D8" colorScheme='blue' variant='outline'>Đăng nhập tài khoản cộng tác viên</Button>
                    <Center><Link href="#"><Box color="#00B4D8">Quên mật khẩu</Box></Link></Center>
                </Flex>
            </Box>
            <Box>
                <Text color="#67748E">Bạn chưa có tài khoản?<Text color="#00B4D8" as="span"> Đăng ký ngay</Text></Text>
            </Box>
        </Flex>
    )
}

export default Login