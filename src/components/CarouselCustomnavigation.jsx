import { Carousel } from "@material-tailwind/react";
import { pic12 } from "../assets/images";

const CarouselCustomNavigation = () => {
    return (
        <Carousel autoplay={true} loop={true} navigation={Boolean} nextArrow={Boolean} prevArrow={Boolean}>
            <img
                src={pic12}
                alt="image 1"
                className="h-full w-full object-contain md:object-contain lg:object-cover sm:object-contain"
            />
            <img
                src={pic12}
                alt="image 2"
                className="h-full w-full object-contain md:object-contain lg:object-cover sm:object-contain"
            />
        </Carousel>
    );
}
export default CarouselCustomNavigation