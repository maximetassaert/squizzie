"use client"
import { Button } from "@/components/ui/button"
import { Nav } from '@/components/main-nav'
import Link from 'next/link';
import * as React from "react"

export default function Home() {
  return (
    <header className='p-4 flex justify-between border-solid border-2 border-slate-200/10 rounded-lg'>
    <h1 className='font-bold text-3xl text-slate-800'><Link href="./">Squizzie</Link></h1>
      <Nav/>
      </header>
  )
}
