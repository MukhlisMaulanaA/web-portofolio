"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";


export function Testimonial() {
  const [active, setActive] = React.useState(3);

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Who Am I?
          </Typography>
        </div>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
              >
                Hello there!
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-600">
              <span className="font-semibold text-gray-700">Mukhlis Maulana Al-Fakih</span> is my name. Graduated from Singaperbangsa University Karawang with Bachelor's degree in <span className="font-semibold text-gray-700">Electrical Engineering</span>. Have an interest in <span className="font-semibold text-gray-700">Website Development Programming and Artificial Intelligence.</span> Experienced in making Deep Learning systems detect objects in real-time. Experienced in creating a <span className="font-semibold text-gray-700">CMS (Content Management System) website </span> for an Electrical Engineering Student Association 2021 organization, acting as a <span className="font-semibold text-gray-700">full-stack developer.</span>
              </Typography>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={500}
                height={800}
                src={`/image/profile.jpg`}
                alt="profile"
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
