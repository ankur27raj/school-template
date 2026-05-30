export const schoolConfig = {
  name: "Apex International School",
  shortName: "Apex International",
  tagline: "Inspiring Excellence, Nurturing Character, Empowering Leaders",
  logoText: "APEX",
  
  contact: {
    email: "admissions@apexinternational.edu",
    phone: "+1 (555) 873-3900",
    address: "100 Horizon Parkway, Vista Heights, CA 94025",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.4114777610013!2d-122.1483321!3d37.4275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI1JzM5LjAiTiAxMjLCsDA4JzU0LjAiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
    officeHours: "Mon - Fri, 8:00 AM - 4:30 PM",
  },

  socials: [
    { name: "Facebook", url: "https://facebook.com/apexinternational", icon: "Facebook" },
    { name: "Twitter", url: "https://twitter.com/apex_int", icon: "Twitter" },
    { name: "Instagram", url: "https://instagram.com/apex_international", icon: "Instagram" },
    { name: "LinkedIn", url: "https://linkedin.com/school/apex-international", icon: "Linkedin" },
  ],

  theme: {
    primary: "#0f172a", // Deep slate
    secondary: "#b45309", // Warm amber/gold
    accent: "#047857", // Emerald green
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Faculty", href: "/faculty" },
    { label: "Admissions", href: "/admissions" },
    { label: "Gallery", href: "/gallery" },
    { label: "Notices & Events", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],

  statistics: [
    { value: 1200, label: "Students Enrolled", suffix: "+", description: "Diverse student body from 25+ countries" },
    { value: 98, label: "University Acceptance", suffix: "%", description: "Graduates attending Ivy League & top world universities" },
    { value: 95, label: "Expert Faculty", suffix: "+", description: "Over 70% holding advanced Master's or Ph.D. degrees" },
    { value: 12, label: "Average Class Size", suffix: "", description: "Low student-to-teacher ratio for personalized learning" },
  ],

  principal: {
    name: "Dr. Evelyn Vance",
    credentials: "Ph.D. in Educational Leadership, Stanford University",
    quote: "At Apex International, we believe that education is not just about academic excellence, but about fostering intellectual curiosity, resilience, and compassion. We prepare students not just for college, but for life.",
    image: "/images/principal.png",
    bio: "Dr. Evelyn Vance has over 20 years of experience in international education. Before leading Apex, she served as Director of Academics at London Academy and has consulted for top tier educational systems worldwide.",
  },

  values: [
    {
      title: "Academic Rigor",
      description: "A challenging curriculum combining global frameworks with project-based learning to stimulate critical thinking.",
      icon: "Award",
    },
    {
      title: "Character & Ethics",
      description: "Instilling values of integrity, empathy, and social responsibility through regular community outreach and leadership programs.",
      icon: "Heart",
    },
    {
      title: "Global Citizenship",
      description: "Preparing students for a connected world by encouraging multilingualism and cultural appreciation.",
      icon: "Globe",
    },
    {
      title: "Holistic Development",
      description: "Equally prioritizing arts, athletics, technology, and mental well-being for a well-balanced learning experience.",
      icon: "Sparkles",
    },
  ],

  programs: [
    {
      title: "Early Years Foundation",
      grades: "Preschool - Kindergarten",
      description: "Play-based inquiry that nurtures emotional, cognitive, and social development in safe, modern spaces.",
      image: "/images/programs-early.png",
      href: "/academics#early-years",
    },
    {
      title: "Primary School",
      grades: "Grades 1 - 5",
      description: "Building strong foundational skills in literacy, numeracy, and scientific inquiry using active learning methodologies.",
      image: "/images/programs-primary.png",
      href: "/academics#primary",
    },
    {
      title: "Middle School",
      grades: "Grades 6 - 8",
      description: "Encouraging independence, analytical thinking, and self-expression during critical transitional years.",
      image: "/images/programs-middle.png",
      href: "/academics#middle",
    },
    {
      title: "High School",
      grades: "Grades 9 - 12",
      description: "Advanced Placement (AP) and dual enrollment paths designed for entry into top global universities.",
      image: "/images/programs-high.png",
      href: "/academics#high",
    },
  ],

  facilities: [
    {
      title: "Advanced STEM Labs",
      description: "Fully equipped chemistry, physics, and biology labs featuring state-of-the-art diagnostic and research apparatus.",
      image: "/images/facility-stem.png",
    },
    {
      title: "Modern Resource Library",
      description: "Over 35,000 physical volumes, digital archives, and quiet study alcoves designed to foster a research mindset.",
      image: "/images/facility-library.png",
    },
    {
      title: "Olympic-Sized Sports Complex",
      description: "Featuring a heated 50m indoor swimming pool, indoor basketball courts, track, and FIFA-approved turf soccer field.",
      image: "/images/facility-sports.png",
    },
    {
      title: "Visual & Performing Arts Center",
      description: "A 450-seat professional auditorium, visual arts studios, and acoustics-tuned practice rooms for musicians.",
      image: "/images/facility-arts.png",
    },
  ],

  notices: [
    {
      id: "n1",
      date: "May 28, 2026",
      title: "Admissions Open for Academic Year 2026-2027",
      category: "Admissions",
      content: "Applications are now being accepted for all grade levels. Priority deadline for scholarships is June 30, 2026.",
      isImportant: true,
    },
    {
      id: "n2",
      date: "May 25, 2026",
      title: "Apex Students Excel in International Science Olympiad",
      category: "Achievement",
      content: "Congratulations to our Senior Science Team for securing 2 Gold and 1 Silver medal in the Global Olympiad finals.",
      isImportant: false,
    },
    {
      id: "n3",
      date: "May 18, 2026",
      title: "Health and Safety Guidelines Update",
      category: "Administration",
      content: "Review our revised wellness policies and school clinic contact details for the upcoming summer term.",
      isImportant: false,
    },
  ],

  events: [
    {
      id: "e1",
      date: "08",
      month: "Jun",
      year: "2026",
      title: "Annual Arts & Music Exhibition",
      time: "4:00 PM - 7:00 PM",
      location: "Performing Arts Center",
      description: "A showcase of student visual arts projects, orchestra recitals, and theater pieces.",
    },
    {
      id: "e2",
      date: "15",
      month: "Jun",
      year: "2026",
      title: "Summer Sports Camp Kickoff",
      time: "9:00 AM - 1:00 PM",
      location: "Sports Field",
      description: "Intensive training camps in Soccer, Swimming, Basketball, and Tennis for ages 8-15.",
    },
    {
      id: "e3",
      date: "22",
      month: "Jun",
      year: "2026",
      title: "College Admissions Panel Q&A",
      time: "6:30 PM - 8:30 PM",
      location: "Resource Library & Online",
      description: "Panel discussion with admissions officers from top universities discussing essay writing and applications.",
    },
  ],

  testimonials: [
    {
      quote: "Sending our children to Apex has been the best decision we've made. The teachers don't just teach subjects; they build character and inspire confidence.",
      author: "Sarah & Robert Jenkins",
      role: "Parents of High Schoolers (Grades 10 & 11)",
      avatar: "/images/avatar-1.jpg",
    },
    {
      quote: "The STEM curriculum and mentoring at Apex allowed me to research my own AI models. I felt completely prepared when I entered Stanford.",
      author: "Marcus Chen",
      role: "Alumni (Class of 2024), Software Engineering Student",
      avatar: "/images/avatar-2.jpg",
    },
    {
      quote: "Apex offers a truly global environment. The focus on arts alongside rigorous math programs allowed our daughter to discover her passion for set design.",
      author: "Dr. Amara Patel",
      role: "Parent of Middle Schooler (Grade 7)",
      avatar: "/images/avatar-3.jpg",
    },
  ],
};
