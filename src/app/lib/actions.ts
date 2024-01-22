'use server'

import { z } from "zod"
import { FormSchema } from "../appointments/AppForm"

export default async function handleAppointmentSave(values: z.infer<typeof FormSchema>) {
    console.log(" inside submit appointment server function", values)
}

export async function createCeleb(data: FormData) {
}