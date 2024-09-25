"use client";
import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
// import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod"; 

const services = [
  {
    label: "Refining Value Proposition - $112",
    value: "Refining Value Proposition - $112",
  },
  {
    label: "Strategic Rebranding - $150",
    value: "Strategic Rebranding - $150",
  },
  {
    label: "Customer Base Development - $200",
    value: "Customer Base Development - $200",
  },
  {
    label: "Strengthening Unique Selling Points - $200",
    value: "Strengthening Unique Selling Points - $200",
  },
];

const companyState = [
  {
    label: "Established - $86",
    value: "Established - $86",
  },
  {
    label: "Intermediate - $142",
    value: "Intermediate - $142",
  },
  {
    label: "Startups - $160",
    value: "Startups - $160",
  },
];

const partnershipFocus = [
  {
    label: "Product Collaboration - $196",
    value: "Product Collaboration - $196",
  },
  {
    label: "Sponsorship - $350",
    value: "Sponsorship - $350",
  },
  {
    label: "Funding - $300",
    value: "Funding - $300",
  },
];

const timeFrame = [
  {
    label: "Short term (1-3 months) - $115",
    value: "Short term (1-3 months) - $115",
  },
  {
    label: "Intermediate (3-6 months) - $150",
    value: "Intermediate (3-6 months) - $150",
  },
  {
    label: "Long-term (6+ months) - $200",
    value: "Long-term (6+ months) - $200",
  },
];

const consultationLength = [
  {
    label: "1 Hour - $50",
    value: "1 Hour - $50",
  },
  {
    label: "2 Hours - $250",
    value: "2 Hours - $250",
  },
  {
    label: "Full Day (5 Hours) - $600",
    value: "Full Day (5 Hours) - $600",
  },
];

const followUpSupport = [
  {
    label: "Email Support (1 Month) - $40",
    value: "Email Support (1 Month) - $40",
  },
  {
    label: "Phone Support (1 Month) - $200",
    value: "Phone Support (1 Month) - $200",
  },
  {
    label: "Comprehensive Support Package (3 Months) - $500",
    value: " Comprehensive Support Package (3 Months) - $500",
  },
];

const formSchema = z.object({
  companyName: z
    .string({
      required_error: "Please enter the company name",
    })
    .min(1, { message: "Company name must be at least 1 character long" })
    .max(100, { message: "Company name must be 100 characters or less" }),

  email: z
    .string({
      required_error: "Please enter the email address",
    })
    .email({ message: "Invalid email address" }),

  logo: z.instanceof(File).optional(), // Optional file field

  industry: z
    .string({
      required_error: "Please select the industry",
    })
    .min(1, { message: "Industry is required" }),

  marketCap: z
    .string({
      required_error: "Please enter the market cap",
    })
    .min(1, { message: "Market Cap is required" }),

  consultationFocus: z
    .array(
      z.string({
        required_error: "Please select at least one consultation focus",
      })
    )
    .min(1, { message: "At least one consultation focus must be selected" })
    .optional(),

  companyStage: z
    .string({
      required_error: "Please select the company stage",
    })
    .min(1, { message: "Company stage is required" })
    .optional(),

  partnershipFocus: z
    .array(
      z.string({
        required_error: "Please select at least one partnership focus",
      })
    )
    .min(1, { message: "At least one partnership focus must be selected" })
    .optional(),

  timeFrameForResult: z
    .string({
      required_error: "Please select a timeframe for the result",
    })
    .min(1, { message: "Time frame is required" })
    .optional(),

  consultationLength: z
    .string({
      required_error: "Please select the consultation length",
    })
    .min(1, { message: "Consultation length is required" })
    .optional(),

  followUpSupport: z
    .array(
      z.string({
        required_error: "Please select at least one follow-up support option",
      })
    )
    .min(1, {
      message: "At least one follow-up support option must be selected",
    })
    .optional(),

  additionalInformation: z
    .string()
    .max(500, {
      message: "Additional information cannot exceed 500 characters",
    })
    .optional(),
});

interface FormDataObject {
  [key: string]: string | Blob; // or any other type you expect
}

