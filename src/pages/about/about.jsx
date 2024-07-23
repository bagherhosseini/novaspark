import React from 'react';

import './about.scss';
import productImg from './file.png';

export default function About() {
    return (
        <div className='about'>
            <div className='background'>
                <div className='content'>
                    <h2>About</h2>
                    <div className='aboutText'>
                        <h3>Mission</h3>
                        <p>
                            NovaSpark was born out of a desire to create high-quality packaging solutions that minimize environmental impact. Our journey began with a simple question: "Can we create beautiful, functional packaging that also protects the environment?" The answer, we found, was a resounding yes. Inspired by the natural world and driven by a passion for sustainability, we set out to fill a gap in the market for eco-friendly packaging that doesn’t compromise on design or functionality.
                            <br />
                            <br />
                            We started small, with a dedicated team of innovators, designers, and environmental advocates, all sharing a common vision. Over the years, we’ve grown into a trusted name in sustainable packaging, but our core values remain the same. Every product we develop is a testament to our commitment to quality, sustainability, and design excellence.
                        </p>

                        <h3>Our Products</h3>
                        <p>
                            We specialize in creating versatile and durable plastic bottles, perfect for a variety of uses, including personal care, household products, and more. Our mockup templates are meticulously designed to help brands visualize their products in a sleek and modern format, allowing for seamless integration into any marketing strategy.
                            <br />
                            <br />
                            Each bottle we produce is crafted with precision, ensuring they are not only visually appealing but also practical and long-lasting. We use high-quality, recyclable materials that reduce waste and environmental impact. Whether you’re a startup looking to make a mark or an established brand seeking to refresh your image, our products offer the perfect blend of form and function.
                        </p>

                        <h3>Our Commitment</h3>
                        <p>
                            Sustainability is at the heart of everything we do. From the materials we choose to the processes we implement, every step is taken with consideration for our environmental footprint. Our goal is to provide packaging solutions that help reduce waste and promote a greener future.
                            <br />
                            <br />
                            We believe in transparency and accountability. That’s why we’re committed to continuous improvement in our sustainability practices. We regularly review and refine our processes to ensure we’re using the most eco-friendly materials and methods available. Our commitment extends beyond our products to include our entire operation, from reducing energy consumption in our facilities to minimizing our carbon footprint.
                        </p>

                        <h3>Join Us</h3>
                        <p>
                            We invite you to explore our range of products and see how NovaSpark can bring your brand to life with innovative and sustainable packaging solutions. Together, we can make a difference. By choosing NovaSpark, you’re not just choosing exceptional packaging; you’re joining a community dedicated to making the world a better place.
                            <br />
                            <br />
                            Let’s work together to create a brighter, more sustainable future. Discover the NovaSpark difference today.
                        </p>

                        <img src={productImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
