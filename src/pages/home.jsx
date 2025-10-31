import React from 'react';
import HomeCarousel from '../components/HomeCarousel';
import HomeIntro from '../components/HomeIntro';
import HomeFeatures from '../components/HomeFeatures';

export default function Home() {
	return (
		<main className="page home">
			<HomeCarousel />
			<HomeIntro />
			<HomeFeatures />
		</main>
	);
}