const CustomizePlan = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const [loading,setLoading] = useState(false);
  const [amount, setAmount] = useState(0); 
  const onSubmit = async (data: FormDataObject) => {
    const toastId = toast.loading("Form Submitting...");
    setLoading(true);
    try {
      const formData = new FormData();

      for (const key in data) {
        formData.append(key, data[key]);
      }
      // await axios.post("/api/sendMail", formData);
      toast.dismiss(toastId);
      toast.info("Mail will be sent in future"); 

       window.location.reload();
    } catch {
      toast.dismiss(toastId);
      toast.error("Error while submitting form, Please try again later.");
    }
    finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    const consultationFocusPrice =
      form
        ?.getValues("consultationFocus")
        ?.reduce((sum: number, service: string) => {
          const amount = parseFloat(service.split("$")[1]);
          return sum + amount;
        }, 0) || 0;

    const companyStagePrice = parseFloat(
      form?.getValues("companyStage")?.split("$")[1] || 0
    );

    const partnershipFocusPrice =
      form
        ?.getValues("partnershipFocus")
        ?.reduce((sum: number, service: string) => {
          const amount = parseFloat(service.split("$")[1]);
          return sum + amount;
        }, 0) || 0;

    const timeFramePrice = parseFloat(
      form?.getValues("timeFrameForResult")?.split("$")[1] || 0
    );

    const consultationLengthPrice = parseFloat(
      form?.getValues("consultationLength")?.split("$")[1] || 0
    );

    const followUpSupportPrice =
      form
        ?.getValues("followUpSupport")
        ?.reduce((sum: number, service: string) => {
          const amount = parseFloat(service.split("$")[1]);
          return sum + amount;
        }, 0) || 0;

    const totalAmout =
      consultationFocusPrice +
      companyStagePrice +
      partnershipFocusPrice +
      timeFramePrice +
      consultationLengthPrice +
      followUpSupportPrice;

    setAmount(totalAmout);
    if (totalAmout > 0) {
      toast.info(`$ ${totalAmout}`, {
        description: "Total Amount",
      });
    }
  }, [
    form,
    form.watch("consultationFocus"),
    form.watch("companyStage"),
    form.watch("partnershipFocus"),
    form.watch("timeFrameForResult"),
    form.watch("consultationLength"),
    form.watch("followUpSupport"),
  ]);

  return (
    <Card className="w-11/12 mx-auto max-w-screen-xl my-6">
      <CardHeader className="flex md:flex-row items-center justify-between">
        <div>
          <CardTitle>Consultation Customization</CardTitle>
          <CardDescription>
            Select the options that best align with your business goals and
            partnership aspirations.
          </CardDescription>
        </div>
        <div className=" rounded-xl px-3 py-1 bg-green-400/70">
          Total Price - ${amount}
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Company Name<sup className="text-rose-500">*</sup>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Business Email<sup className="text-rose-500">*</sup>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="logo"
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel>Company Logo</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      {...rest}
                      onChange={(event) => {
                        const file =
                          event.target &&
                          event.target.files &&
                          event?.target?.files[0];
                        onChange(file);
                      }}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Industry<sup className="text-rose-500">*</sup>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="marketCap"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Market Cap<sup className="text-rose-500">*</sup></FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="consultationFocus"
              render={() => (
                <FormItem className="border p-3 rounded-lg">
                  <FormLabel className="text-base">
                    Desired Outcome / Consultation Focus
                    {/* <sup className="text-rose-500">*</sup> */}
                  </FormLabel>
                  {services.map((item) => (
                    <FormField
                      key={item.value}
                      control={form.control}
                      name="consultationFocus"
                      render={({ field }) => {
                        const fieldValue = field.value || [];
                        return (
                          <FormItem
                            key={item.value}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.value)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...fieldValue,
                                        item.value,
                                      ])
                                    : field.onChange(
                                        fieldValue?.filter(
                                          (value: string) =>
                                            value !== item.value
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyStage"
              render={({ field }) => (
                <FormItem className="border p-3 rounded-lg">
                  <FormLabel className="text-base">
                    {/* Company Stage<sup className="text-rose-500">*</sup> */}
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {companyState.map((item) => (
                        <FormItem
                          key={item.value}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="partnershipFocus"
              render={() => (
                <FormItem className="border p-3 rounded-lg">
                  <FormLabel className="text-base">
                    Partnership Focus
                    {/* <sup className="text-rose-500">*</sup> */}
                  </FormLabel>
                  {partnershipFocus.map((item) => (
                    <FormField
                      key={item.value}
                      control={form.control}
                      name="partnershipFocus"
                      render={({ field }) => {
                        const fieldValue = field.value || [];
                        return (
                          <FormItem
                            key={item.value}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.value)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...fieldValue,
                                        item.value,
                                      ])
                                    : field.onChange(
                                        fieldValue?.filter(
                                          (value: string) =>
                                            value !== item.value
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeFrameForResult"
              render={({ field }) => (
                <FormItem className="border p-3 rounded-lg">
                  <FormLabel className="text-base">
                    Timeframe for Result
                    {/* <sup className="text-rose-500">*</sup> */}
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {timeFrame.map((item) => (
                        <FormItem
                          key={item.value}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="consultationLength"
              render={({ field }) => (
                <FormItem className="border p-3 rounded-lg">
                  <FormLabel className="text-base">
                    Consultation Length
                    {/* <sup className="text-rose-500">*</sup> */}
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {consultationLength.map((item) => (
                        <FormItem
                          key={item.value}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="followUpSupport"
              render={() => (
                <FormItem className="border p-3 rounded-lg">
                  <FormLabel className="text-base">
                    Follow-Up Support
                    {/* <sup className="text-rose-500">*</sup> */}
                  </FormLabel>
                  {followUpSupport.map((item) => (
                    <FormField
                      key={item.value}
                      control={form.control}
                      name="followUpSupport"
                      render={({ field }) => {
                        const fieldValue = field.value || [];
                        return (
                          <FormItem
                            key={item.value}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.value)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...fieldValue,
                                        item.value,
                                      ])
                                    : field.onChange(
                                        fieldValue?.filter(
                                          (value: string) =>
                                            value !== item.value
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="additionalInformation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brief Message or Additional Information</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please specify any additional details or specific goals you have in mind"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="justify-center flex">
              <Button disabled={loading} type="submit" className="w-1/3">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CustomizePlan;
