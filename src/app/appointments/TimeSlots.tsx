import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TimeSlots = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Pick a Time Slot" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="system-10">10:00 am</SelectItem>
        <SelectItem value="system-10-30">10:30 am</SelectItem>
        <SelectItem value="system">11:00 am</SelectItem>
        <SelectItem value="system">11:30 am</SelectItem>
        <SelectItem value="system">12:00 pm</SelectItem>
        <SelectItem value="system">12:30 pm</SelectItem>
        <SelectItem value="system">01:00 pm</SelectItem>
        <SelectItem value="system">01:30 pm</SelectItem>
        <SelectItem value="system">02:00 pm</SelectItem>
        <SelectItem value="system">02:30 pm</SelectItem>
        <SelectItem value="system">03:00 pm</SelectItem>
        <SelectItem value="system">03:30 pm</SelectItem>
        <SelectItem value="system">04:00 pm</SelectItem>
        <SelectItem value="system">04:30 pm</SelectItem>
        <SelectItem value="system">05:00 pm</SelectItem>
        <SelectItem value="system">05:30 pm</SelectItem>
        <SelectItem value="system">06:00 pm</SelectItem>
        <SelectItem value="system">06:30 pm</SelectItem>
        <SelectItem value="system">07:00 pm</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default TimeSlots;
