"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DatePickerDemo } from "./DatePicker";
import TimeSlots from "./TimeSlots";
import AppointmentTypeRadio from "./AppointmentTypeRadio";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "@/components/ui/use-toast";
import { AppForm } from "./AppForm";
import { useState } from "react";
import LinearStepper from "./LinearStepper";

const FormSchema = z.object({
  appointmentDate: z.date({
    required_error: "date of appointment is required",
  }),
  timeSlot: z.string(),
});
enum Taber {
  NewAppointment = "book-appointment",
  MyAppointments = "my-appointments",
}

export function TabsDemo() {
  const [tab, setTab] = useState("book-appointment");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <Tabs
      value={tab}
      className="w-full md:max-w-screen-lg self-center"
      onValueChange={(value) => setTab(value)}
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="book-appointment">Book Appointment</TabsTrigger>
        <TabsTrigger value="my-appointments">My Appointments</TabsTrigger>
      </TabsList>
      <TabsContent value="book-appointment">
        <Card>
          <CardHeader>
            <CardTitle>Book Appointment</CardTitle>
            <CardDescription>
              Book a new appointment by filling in the below details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* <AppForm /> */}
            <LinearStepper/>
          </CardContent>
          {/* <CardFooter>
            <Button className="w-full">Proceed to Pay</Button>
          </CardFooter> */}
        </Card>
      </TabsContent>
      <TabsContent value="my-appointments">
        <Card>
          <CardHeader>
            <CardTitle>Appointments</CardTitle>
            {/* <CardDescription>
              All appointments booked
            </CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              No upcoming appointments. Please go to book appointments and get
              yourself checked.
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              onClick={(val) => {
                console.log("inside button clcikc", val);
                setTab("book-appointment");
              }}
            >
              Book Appointment
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
