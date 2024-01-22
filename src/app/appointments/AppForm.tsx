"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import {
  Form,
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
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import handleAppointmentSave from "../lib/actions";
export const FormSchema = z.object({
  appointmentDate: z.date({
    required_error: "Date of appointment is mandatory",
  }),
  timeSlot: z.string({
    required_error: "Time slot selection is mandatory",
  }),
  typeOfAppointment: z.string({
    required_error: 'Type of appointment is mandatory'
  })
});

var dateTopper = new Date(
  new Date().getFullYear(),
  new Date().getMonth() + 3,
  new Date().getDate()
);

export type formProps = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
}

export function AppForm({setActiveStep}: formProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
      console.log(values)
      // handleNext()
      setActiveStep((prevState) => prevState + 1)
  }

  return (
    <Form {...form}>
      <form className='mt-10 space-y-8' onSubmit={form.handleSubmit(onSubmit)} >
        <FormField
          control={form.control}
          name="appointmentDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of appointment</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date > new Date(dateTopper)
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="timeSlot"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time Slots: </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pick a suitable time slot" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="10-00-am">10:00 am</SelectItem>
                  <SelectItem value="10-30-am">10:30 am</SelectItem>
                  <SelectItem value="11-00-am">11:00 am</SelectItem>
                  <SelectItem value="11-30-am">11:30 am</SelectItem>
                  <SelectItem value="12-00-pm">12:00 pm</SelectItem>
                  <SelectItem value="12-30-pm">12:30 pm</SelectItem>
                  <SelectItem value="01-00-pm">01:00 pm</SelectItem>
                  <SelectItem value="01-30-pm">01:30 pm</SelectItem>
                  <SelectItem value="02-00-pm">02:00 pm</SelectItem>
                  <SelectItem value="02-30-pm">02:30 pm</SelectItem>
                  <SelectItem value="03-00-pm">03:00 pm</SelectItem>
                  <SelectItem value="03-30-pm">03:30 pm</SelectItem>
                  <SelectItem value="04-00-pm">04:00 pm</SelectItem>
                  <SelectItem value="04-30-pm">04:30 pm</SelectItem>
                  <SelectItem value="05-00-pm">05:00 pm</SelectItem>
                  <SelectItem value="05-30-pm">05:30 pm</SelectItem>
                  <SelectItem value="06-00-pm">06:00 pm</SelectItem>
                  <SelectItem value="06-30-pm">06:30 pm</SelectItem>
                  <SelectItem value="07-00-pm">07:00 pm</SelectItem>
                  <SelectItem value="07-30-pm">07:30 pm</SelectItem>
                  <SelectItem value="08-00-pm">08:00 pm</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="typeOfAppointment"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Type of appointment</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="in-person" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      In Person
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="online" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Online
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Proceed to Pay</Button>
      </form>
    </Form>
  );
}
