import Image from 'next/image';
import { useState } from 'react';
import Swipe from 'react-easy-swipe';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function Carousel({ images }) {
	const [currentSlide, setCurrentSlide] = useState(0);

	const handleNextSlide = () => {
		let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
		setCurrentSlide(newSlide);
	};

	const handlePrevSlide = () => {
		let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
		setCurrentSlide(newSlide);
	};

	return (
		<div className="relative">
			<AiOutlineLeft
				onClick={handlePrevSlide}
				className="absolute inset-y-1/2 left-0 z-20 m-auto cursor-pointer text-5xl text-gray-400"
			/>
			<div className="relative m-auto flex h-[50vh] w-full overflow-hidden">
				<Swipe
					onSwipeLeft={handleNextSlide}
					onSwipeRight={handlePrevSlide}
					className="relative z-10 h-full w-full"
				>
					{images.map((image, index) => {
						if (index === currentSlide) {
							return (
								<Image
									key={image.id}
									image={image}
									alt="Bilde av en bil"
									layout="fill"
									objectFit="contain"
									className="animate-fadeIn"
								/>
							);
						}
					})}
				</Swipe>
			</div>
			<AiOutlineRight
				onClick={handleNextSlide}
				className="absolute inset-y-1/2 right-0 z-20 m-auto cursor-pointer text-5xl text-gray-400"
			/>

			<div className="relative flex justify-center p-2">
				{images.map((_, index) => {
					return (
						<div
							className={
								index === currentSlide
									? 'mx-2 mb-2 h-4 w-4 cursor-pointer rounded-full bg-gray-700'
									: 'mx-2 mb-2 h-4 w-4 cursor-pointer rounded-full bg-gray-300'
							}
							key={index}
							onClick={() => {
								setCurrentSlide(index);
							}}
						/>
					);
				})}
			</div>
		</div>
	);
}
