import SectionContainer from "@/components/SectionContainer";

export default function AboutSection() {
  return (
    <div className="flex flex-col items-start justify-center max-w-6xl w-full tracking-wide min-h-screen h-full md:gap-8 gap-4 px-4 py-16 z-10" id="about">
      <h1 className=" text-green-400 md:text-base text-sm italic">
        Something about myself...
      </h1>
      <h1 className="md:text-4xl text-xl font-semibold">About</h1>
      <div className="w-full flex flex-col items-start gap-4 text-sky-200 md:text-base text-xl text-opacity-75 ">
        <p className="w-full text-justify ">
        I am a highly motivated and passionated Computer Science and Engineering student at Amity University, 
        with a strong foundation in software development, artificial intelligence, and data analytics. 
        I have hands-on experience on developing an AI based adaptive learning platform, web development 
        and managing diverse projects and teams.
        </p>
        <p className="w-full text-justify">
        My technical expertise spans Python, Java, React, TensorFlow, C++, and more, with a focus on 
        innovative applications such as sentiment analysis and recommendation systems. I am also very 
        fond of computer networks and fundamentals and the underlying architecture of technology, 
        drives my passion for building efficient, scalable, and secure systems, with particularly 
        fascinated by how interconnected systems communicate and collaborate to power modern applications.
        </p>
        <p className="w-full text-justify">
        I always prioritize learning, with certifications from NPTEL and Udemy, and skills in leadership, 
        critical thinking, and problem-solving, I am committed to delivering impactful solutions that bridge 
        technology and user needs. I actively contribute to the developer community through volunteering and
        continuous learning. Let's connect to discuss collaboration opportunities in technology-driven 
        problem-solving.
        </p>
        <p className="w-full text-justify">
          Usally a workaholic but, my hobbies include playing basketball, rewinding to music and everything in-between to promote
          mental well being. I'm always up for a good conversation and love connecting with
          people from all walks of life.
        </p>
      </div>
    </div>
  );
}