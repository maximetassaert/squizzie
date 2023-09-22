"use client"
import { Button } from "@/components/ui/button"
import { Nav } from '@/components/main-nav'
import Link from 'next/link';
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Home() {
  return (
    <body>
    <header className='p-4 flex justify-between border-solid border-2 border-slate-200/10 rounded-lg'>
    <h1 className='font-bold text-3xl text-slate-800'><Link href="./">Squizzie</Link></h1>
      <Nav/>
      </header>
      <Card>
        <CardContent>
          <div  className=" mt-5 flex items-center">
          <span>zfvzbfvkjbzkjvbjkzrbvkjbzkjv</span>
          </div>
          <RadioGroup className="flex justify-end">
          <RadioGroupItem value="true" id="r1" />
        <Label htmlFor="r1">Vrai</Label>
        <RadioGroupItem value="false" id="r1" />
        <Label htmlFor="r1">Faux</Label>
          </RadioGroup>
        </CardContent>
      </Card>
    </body>

  )
}