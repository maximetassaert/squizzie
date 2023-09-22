"use client"
import { Button } from "@/components/ui/button"
import { Nav } from '@/components/main-nav'
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import * as React from "react"

export default function Home() {
  return (
    <body>
    <header className='p-4 flex justify-between border-solid border-2 border-slate-200/10 rounded-lg'>
    <h1 className='font-bold text-3xl text-slate-800'><Link href="./">Squizzie</Link></h1>
      <Nav/>
      </header>
      <Button className="mb-10 ml-4 mt-20">Créer un squizz</Button>
      <div className="pr-10 pl-10">
      <Table>
  <TableCaption>La liste des meilleurs squizz</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Créateur</TableHead>
      <TableHead>Note</TableHead>
      <TableHead>Nom du squizz</TableHead>
      <TableHead className="text-right">Nombre de participations</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  <Link href="/quizz">
      <TableCell className="font-medium">tutu</TableCell>
      </Link>
      <TableCell>5 sur 5</TableCell>
      <TableCell>Questions pour un champion</TableCell>
      <TableCell className="text-right">18</TableCell>

  </TableBody>
</Table>
      </div>
    </body>

  )
}
