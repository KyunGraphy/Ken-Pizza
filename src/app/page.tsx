import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeader";

export default function Home() {
    return (
        <>
            <Hero />
            <HomeMenu />
            <section className="text-center my-16">
                <SectionHeader
                    subHeader={"Our story"}
                    mainHeader={"About us"}
                />
                <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Saepe, repudiandae dolore. Labore, possimus
                        voluptas laboriosam debitis quas eum, sunt adipisci quia
                        corrupti mollitia distinctio dolorem, nemo voluptates
                        numquam? Magni, officiis.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Saepe, repudiandae dolore. Labore, possimus
                        voluptas laboriosam debitis quas eum, sunt adipisci quia
                        corrupti mollitia distinctio dolorem, nemo voluptates
                        numquam? Magni, officiis.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Saepe, repudiandae dolore. Labore, possimus
                        voluptas laboriosam debitis quas eum, sunt adipisci quia
                        corrupti mollitia distinctio dolorem, nemo voluptates
                        numquam? Magni, officiis.
                    </p>
                </div>
            </section>
            <section className="text-center my-8">
                <SectionHeader
                    subHeader={"Don't hesitate"}
                    mainHeader={"Contact us"}
                />
                <div className="mt-8">
                    <a
                        className="text-4xl underline text-gray-500"
                        href="tel:+84933592344"
                    >
                        +84 933 592 344
                    </a>
                </div>
            </section>
        </>
    );
}
