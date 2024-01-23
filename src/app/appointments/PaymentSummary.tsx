import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Checkbox from "@mui/joy/Checkbox";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import { Button } from "@/components/ui/button";
import { formProps } from "./AppForm";
let isLoading = false;
export default function PaymentSummary({ setActiveStep }: formProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const handlePay = () => {
    setTimeout(() => {
      setActiveStep((prevStep) => prevStep + 1);
      setIsLoading(false);
    }, 5000);
    setIsLoading(true);
  };
  return (
      <div className="ml-3 pl-5 pt-4 flex flex-col">
        <h1 className="text-xl font-medium pb-3"> Order Summary </h1>
        <div className="h-64">
          <div className="flex h-2/3">
            <div className="w-3/4">
              <p>1. Consultation fees</p>
              <p>2. GST 18%</p>
            </div>
            <div className="w-1/4">
              <p>800</p>
              <p>100</p>
            </div>
          </div>
          <div className="flex  border-t-2 border-b-2 p-3 ">
            <p className="w-3/4 font-medium">Total:</p>
            <p className="w-1/4">900</p>
          </div>
        </div>
        <Button onClick={handlePay}>Pay 900</Button>
      </div>
  );
}
