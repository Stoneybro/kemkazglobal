import React from 'react'
import Layout from './layout'
import estate from '/img/estate.jpg'
const Estate = () => {
  return (
    <Layout>
    <div className='lg:hidden'><img src={estate} alt="" /></div>
    <div className="font-semibold text-2xl px-4 py-4 text-center lg:text-4xl lg:my-4">REAL ESTATE</div>
    <div className="px-4 py-2 lg:w-[950px] mx-auto">
  <div className="font-medium text-justify mb-4">
  At our company, we specialize in providing comprehensive real estate solutions tailored to meet the unique needs of clients in the dynamic real estate market. With a deep understanding of the industry and a commitment to excellence, our real estate services encompass a diverse range of offerings to facilitate seamless transactions and support clients in achieving their property goals.
  </div>
  <div className="text-justify flex flex-col gap-1">
<div className="text-lg  font-medium mt-2">1. Residential Real Estate: </div>
We assist clients in buying and selling residential properties, ensuring a smooth and rewarding experience for homeowners and investors alike.

<div className="text-lg  font-medium mt-2">2. Commercial Real Estate:</div>
Our expertise extends to commercial property transactions, including sales, leasing, and investment opportunities across office, retail, industrial, and mixed-use properties.
<div className="text-lg  font-medium mt-2">3. Property Valuation and Appraisal: </div>
Our experienced appraisers provide accurate property valuations for buyers, sellers, and financial institutions.


<div className="text-lg  font-medium mt-2">4. Property Management: </div>
We offer professional property management services to property owners, ensuring efficient tenant screening, rent collection, maintenance, and overall property performance.




<div className="text-lg  font-medium mt-2">5. Real Estate Development: </div>
Collaborating with developers, we provide insights and guidance throughout the entire real estate development process, from planning to project completion.

<div className="text-lg  font-medium mt-2">6. Market Research and Analysis: </div>
Our team conducts in-depth market research to offer clients valuable insights into real estate trends, property values, and investment opportunities.



<div className="text-lg  font-medium mt-2">7. Real Estate Investment Advisory: </div>
We assist clients in identifying and evaluating profitable real estate investment opportunities, offering guidance on risk assessment and portfolio diversification.
<div className="font-medium mt-2 mb-4">
At kemkaz global, we are committed to delivering exceptional real estate services, empowering clients to make well-informed decisions and achieve their real estate aspirations. With a customer-centric approach, extensive market knowledge, and a passion for excellence, we are dedicated to helping clients thrive in the ever-evolving real estate industry.





</div>

    </div>
    </div>

</Layout>
  )
}

export default Estate