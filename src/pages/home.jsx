import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
  Progress,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  CardFooter
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon, GiftTopIcon, ChevronDownIcon, ArrowRightIcon, PlayCircleIcon, ArrowsPointingInIcon, GiftIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { Link } from "react-router-dom";

export function Home() {
  const data = [
    {
      imageLink:
        "https://media.gettyimages.com/id/1741063361/photo/israeli-airstrikes-continue-on-the-17th-day-in-gaza.jpg?s=2048x2048&w=gi&k=20&c=Pm03c1drZ_XTfcVSTZEqDmuV7qgCGUzm2LEwiQcp9FQ=",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae iusto odio",
      progress: "80",
      goal: "$622,688"
    },
    {
      imageLink:
        "https://media.gettyimages.com/id/1755788246/photo/topshot-palestinian-israel-conflict.jpg?s=2048x2048&w=gi&k=20&c=VvukeapZCt-uPacjEpvweXQ6FnVt7GSk89JPnlyVxeo=",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae iusto odio",
      progress: "60",
      goal: "$122,188"
    },
    {
      imageLink:
        "https://media.gettyimages.com/id/2155377790/photo/gaza-city-gaza-a-child-with-a-disability-due-to-israeli-attacks-is-seen-continuing-life-under.jpg?s=612x612&w=0&k=20&c=mt8DNNg9zASFudK3rJgFuge-5xvoNQGyMeCYf-xVspY=",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae iusto",
      progress: "10",
      goal: "$12,688"
    },
    {
      imageLink:
        "https://media.gettyimages.com/id/1229923407/photo/prosthetics-center-in-gaza-gives-hope-to-palestinians.jpg?s=2048x2048&w=gi&k=20&c=hMYaFVXpqURsyhldws0O6rWEUluof0MnRt-b0X9iV1Y=",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae iusto",
      progress: "60",
      goal: "$122,688"
    },
  ];
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/backimage.svg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-green-900/95 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Your story starts with us.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsam, perspiciatis modi delectus aliquid nemo natus, quibusdam eos repudiandae quam deserunt in dignissimos quam deserunt quam deserunt!
              </Typography>
              <Button className="bg-yellow-900 mt-10 md:min-w-[300px] min-w-fit">Start frandraiser</Button>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                How our xyz-brand works
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae iusto odio quidem optio accusamus inventore ratione error ex, magnam! Culpa, atque.
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolor temporibus illo harum non officiis facere commodi ducimus ex iure. Veniam illum vero repellendus voluptatum omnis quasi ipsum ipsam. Repudiandae.
              </Typography>
              <Button variant="filled" className="bg-yellow-900">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-6/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg w-full h-[300px]">
                <iframe
                  className="h-full w-full rounded-lg"
                  src="https://www.youtube.com/embed/z-5zuZTpAuE"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true">
                </iframe>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-20 pb-20">
        <div className="container mx-auto  h-fit">
          <Typography
            variant="h3"
            className="mb-6 font-bold"
            color="blue-gray"
          >
            Discover fundraisers inspired by what you care about
          </Typography>
          <div className="flex justify-between mb-4">
            <Menu>
              <MenuHandler>
                <Button className="bg-white border border-gray-600 text-gray-900 outline-none flex gap-2 h-fit"><span>Choose</span> <ChevronDownIcon class="h-4 w-3" /></Button>
              </MenuHandler>
              <MenuList>
                <MenuItem className="flex gap-2"><GiftTopIcon className="h-6 w-6" /><div className="flex flex-col gap-1"><p className="text-gray-900 font-medium">Close to goal</p><p className="text-sm">Fundraisers with 5% of their goal</p></div></MenuItem>
                <MenuItem className="flex gap-2"><PlayCircleIcon className="h-6 w-6" /><div className="flex flex-col gap-1"><p className="text-gray-900 font-medium">Just lounched</p><p className="text-sm">Fundraisers started with in last 2 days</p></div></MenuItem>
                <MenuItem className="flex gap-2"><ArrowsPointingInIcon className="h-6 w-6" /><div className="flex flex-col gap-1"><p className="text-gray-900 font-medium">Happening worldwide</p><p className="text-sm">Fundraisers with high donor activity areas</p></div></MenuItem>
                <MenuItem className="flex gap-2"><GiftIcon className="h-6 w-6" /><div className="flex flex-col gap-1"><p className="text-gray-900 font-medium">Charities</p><p className="text-sm">Fundraisers for pupular charities</p></div></MenuItem>
              </MenuList>
            </Menu>
            <Button className="bg-white border border-gray-600 text-gray-900 outline-none flex justify-center hover:bg-yellow-900 hover:text-white hover:border-none"><ArrowRightIcon class="h-4 w-6" /></Button>
          </div>
          <div className="flex gap-2 md:flex-row flex-col">
            <div className="h-full w-full">
              <img
                className="h-full w-full rounded-lg object-cover object-center"
                src={data[0].imageLink}
                alt=""
              />
              <Typography className="text-sm font-medium my-3">{data[0].details}</Typography>
              <Progress value={data[0].progress} className="my-2" color="green" />
              <Typography className="text-sm font-medium mb-2">{data[0].goal}</Typography>
            </div>
            <div className="grid grid-cols-2 gap-2  w-full">
              {data.map(({ imageLink, details, progress, goal }, index) => (
                <div key={index}>
                  <img
                    className="h-40 w-full rounded-lg object-cover object-center md:h-60"
                    src={imageLink}
                    alt=""
                  />
                  <Typography className="text-sm font-medium my-3">{details}</Typography>
                  <Progress value={progress} className="my-2" color="green" />
                  <Typography className="text-sm font-medium mb-2">{goal}</Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-white py-2 px-4">
        <div className="container mx-auto  h-fit">
          <Typography
            variant="h3"
            className="mb-6 font-bold"
            color="blue-gray"
          >
            Featured topics
          </Typography>
          <Card className="w-full grid md:grid-cols-2 grid-cols-1 gap-2">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-full shrink-0 rounded-r-none"
            >
              <img
                src="https://media.istockphoto.com/id/1486910056/photo/hand-giving-heart-love-help-support-kindness.jpg?s=612x612&w=0&k=20&c=FtczC8Gs90AqvENV_BuR-_WIOkc8P0sYOGMyWDWZAbI="
                alt="card-image"
                className="h-full w-4/4 object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="white" className="mb-4 capitalize px-2 py-1 rounded bg-green-900 w-fit text-sm">
                Community
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Title of our topic
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, accusamus consectetur magni architecto accusantium necessitatibus nostrum expedita et est similique laudantium dignissimos tempore, iste, dolorum molestiae. Maiores voluptatum at porro.
              </Typography>
              <Link to="#" className="inline-block">
                <Button variant="text" className="flex items-center gap-2 hover:text-white hover:bg-yellow-900">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </Link>
            </CardBody>
          </Card>
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12 gap-4">
            <Card className="mt-4 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://media.istockphoto.com/id/1087508538/photo/open-book-with-hand-drawn-landscape.jpg?s=612x612&w=0&k=20&c=GUP9eVonIgnhSeB_vcxL2LI694ML7dl6jrJXMlYHiyE="
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h6" color="white" className="mb-4 capitalize px-2 py-1 rounded bg-green-900 w-fit text-sm">
                Give back
              </Typography>
                <Typography variant="h5" color="blue-gray" className="">
                  Title of topic 
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
              <Link to="#" className="inline-block">
                <Button variant="text" className="flex items-center gap-2 hover:text-white hover:bg-yellow-900">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </Link>
              </CardFooter>
            </Card>
            <Card className="mt-4 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://media.istockphoto.com/id/1087508538/photo/open-book-with-hand-drawn-landscape.jpg?s=612x612&w=0&k=20&c=GUP9eVonIgnhSeB_vcxL2LI694ML7dl6jrJXMlYHiyE="
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h6" color="white" className="mb-4 capitalize px-2 py-1 rounded bg-green-900 w-fit text-sm">
                New
              </Typography>
                <Typography variant="h5" color="blue-gray" className="">
                  Title of topic 
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
              <Link to="#" className="inline-block">
                <Button variant="text" className="flex items-center gap-2 hover:text-white hover:bg-yellow-900">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </Link>
              </CardFooter>
            </Card>
            <Card className="mt-4 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://media.istockphoto.com/id/1087508538/photo/open-book-with-hand-drawn-landscape.jpg?s=612x612&w=0&k=20&c=GUP9eVonIgnhSeB_vcxL2LI694ML7dl6jrJXMlYHiyE="
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
              <Typography variant="h6" color="white" className="mb-4 capitalize px-2 py-1 rounded bg-green-900 w-fit text-sm">
                urgent cause
              </Typography>
                <Typography variant="h5" color="blue-gray" className="">
                  Title of topic 
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
              <Link to="#" className="inline-block">
                <Button variant="text" className="flex items-center gap-2 hover:text-white hover:bg-yellow-900">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </Link>
              </CardFooter>
            </Card>
          </div>
        </div>

      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
