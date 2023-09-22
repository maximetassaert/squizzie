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


export default function Login() {


    const [registerData, setRegisterData] = useState({
      email: "",
      password: "",
    });

  
  
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

  //   const [alert, setAlert] = useState({
  //     status: '',
  //     message: ''
  // })

    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault()
      try {
        const result = 
        await fetch('/api/auth/login', {
          method: 'POST',
          body: JSON.stringify(registerData)
        })
        console.log(result)
        console.log({ status: 'success', message: 'Signup successfully' })
        setRegisterData({ email: '', password: '' })
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
        <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Se connecter</TabsTrigger>
        <TabsTrigger value="password">S'inscrire</TabsTrigger>
      </TabsList>
      <form action="">
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
              <Input  onChange={onChange}
            value={registerData.email}
            type="email"
            name="email"
            required/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Mot de passe</Label>
              <Input  onChange={onChange}
            value={registerData.password}
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
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>S'inscrire</CardTitle>
            <CardDescription>
              Merci de vous inscrire afin d'accéder aux services de Squizzie.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Adresse e-mail</Label>
              <Input id="current" placeholder='mon.compte@exemple.com' />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current">Nom d'utilisateur</Label>
              <Input id="current" placeholder='Squeezizi'/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Mot de passe</Label>
              <Input id="new" type="password" placeholder='8 caractères minimum'/>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Inscription</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
        </div>
      </body>
        
    )
  }
