import React from 'react';

const articles = [
	{
		title: 'Top 5 Golf Courses in Spain for 2025',
		date: 'June 15, 2025',
		summary:
			'Discover the best golf courses in Spain for English-speaking visitors. Our 2025 picks offer stunning views, world-class facilities, and unforgettable experiences.',
	},
	{
		title: 'How to Book Tee Times in Spain as a Foreigner',
		date: 'May 28, 2025',
		summary:
			'A step-by-step guide for English-speaking golfers on booking tee times at Spanish courses, including tips for a smooth experience.',
	},
	{
		title: 'Golf Travel Tips: Making the Most of Your Spanish Golf Holiday',
		date: 'May 10, 2025',
		summary:
			'Essential travel tips for golfers visiting Spain, from packing advice to local etiquette and must-see destinations.',
	},
];

function Blog() {
	return (
		<div className="page">
			<h2>Blog</h2>
			<p>
				Read the latest news, tips, and stories about golfing in Spain. Stay
				updated with our expert articles and guides.
			</p>
			<div className="articles-list">
				{articles.map((article, idx) => (
					<div key={idx} className="article-card">
						<h3>{article.title}</h3>
						<small>{article.date}</small>
						<p>{article.summary}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Blog;
