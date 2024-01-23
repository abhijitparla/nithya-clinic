import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export default async function ReactForm() {

  async function addName(formData: FormData) {
    'use server'
    console.log("inside add name")
    console.log(formData.get('firstName'))
    // try {
    //   const result =
    //     await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    //   return NextResponse.json({ result }, { status: 200 });
    // } catch (error) {
    //   return NextResponse.json({ error }, { status: 500 });
    // }
  }
   
  return (
    <div>
        <form action={addName} className='flex flex-col w-52'>
          <label htmlFor="" className='m-5'>Name</label>
          <input type="text" name='firstName' className='bg-slate-200 m-5'/>
          <button className='bg-blue-600 text-slate-50 m-5'>submit</button>
          {/* <Button backgroundColor={"red"} fontSize={34} padding={[3,4]} count={count} setCount={setCount}></Button> */}
        </form>
        
    </div>

  )
}