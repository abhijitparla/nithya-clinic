import * as React from "react";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import Checkbox from "@mui/joy/Checkbox";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import { Button } from "@/components/ui/button";
import { formProps } from "./AppForm";
import { ClipLoader } from 'react-spinners'
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
    <div className="flex">
      <div className="w-1/2">
        <Card
          variant="outlined"
          sx={{
            maxHeight: "max-content",
            maxWidth: "100%",
            mx: "auto",
            // to make the demo resizable
            overflow: "auto",
            resize: "horizontal",
          }}
        >
          <Typography level="title-lg">Payment Details</Typography>
          <Divider inset="none" />
          <CardContent
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
              gap: 1.5,
            }}
          >
            <FormControl sx={{ gridColumn: "1/-1" }}>
              <FormLabel>Card number</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Expiry date</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>CVC/CVV</FormLabel>
              <Input />
            </FormControl>
            <FormControl sx={{ gridColumn: "1/-1" }}>
              <FormLabel>Card holder name</FormLabel>
              <Input placeholder="Enter cardholder's full name" />
            </FormControl>
            <Checkbox label="Save card" sx={{ gridColumn: "1/-1", my: 1 }} />
            <CardActions sx={{ gridColumn: "1/-1" }}>
              <Button className="w-full" onClick={handlePay}>
                Pay 900
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>
      <div className="ml-3 border-l-2 pl-5 pt-4 w-1/2">
        <h1 className="text-xl font-medium pb-3"> Order Summary </h1>
        <div className="h-full">
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
          <div className="flex h-1/5 border-t-2 border-b-2 pt-6 pl-2 ">
            <p className="w-3/4 font-medium">Total:</p>
            <p className="w-1/4">900</p>
          </div>
        </div>
      </div>
    </div>
  );
}
