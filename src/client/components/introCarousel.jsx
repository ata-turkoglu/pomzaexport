import { Carousel, Typography } from "@material-tailwind/react";

export function IntroCarousel() {
    const toBottom = () => {
        window.scrollBy({ top: "2000", behavior: "smooth" });
    };
    return (
        <Carousel autoplay={true} loop={true} className="h-screen">
            <div className="relative w-full">
                <img
                    src="/assets/carousel/1.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h2"
                            color="white"
                            className="mb-12 opacity-80 backShadow"
                        >
                            Sitemiz yapım aşamasındadır. <br />
                            <a
                                style={{
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                }}
                                onClick={toBottom}
                            >
                                İletişim
                            </a>{" "}
                            bilgilerimizden bize ulaşabilirsiniz.
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="/assets/carousel/2.jpg"
                    alt="image 2"
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h2"
                            color="white"
                            className="mb-12 opacity-80 backShadow"
                        >
                            Sitemiz yapım aşamasındadır. <br />
                            <a
                                style={{
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                }}
                                onClick={toBottom}
                            >
                                İletişim
                            </a>{" "}
                            bilgilerimizden bize ulaşabilirsiniz.
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="/assets/carousel/3.jpg"
                    alt="image 3"
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h2"
                            color="white"
                            className="mb-12 opacity-80 backShadow"
                        >
                            Sitemiz yapım aşamasındadır. <br />
                            <a
                                style={{
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                }}
                                onClick={toBottom}
                            >
                                İletişim
                            </a>{" "}
                            bilgilerimizden bize ulaşabilirsiniz.
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="/assets/carousel/4.jpg"
                    alt="image 3"
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h2"
                            color="white"
                            className="mb-12 opacity-80 backShadow"
                        >
                            Sitemiz yapım aşamasındadır. <br />
                            <a
                                style={{
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                }}
                                onClick={toBottom}
                            >
                                İletişim
                            </a>{" "}
                            bilgilerimizden bize ulaşabilirsiniz.
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="/assets/carousel/5.jpg"
                    alt="image 3"
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h2"
                            color="white"
                            className="mb-12 opacity-80 backShadow"
                        >
                            Sitemiz yapım aşamasındadır. <br />
                            <a
                                style={{
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                }}
                                onClick={toBottom}
                            >
                                İletişim
                            </a>{" "}
                            bilgilerimizden bize ulaşabilirsiniz.
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="/assets/carousel/6.jpg"
                    alt="image 3"
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h2"
                            color="white"
                            className="mb-12 opacity-80 backShadow"
                        >
                            Sitemiz yapım aşamasındadır. <br />
                            <a
                                style={{
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                }}
                                onClick={toBottom}
                            >
                                İletişim
                            </a>{" "}
                            bilgilerimizden bize ulaşabilirsiniz.
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="/assets/carousel/7.jpg"
                    alt="image 3"
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h2"
                            color="white"
                            className="mb-12 opacity-80 backShadow"
                        >
                            Sitemiz yapım aşamasındadır. <br />
                            <a
                                style={{
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                }}
                                onClick={toBottom}
                            >
                                İletişim
                            </a>{" "}
                            bilgilerimizden bize ulaşabilirsiniz.
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src="/assets/carousel/8.jpg"
                    alt="image 3"
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h2"
                            color="white"
                            className="mb-12 opacity-80 backShadow"
                        >
                            Sitemiz yapım aşamasındadır. <br />
                            <a
                                style={{
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                }}
                                onClick={toBottom}
                            >
                                İletişim
                            </a>{" "}
                            bilgilerimizden bize ulaşabilirsiniz.
                        </Typography>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}
