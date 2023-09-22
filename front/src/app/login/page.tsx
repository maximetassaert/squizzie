"use client"
import { Nav } from '@/components/main-nav'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from 'next/link';
import * as React from "react"
import { useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
export default function Login() {
    const router = useRouter()
    const [cookies, setCookie, removeCookie] = useCookies(['auth']);

    const [loginData, setLoginData] = useState({
      email: "",
      password: "",
    });
    const [registerData, setRegisterData] = useState({
      email: "",
      username: "",
      password: "",
    });

    const [currentTab, setCurrentTab] = useState("account");

  
    const onLoginChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const onRegisterChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

  //   const [alert, setAlert] = useState({
  //     status: '',
  //     message: ''
  // })

    const onSubmitLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault()
      try {
        const result: any = await axios.post('http://localhost:3001/api/auth/login', loginData)

        console.log({ status: 'success', message: 'Login successfully' })
        setLoginData({ email: '', password: '' })
        setCookie('auth', result.data.access_token)

        router.push("/")
      } catch (error : any) {
        console.log({ error })
        console.log({ status: 'error', message: 'Something went wrong'})
      }
    }

    const onSubmitRegister: React.FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault()
      try {
        const result: any = await axios.post('http://localhost:3001/api/user', registerData)

        console.log({ status: 'success', message: 'Signup successfully' })
        setCurrentTab('account')
        setRegisterData({ email: '', password: '', username: '' })
      } catch (error : any) {
        console.log({ error })
        console.log({ status: 'error', message: 'Something went wrong'})
      }
    }

    return (
      <body>
      <header className='p-4 flex justify-between border-solid border-2 border-slate-200/10 rounded-lg'>
      <h1 className='font-bold text-3xl text-slate-800'><Link href="./">Squizzie</Link></h1>
        <Nav/>
        </header>
        <div className='flex justify-center pt-28'>
        <Tabs defaultValue="account" className="w-[400px]" value={currentTab}
          onValueChange={(e) => setCurrentTab(e)}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Se connecter</TabsTrigger>
        <TabsTrigger value="register">S'inscrire</TabsTrigger>
      </TabsList>
      <form onSubmit={onSubmitLogin}>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Se connecter</CardTitle>
              <CardDescription>
                Merci de vous connecter pour accéder à vos squizz.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Adresse e-mail</Label>
                <Input  onChange={onLoginChange}
              value={loginData.email}
              type="email"
              name="email"
              required/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Mot de passe</Label>
                <Input  onChange={onLoginChange}
              value={loginData.password}
              type="password"
              name="password"
              required />
              </div>
            </CardContent>
            <CardFooter>
              <Button type='submit'>Connexion</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </form>
      <form onSubmit={onSubmitRegister}>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>S'inscrire</CardTitle>
              <CardDescription>
                Merci de vous inscrire afin d'accéder aux services de Squizzie.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="currentMail">Adresse e-mail</Label>
                <Input id="currentMail" placeholder='mon.compte@exemple.com' name="email" value={registerData.email} onChange={onRegisterChange} required/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="current">Nom d'utilisateur</Label>
                <Input id="current" placeholder='Squeezizi' name="username" value={registerData.username} onChange={onRegisterChange} required/>
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Mot de passe</Label>
                <Input id="new" type="password" placeholder='8 caractères minimum' name="password" value={registerData.password} onChange={onRegisterChange} required />
              </div>
            </CardContent>
            <CardFooter>
              <Button type='submit'>Inscription</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </form>
    </Tabs>
        </div>
      </body>
        
    )
  }
