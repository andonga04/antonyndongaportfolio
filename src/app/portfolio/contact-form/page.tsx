"use client";

import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import { H1, H4, Lead, P } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <label className="ml-2">{children}</label>;
};

export function ContactForm() {
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <H1 className="mb-4">Contact Us</H1>
        <Lead className="mx-auto w-full lg:w-5/12 !text-gray-500">
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </Lead>
      </div>
      <div>
        <Card className="container mx-auto border border-gray/50">
          <CardContent className="grid grid-cols-1 lg:grid-cols-7 md:gap-10 p-5">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900 ">
              <H4 className="mb-2 text-white">Contact Information</H4>
              <Lead className="mx-auto mb-8 text-base !text-gray-400">
                Fill up the form and our Team will get back to you within 24
                hours.
              </Lead>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <P className="mb-2 text-white">+254 758552783</P>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <P className="mb-2 text-white">drgnsmsh@mail.com</P>
              </div>
              <div className="flex mb-10 gap-5">
                <TicketIcon className="h-6 w-6 text-white" />
                <P className="mb-2 text-white">Open Support Ticket</P>
              </div>
              <div className="flex items-center gap-5">
                <Button>
                  <i className="fa-brands fa-facebook text-lg" />
                </Button>
                <Button>
                  <i className="fa-brands fa-instagram text-lg" />
                </Button>
                <Button>
                  <i className="fa-brands fa-github text-lg" />
                </Button>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form action="#" >
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Label htmlFor="first-name">FirstName
                  <Input
                    color="gray"
                    name="first-name"
                    placeholder="First Name" 
                    className="border-none"
                    
                    
                  />
                  </Label>
                  
                  {/* @ts-ignore */}
                  <Label htmlFor="last-name" >LastName
                  <Input
                    color="gray"
                    name="last-name"
                    placeholder="Last Name"
                    className="border-none" 
                  />
                  </Label>
                </div>

                {/* @ts-ignore */}
                <Label htmlFor="email">Email
                <Input
                  color="gray"
                  name="email"
                  placeholder="Email"
                  className="border-0 un"
                   />
                </Label>


                <P className="!text-gray-400 text-sm mb-4 ">
                  What are you interested on?
                </P>

                <RadioGroup defaultValue="development" className="mb-14">
                  <div className="grid gap-4 lg:grid-cols-3 lg:justify-start sm:grid-cols-1 sm:justify-center text-center">
                    <Label>
                      <RadioGroupItem
                        value="development"
                        id="radio-1"
                      />
                      <label htmlFor="radio-1">Development</label>
                    </Label>
                    <Label>
                      <RadioGroupItem
                        value="design"
                        id="radio-2"
                      />
                      <label htmlFor="radio-2">Design</label>
                    </Label>
                    <Label>
                      <RadioGroupItem
                        value="marketing"
                        id="radio-3"
                      />
                      <label htmlFor="radio-3">Marketing</label>
                    </Label>
                  </div>
                </RadioGroup>

                {/* @ts-ignore */}
                <Textarea color="gray" name="first-name" className="border-none"/>
                <div className="w-full flex justify-end mt-5">
                  <Button className="w-full md:w-fit bg-black text-white p-5" color="gray" >
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
