import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const AppointmentTypeRadio = () => {
  return (
    
    <div>
    {/* <Label htmlFor="type-radio">Type of Appointment<Label/> */}
    <Label >Type of Appointment</Label>
    <RadioGroup id='type-radio' defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Phone Call</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">In Person</Label>    
      </div>
    </RadioGroup>
    </div>
    
  );
};

export default AppointmentTypeRadio;
