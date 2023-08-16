import React from 'react'
import Layout from './layout'
import sports from '/img/sports.jpg'
const Sports = () => {
  return (
            <Layout>
            <div className='lg:hidden'><img src={sports} alt="" /></div>
            <div className="bg-[#D9EBFF] pt-6">
            <div className="font-semibold text-2xl px-4 lg:text-4xl lg:my-4 py-4 text-center">SPORTS</div>
            <div className="px-4 py-2 lg:w-[950px] mx-auto">
          <div className="font-medium text-justify mb-4">
At our company, we are passionate about sports and offer a wide range of specialized solutions tailored to cater to the needs of athletes, sports organizations, and talent agencies. With a deep understanding of the sports industry and a commitment to excellence, our sports services encompass a diverse array of offerings to support and empower the world of sports
          </div>
          <div className="text-justify flex flex-col gap-1">
        <div className="text-lg  font-medium mt-2">1. Sports Talent Scouting: </div>
        Leveraging our extensive scouting network and expertise in player assessment, we identify and recruit promising football players and athletes across various sports disciplines.

        <div className="text-lg  font-medium mt-2">2. Sports Marketing and Branding:</div>
        Our marketing experts create compelling branding strategies and marketing campaigns to elevate the profiles of athletes, teams, and sports organizations.
        <div className="text-lg  font-medium mt-2">3. Sports Management: </div>
        Offering comprehensive management services to athletes and sports personalities, we handle contract negotiations, endorsement deals, and career planning.

        <div className="text-lg  font-medium mt-2">4. Sports Analytics: </div>
        Utilizing advanced data analytics, we provide insightful performance metrics and trends to optimize coaching strategies and decision-making for teams and athletes.



        <div className="text-lg  font-medium mt-2">5. Sports Event Management: </div>
        From organizing sports tournaments to managing logistics and broadcasting, we ensure successful and memorable sports events.

        <div className="text-lg  font-medium mt-2">6. Sports Technology Integration: </div>
        Embracing the latest sports technologies, we implement solutions such as wearables and performance tracking systems to improve athlete training and performance.

        <div className="text-lg  font-medium mt-2">7. Sports Career Consultation: </div>
        Our sports consultants offer strategic advice and guidance to aspiring athletes, helping them make informed career decisions and pursue opportunities in the sports industry.
        <div className="font-medium mt-2 mb-4">
        At kemkaz global, we are dedicated to fueling the passion for sports and contributing to the growth and success of athletes and sports organizations. With a focus on talent development, performance optimization, and innovative solutions, we strive to play a pivotal role in shaping a brighter future for the world of sports.





        </div>

            </div>
            </div>
    </div>
        </Layout>
  )
}

export default Sports