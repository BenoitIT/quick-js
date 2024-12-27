import { Navbar } from "@/widgets/layout";
import { Typography, Card } from "@material-tailwind/react";
import routes from "@/routes";
const HowItWorks = () => {
    return (
        <>
            <div className="bg-green-900/90 w-full flex justify-center pt-2 fixed z-10">
                <Navbar routes={routes} /></div><main className=" pt-36 lg:pb-24 bg-white dark:bg-gray-900 antialiased">

                <div className="flex justify-between px-4 mx-auto max-w-screen-xl flex-col gap-2 ">
                    <div className="flex justify-center w-full">
                        <Typography
                            variant="h3"
                            className="mb-3 font-bold"
                            color="blue-gray"
                        >
                            How our xyz-brand works
                        </Typography>
                    </div>
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert flex flex-col gap-2">
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore accusantium id nesciunt veniam laudantium at. Ullam, tempora, qui magnam dolorem a ipsam ratione et non obcaecati nulla facilis id impedit..</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, obcaecati? Sequi beatae magni saepe laudantium exercitationem dolores perferendis animi esse? Voluptatem ipsa voluptates nulla laboriosam mollitia facere repellendus, maxime suscipit.</p>
                        <figure className="mt-2">
                            <Card className="shadow-lg border shadow-gray-500/10 rounded-lg w-full h-[300px]">
                                <iframe
                                    className="h-full w-full rounded-lg -z-1"
                                    src="https://www.youtube.com/embed/z-5zuZTpAuE"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen="true">
                                </iframe>
                            </Card>
                            <figcaption><span className="font-medium">Video:</span> how quick fund works</figcaption>
                        </figure>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque fugit nesciunt, quia deserunt beatae fugiat voluptate eum ad tempore est consectetur natus, quae quasi repudiandae sequi modi placeat omnis!</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A reiciendis exercitationem quos iusto, aliquid at in. Dicta debitis modi placeat. Ipsam ad, debitis quae fugiat voluptatum quibusdam repellendus non est?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis hic corrupti quis voluptatum animi deserunt, ex quia minima. Accusantium optio sapiente beatae veniam suscipit dolorum laudantium dolorem dicta eum recusandae?</p>
                        <p>You'll also receive a lot of useful application UI, marketing UI, and e-commerce pages that can help
                            you get started with your projects even faster. You can check out this .</p>
                        <h2>When does design come in handy?</h2>
                        <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping
                            will come in handy:</p>
                        <ol>
                            <li><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they
                                follow your intended user journey and buy something from the site you’ve designed? By running a
                                usability test, you’ll be able to see how users will interact with your design once it’s live;
                            </li>
                            <li><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying
                                properly? Pass your prototype to your data protection team and they can test it for real;</li>
                            <li><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by
                                providing your client with a hands-on experience;</li>
                            <li><strong>Communicating your vision</strong>. By using an interactive medium to preview and test
                                design elements, designers and developers can understand each other — and the project — better.
                            </li>
                        </ol>
                        <h3>Laying the groundwork for best design</h3>
                        <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
                            you can think things through before committing to an actual design project.</p>
                        <p>Let's start by including the CSS file inside the <code>head</code> tag of your HTML.</p>
                        <h3>Understanding typography</h3>

                    </article>
                </div>
            </main></>

    )
}
export default HowItWorks;