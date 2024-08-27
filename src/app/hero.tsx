"use client";

import { IconButton, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative w-full">
      <div className="grid place-items-center min-h-[92vh] px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
          <Typography variant="h1" color="blue-gray">
            I'm <span className="type-skills"></span>
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl"
          >
            Welcome to my resume page. Below you will get to know more about me. If you are interested, please contact me, feel free.
          </Typography>
          <Typography className="mt-12 mb-4 text-blue-gray-900 font-medium uppercase">
            Connect me on:
          </Typography>
          <div className="gap-2 lg:flex">
            <a href="https://www.instagram.com/alfaqih.qih/" target="blank">
              <IconButton variant="text" color="gray">
                <i className="fa-brands fa-instagram text-lg" />
              </IconButton>
            </a>
            <a href="https://github.com/MukhlisMaulanaA" target="blank">
              <IconButton variant="text" color="gray">
                <i className="fa-brands fa-github text-lg" />
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/mukhlis-maulana-al-fakih-627104321/" target="blank">
              <IconButton variant="text" color="gray">
                <i className="fa-brands fa-linkedin text-lg" />
              </IconButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
