import React from 'react';
import HomeCarousel from '../components/HomeCarousel';
import HomeIntro from '../components/HomeIntro';
import HomeTestimonials from '../components/HomeTestimonials';
import HomeFeatures from '../components/HomeFeatures';
import HomeClasses from '../components/HomeClasses';

export default function Home() {
	return (
		<main className="page home">
			<HomeCarousel />
			<HomeIntro />
			<HomeFeatures />
			<HomeClasses />
			<HomeTestimonials />
		</main>
	);
}
