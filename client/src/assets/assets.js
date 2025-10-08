import logo from "./logo.png";
import search_icon from "./search_icon.svg";
import bkash_logo from "./bkash_logo.svg";
import grameenphone_logo from "./grameenphone_logo.png";
import pthao from "./pthao.svg";
import robi_logo from "./robi_logo.png";
import daraz from "./daraz.webp";
import bk_logo from "./bk_logo.png";
import shohoz_logo from "./shohoz_logo.png";
import brac_logo from "./brac_logo.png";
import therap_bd from "./therap_bd.png";
import sheba_logo from "./sheba_logo.png";
import square_logo from "./square_logo.png";
import tech from "./tech.jpeg";
import nextgen from "./nextgen.webp";
import bg_image from "./bg_image.png";
import bright_future from "./bright_future.webp";
import enroute from "./enroute.jpeg";
import creative from "./creative.jpeg";
import techplex from "./techplex.jpeg";
import cloudwave from "./cloudwave.webp";





import company_icon from "./company_icon.svg";
import bjit_logo from "./bjit_logo.svg";
import datasoft_logo from "./datasoft_logo.png";
import ti_logo from "./ti_logo.png";
import bracbank_sm_logo from "./bracbank_sm_logo.png";
import dutchbangla_logo from "./dutchbangla_logo.png";
import aci_logo from "./aci_logo.png";
import banglalink_logo from "./banglalink_logo.svg";
import sci_logo from "./sci_logo.svg";
import beximco_logo from "./beximco_logo.png";

import cybershield from "./cybershield.jpeg";
import profile_img from "./profile_img.png";
import app_main_img from "./app_main_img.png";
import cross_icon from './cross_icon.svg';
import location_icon from './location_icon.svg';
import money_icon from './money_icon.svg';
import suitcase_icon from './suitcase_icon.svg';
import person_icon from './person_icon.svg';
import upload_area from './upload_area.svg';
import resume_selected from './resume_selected.svg';
import resume_not_selected from './resume_not_selected.svg';
import play_store from './play_store.svg';
import app_store from './app_store.svg';
import back_arrow_icon from './back_arrow_icon.svg';
import left_arrow_icon from './left_arrow_icon.svg';
import right_arrow_icon from './right_arrow_icon.svg';
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import profile_upload_icon from './profile_upload_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import resume_download_icon from './resume_download_icon.svg'
import delete_icon from './delete_icon.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import samsung_logo from './samsung_logo.png'
import adobe_logo from './adobe_logo.png'
import amazon_logo from './amazon_logo.png'

export const assets = {
    logo,
    search_icon,
    cross_icon,
    upload_area,
    cloudwave,
    company_icon,
    creative,
    beximco_logo,
    techplex,
    bkash_logo,
    enroute,
    cybershield,
    grameenphone_logo,
    bright_future,
    pthao,
    robi_logo,
    daraz,
    bk_logo,
   
    shohoz_logo,
    brac_logo,
    therap_bd,
    sheba_logo,
    tech,
    bg_image,
    square_logo,
    nextgen,
    resume_not_selected,
    resume_selected,
    bjit_logo,
    datasoft_logo,
    ti_logo,
    bracbank_sm_logo,
    dutchbangla_logo,
    aci_logo,
    banglalink_logo,
    sci_logo,
    app_main_img,
    play_store,
    app_store,
    back_arrow_icon,
    left_arrow_icon,
    right_arrow_icon,
    location_icon,
    money_icon,
    suitcase_icon,
    person_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    home_icon,
    add_icon,
    person_tick_icon,
    resume_download_icon,
    profile_img,
    delete_icon,
    profile_upload_icon,
    email_icon,
    lock_icon,
    samsung_logo,
    adobe_logo,
    amazon_logo
}

export const JobCategories = [
    "Programming & Software Development",
    "Data Science & Analytics",
    "UI/UX & Graphic Designing",
    "Networking & System Administration",
    "Project & Operations Management",
    "Sales & Marketing",
    "Cybersecurity",
    "Accounting & Finance",
    "Customer Support & Call Center",
    "Content Writing & Editing",
    "Human Resources (HR)",
    "Teaching & Education",
    "Healthcare & Medical",
    "Engineering & Architecture",
    "Garments/Textile & RMG",
    "NGO/Development",
]

export const JobLocations = [
    "Dhaka",
    "Chattogram",
    "Sylhet",
    "Rajshahi",
    "Khulna",
    "Barishal",
    "Rangpur",
    "Cumilla",
    "Gazipur",
    "Narayanganj",
    "Mymensingh",
    "Cox's Bazar",
    "Jessore",
    "Remote (Bangladesh)"
    
]

// Sample data for Manage Jobs Page
export const manageJobsData = [
    { _id: 1, title: "Full Stack Developer", date: 1729102298497, location: "Dhaka", applicants: 20 },
    { _id: 2, title: "Data Scientist", date: 1729102298497, location: "Chattogram", applicants: 15 },
    { _id: 3, title: "Marketing Manager", date: 1729102298497, location: "Sylhet", applicants: 8 },
    { _id: 4, title: "UI/UX Designer", date: 1729102298497, location: "Khulna", applicants: 12 }
];

// Sample data for Profile Page
export const jobsApplied = [
    {
        company: 'bKash',
        title: 'Full Stack Developer',
        location: 'Dhaka',
        date: '22 Aug, 2024',
        status: 'Pending',
        logo: bkash_logo,
    },
    {
        company: 'Grameenphone',
        title: 'Data Scientist',
        location: 'Chattogram',
        date: '22 Aug, 2024',
        status: 'Rejected',
        logo: grameenphone_logo,
    },
    {
        company: 'Beximco Ltd',
        title: 'Marketing Manager',
        location: 'Sylhet',
        date: '25 Sep, 2024',
        status: 'Accepted',
        logo: beximco_logo, 
    },
    {
        company: 'Square Pharmaceuticals',
        title: 'UI/UX Designer',
        location: 'Khulna',
        date: '15 Oct, 2024',
        status: 'Pending',
        logo: square_logo,
    },
    {
        company: 'BRAC Bank',
        title: 'Project Manager',
        location: 'Rajshahi',
        date: '25 Sep, 2024',
        status: 'Accepted',
        logo: brac_logo,
    },
];

export const viewApplicationsPageData = [
    { _id: 1, name: "Nafisa Ali", jobTitle: "Full Stack Developer", location: "Dhaka", imgSrc: profile_img },
    { _id: 2, name: "Noor Mohammad Priom", jobTitle: "Data Scientist", location: "Chattogram", imgSrc: profile_img },
    { _id: 3, name: "Sirajum Munira", jobTitle: "Marketing Manager", location: "Sylhet", imgSrc: profile_img },
    { _id: 4, name: "Raier Rahman Ove", jobTitle: "UI/UX Designer", location: "Khulna", imgSrc: profile_img },
    { _id: 5, name: "Jannatul Ferdous", jobTitle: "Project Manager", location: "Rajshahi", imgSrc: profile_img },
    { _id: 6, name: "Md.Al Amin", jobTitle: "Cybersecurity Analyst", location: "Barishal", imgSrc: profile_img },
    { _id: 7, name: "Nashrah Zaman", jobTitle: "Content Writer", location: "Gazipur", imgSrc: profile_img },
];

export const jobsData = [
    {
        _id: '1',
        title: "Full Stack Developer",
        location: "Dhaka",
        level: "Mid Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "bKash Limited",
            "email": "hr@bkash.com",
            "image": bkash_logo,
        },
        description: `
        <p>bKash is looking for a passionate Full Stack Developer to join our growing technology team. You’ll be working with both the frontend and backend, helping us build products that reach millions of users across Bangladesh.</p>
        
        <h2><strong>What You’ll Do</strong></h2>
        <ol>
            <li>Work on new features and improve existing ones for our web applications.</li>
            <li>Collaborate with designers and product managers to turn ideas into real products.</li>
            <li>Write clean, efficient code for both frontend (React) and backend (Node.js).</li>
            <li>Build and maintain APIs and databases that keep our systems running smoothly.</li>
            <li>Identify problems early and come up with smart solutions to fix them.</li>
        </ol>
        
        <h2><strong>What We’re Looking For</strong></h2>
        <ol>
            <li>Good knowledge of JavaScript and hands-on experience with React & Node.js.</li>
            <li>Comfortable working with databases like MongoDB or MySQL.</li>
            <li>Basic understanding of cloud services (AWS, Azure, or similar).</li>
            <li>Familiar with version control (Git) and team-based development.</li>
            <li>Someone curious, proactive, and eager to learn new technologies.</li>
        </ol>`,
        salary: 65000,
        date: 1729681667114,
        category: "Programming & Software Development",
    },

    {
    _id: '2',
    title: "Data Scientist",
    location: "Dhaka",
    level: "Mid Level",
    companyId: {
        "_id": "6710aa35ca9fda8f1bf360d1",
        "name": "Grameenphone Ltd.",
        "email": "career@grameenphone.com",
        "image": grameenphone_logo ,
    },
    description: `
        <p>Grameenphone is looking for a Data Scientist who loves working with data and turning numbers into real business impact. If you enjoy solving problems, finding hidden patterns, and building models that can actually shape decisions, this role is for you. You’ll be part of a growing analytics team that directly supports product, marketing, and operations.</p>
        
        <h2><strong>What You’ll Be Doing</strong></h2>
        <ul>
            <li>Work with large datasets to discover trends and insights.</li>
            <li>Build predictive models that help improve customer experience and business outcomes.</li>
            <li>Create dashboards and visual reports that make complex data easy to understand.</li>
            <li>Collaborate with engineers and business teams to bring your models into production.</li>
            <li>Keep improving how we collect, process, and use data every day.</li>
        </ul>
        
        <h2><strong>What We’re Looking For</strong></h2>
        <ul>
            <li>Hands-on experience with Python or R for data analysis and machine learning.</li>
            <li>Solid understanding of SQL and working with relational databases.</li>
            <li>Experience with visualization tools like Power BI or Tableau.</li>
            <li>Familiarity with cloud platforms (AWS, Azure, or GCP) is a plus.</li>
            <li>A curious mindset and the ability to explain technical findings in simple language.</li>
        </ul>`,
    salary: 85000,
    date: 1729681667114,
    category: "Data Science & Analytics",
},

    {
    _id: '3',
    title: "UI/UX Designer",
    location: "Chattogram",
    level: "Entry Level",
    companyId: {
        "_id": "6710bb45ca9fda8f1bf361e2",
        "name": "Pathao Ltd.",
        "email": "career@pathao.com",
        "image": pthao,
    },
    description: `
        <p>Pathao is looking for a creative and detail-oriented UI/UX Designer to join our product team. In this role, you will help design digital experiences that are simple, engaging, and user-friendly. If you are passionate about design and love solving user problems with creative solutions, this position is perfect for you.</p>
        
        <h2><strong>What You’ll Be Doing</strong></h2>
        <ul>
            <li>Work closely with product managers and engineers to design intuitive user interfaces.</li>
            <li>Create wireframes, prototypes, and high-fidelity mockups that bring ideas to life.</li>
            <li>Conduct user research and usability testing to improve design decisions.</li>
            <li>Stay updated with the latest design trends, tools, and technologies.</li>
            <li>Collect and apply feedback to continuously improve user experience.</li>
        </ul>
        
        <h2><strong>What We’re Looking For</strong></h2>
        <ul>
            <li>Proficiency in design tools such as Figma, Adobe XD, or Sketch.</li>
            <li>Basic understanding of HTML, CSS to collaborate with developers effectively.</li>
            <li>Strong sense of visual design, typography, and layout.</li>
            <li>Good communication skills and the ability to present design ideas clearly.</li>
            <li>A problem-solving mindset with attention to detail and creativity.</li>
        </ul>`,
    salary: 60000,
    date: 1729681667114,
    category: "UI/UX & Graphic Designing",
},
{
    _id: '4',
    title: "DevOps Engineer",
    location: "Dhaka",
    level: "Mid Level",
    companyId: {
        "_id": "6710cc56ca9fda8f1bf362f3",
        "name": "Robi Axiata Ltd.",
        "email": "career@robi.com",
        "image": robi_logo,
    },
    description: `
         <p>Robi Axiata is looking for a motivated DevOps Engineer to strengthen our deployment pipelines and cloud infrastructure. In this role, you will bridge the gap between development and IT operations, improve automation, and ensure systems run efficiently at scale.</p>
        
        <h2><strong>What You’ll Be Doing</strong></h2>
        <ul>
            <li>Automate build, test, and deployment workflows using modern CI/CD tools.</li>
            <li>Manage and monitor cloud infrastructure with a focus on reliability and scalability.</li>
            <li>Proactively identify and resolve performance or availability issues.</li>
            <li>Work with developers to integrate new features without disrupting stability.</li>
            <li>Implement security best practices, backups, and disaster recovery plans.</li>
        </ul>
        
        <h2><strong>What We’re Looking For</strong></h2>
        <ul>
            <li>Hands-on experience with CI/CD platforms (Jenkins, GitLab CI, or similar).</li>
            <li>Proficiency in at least one major cloud platform (AWS, Azure, GCP).</li>
            <li>Scripting knowledge in Bash, Python, or equivalent.</li>
            <li>Understanding of containerization (Docker) and orchestration (Kubernetes).</li>
            <li>Problem-solving mindset with strong collaboration skills.</li>
        </ul>`,
    salary: 55000,
    date: 1729681667114,
    category: "Networking & System Administration",
},

   {
    _id: '5',
    title: "Software Engineer",
    location: "Dhaka",
    level: "Intermediate Level",
    companyId: {
        "_id": "6710dd67ca9fda8f1bf363f4",
        "name": "Daraz Bangladesh",
        "email": "career@daraz.com",
        "image": daraz,
    },
    description: `
        <p>Daraz Bangladesh is seeking a talented Software Engineer to join our tech team. You will develop and maintain web and mobile applications that improve user experience and drive business growth. Collaborating with product managers and other engineers, your work will have a direct impact on millions of users across Bangladesh.</p>
        
        <h2><strong>What You’ll Be Doing</strong></h2>
        <ul>
            <li>Design, develop, and maintain scalable software applications.</li>
            <li>Collaborate with cross-functional teams to implement new features.</li>
            <li>Participate in code reviews to maintain high code quality.</li>
            <li>Debug, test, and optimize applications for performance and reliability.</li>
            <li>Document processes, architecture, and software designs clearly.</li>
        </ul>
        
        <h2><strong>What We’re Looking For</strong></h2>
        <ul>
            <li>Proficiency in JavaScript, Python, or Java with solid OOP knowledge.</li>
            <li>Experience in web frameworks (React, Node.js, or Django) is a plus.</li>
            <li>Understanding of Agile methodology and software development life cycle.</li>
            <li>Familiarity with version control systems (Git).</li>
            <li>Strong problem-solving skills, attention to detail, and teamwork abilities.</li>
        </ul>`,
    salary: 65000,
    date: 1729681667114,
    category: "Programming & Software Development",
},
{
    _id: '6',
    title: "Network Engineer",
    location: "Dhaka",
    level: "Mid Level",
    companyId: {
        "_id": "6710ee78ca9fda8f1bf364f5",
        "name": "Banglalink Digital Communications Ltd.",
        "email": "career@banglalink.com",
        "image": bk_logo,
    },
    description: `
        <p>Banglalink is seeking a skilled Network Engineer to maintain and improve our network infrastructure. You will ensure stable connectivity across all systems and help implement secure and efficient network solutions. Your work will directly support smooth operations for our customers and internal teams.</p>
        
        <h2><strong>What You’ll Be Doing</strong></h2>
        <ul>
            <li>Design, configure, and maintain network systems that support company operations.</li>
            <li>Monitor network performance, identify bottlenecks, and troubleshoot issues.</li>
            <li>Implement network security best practices to safeguard company data.</li>
            <li>Document network configurations, procedures, and changes clearly.</li>
            <li>Collaborate with IT and DevOps teams to enhance overall network performance.</li>
        </ul>
        
        <h2><strong>What We’re Looking For</strong></h2>
        <ul>
            <li>Hands-on experience with TCP/IP, BGP, OSPF, and other network protocols.</li>
            <li>Familiarity with firewalls, VPNs, and network security solutions.</li>
            <li>Good troubleshooting skills and attention to detail.</li>
            <li>Relevant certifications like CCNA or CCNP are a plus.</li>
            <li>Strong communication skills and teamwork orientation.</li>
        </ul>`,
    salary: 60000,
    date: 1729681667114,
    category: "Networking & System Administration",
},
{
    _id: '7',
    title: "Project Manager",
    location: "Dhaka",
    level: "Mid Level",
    companyId: {
        "_id": "6710ff89ca9fda8f1bf365f6",
        "name": "BRAC Bank Ltd.",
        "email": "career@bracbank.com",
        "image": bracbank_sm_logo,
    },
    description: `
        <p>BRAC Bank is looking for a Project Manager to lead key initiatives and ensure successful project delivery. You will coordinate with cross-functional teams, manage timelines, and ensure that projects align with organizational goals. Your leadership and communication skills will help motivate teams and deliver high-quality results.</p>
        
        <h2><strong>What You’ll Be Doing</strong></h2>
        <ul>
            <li>Define project goals, scope, and deliverables in collaboration with stakeholders.</li>
            <li>Create and maintain detailed project plans and schedules.</li>
            <li>Monitor project progress, identify risks, and implement corrective actions.</li>
            <li>Coordinate communication between teams and manage stakeholder expectations.</li>
            <li>Conduct project reviews and document lessons learned for continuous improvement.</li>
        </ul>
        
        <h2><strong>What We’re Looking For</strong></h2>
        <ul>
            <li>Proven experience as a Project Manager, ideally in a tech or banking environment.</li>
            <li>Familiarity with project management tools like JIRA or Trello.</li>
            <li>Strong leadership, planning, and organizational skills.</li>
            <li>Excellent communication and interpersonal abilities.</li>
            <li>Project management certifications (PMP, Scrum Master) are a plus.</li>
        </ul>`,
    salary: 65000,
    date: 1729681667114,
    category: "Project & Operations Management",
},
{
    _id: '8',
    title: "Mobile App Developer",
    location: "Chattogram",
    level: "Mid Level",
    companyId: {
        "_id": "67111b23ca9fda8f1bf367f8",
        "name": "Shohoz Ltd.",
        "email": "career@shohoz.com",
        "image": shohoz_logo,
    },
    description: `
        <p>Shohoz Bangladesh is seeking a skilled Mobile App Developer to design and maintain Android and iOS applications. You’ll work closely with product and design teams to create smooth, engaging experiences for our users. Your contributions will directly affect millions of daily users across Bangladesh.</p>
        
        <h2><strong>What You’ll Be Doing</strong></h2>
        <ul>
            <li>Develop mobile applications for Android and iOS using Kotlin and Swift.</li>
            <li>Collaborate with designers and product managers to implement features.</li>
            <li>Ensure apps are responsive, fast, and reliable for large user bases.</li>
            <li>Debug, test, and optimize applications for performance and usability.</li>
            <li>Participate in code reviews and follow best coding practices.</li>
        </ul>
        
        <h2><strong>What We’re Looking For</strong></h2>
        <ul>
            <li>Proficiency in Kotlin (Android) or Swift (iOS).</li>
            <li>Experience with RESTful APIs and third-party SDKs.</li>
            <li>Understanding of mobile UI/UX best practices.</li>
            <li>Strong problem-solving skills and attention to detail.</li>
            <li>Familiarity with Git or other version control systems.</li>
        </ul>`,
    salary: 72000,
    date: 1729681667114,
    category: "Programming & Software Development",
},

    {
    _id: '9',
    title: "Cloud Architect",
    location: "Sylhet",
    level: "Senior Level",
    companyId: {
        "_id": "67123d56ca9fda8f1bf369a0",
        "name": "Robi Axiata Ltd.",
        "email": "career@robi.com",
        "image": robi_logo,
    },
    description: `
        <p>Robi Bangladesh is looking for a Cloud Architect to design and manage scalable cloud infrastructure. You will collaborate with engineering and DevOps teams to create secure, high-performing cloud solutions that support our growing services. Your expertise will help define our cloud strategy and optimize technology usage.</p>
        
        <h2><strong>What You’ll Be Doing</strong></h2>
        <ul>
            <li>Design and implement cloud solutions aligned with business needs.</li>
            <li>Advise on best practices for cloud architecture, deployment, and security.</li>
            <li>Collaborate with DevOps and engineering teams to enhance cloud infrastructure.</li>
            <li>Monitor cloud system performance and optimize costs.</li>
            <li>Stay updated on emerging cloud technologies and industry trends.</li>
        </ul>
        
        <h2><strong>What We’re Looking For</strong></h2>
        <ul>
            <li>Strong knowledge of AWS, Azure, or GCP.</li>
            <li>Experience with cloud architecture patterns and best practices.</li>
            <li>Familiarity with containerization and orchestration tools (Docker, Kubernetes).</li>
            <li>Excellent analytical and problem-solving skills.</li>
            <li>Relevant certifications (AWS Solutions Architect or equivalent) are a plus.</li>
        </ul>`,
    salary: 98000,
    date: 1729681667114,
    category: "Programming & Software Development",
},
{
    _id: '10',
    title: "Technical Writer",
    location: "Khulna",
    level: "Intermediate Level",
    companyId: {
        "_id": "67145f78ca9fda8f1bf370c2",
        "name": "BRAC IT Services",
        "email": "career@bracit.com",
        "image": brac_logo,
    },
    description: `
        <p>BRAC IT Services is looking for a Technical Writer to produce clear, concise, and user-friendly documentation for our software and services. You will collaborate with developers, product managers, and support teams to ensure our documentation helps users understand and efficiently use our products.</p>
        
        <h2><strong>Key Responsibilities</strong></h2>
        <ul>
            <li>Create and maintain user manuals, API documentation, and online help guides.</li>
            <li>Work closely with engineering and product teams to gather accurate information.</li>
            <li>Review and update existing documentation for accuracy and clarity.</li>
            <li>Ensure documentation is consistent with product updates and company standards.</li>
            <li>Incorporate user feedback to improve usability of technical content.</li>
        </ul>
        
        <h2><strong>Skills Required</strong></h2>
        <ul>
            <li>Proficiency in technical writing and documentation tools (e.g., MadCap Flare, Adobe FrameMaker).</li>
            <li>Strong understanding of software and technology concepts.</li>
            <li>Excellent research, analytical, and communication skills.</li>
            <li>Ability to collaborate effectively with cross-functional teams.</li>
            <li>Attention to detail and commitment to quality documentation.</li>
        </ul>`,
    salary: 75000,
    date: 1729681667114,
    category: "Content Writing & Documentation",
},

    {
    _id: '11',
    title: "Cybersecurity Analyst",
    location: "Gazipur",
    level: "Intermediate Level",
    companyId: {
        "_id": "6714ab12ca9fda8f1bf371a3",
        "name": "DataSoft Systems Bangladesh Ltd.",
        "email": "career@datasoft-bd.com",
        "image": datasoft_logo,
    },
    description: `
        <p>DataSoft Systems Bangladesh is seeking a Cybersecurity Analyst to help safeguard our systems and data. You will monitor security events, identify potential threats, and implement measures to protect our digital infrastructure. Your work will ensure that company operations remain secure and resilient against evolving cyber risks.</p>

        <h2><strong>Key Responsibilities</strong></h2>
        <ul>
            <li>Monitor networks and systems for security breaches or suspicious activities.</li>
            <li>Perform risk assessments and vulnerability analyses to enhance security posture.</li>
            <li>Implement and maintain security policies, protocols, and controls.</li>
            <li>Collaborate with IT teams to respond effectively to security incidents.</li>
            <li>Stay updated on the latest cybersecurity threats and technologies.</li>
        </ul>

        <h2><strong>Skills Required</strong></h2>
        <ul>
            <li>Good understanding of security protocols, tools, and standards.</li>
            <li>Experience with SIEM systems and incident response workflows.</li>
            <li>Knowledge of network protocols and security technologies.</li>
            <li>Strong analytical, problem-solving, and communication skills.</li>
            <li>Relevant certifications (e.g., CISSP, CEH) are a plus.</li>
        </ul>`,
    salary: 65000,
    date: 1729681667114,
    category: "Cybersecurity",
},

    {
    _id: '12',
    title: "Business Analyst",
    location: "Chattogram",
    level: "Intermediate Level",
    companyId: {
        "_id": "6715bc34ca9fda8f1bf372b5",
        "name": "Therap BD Ltd.",
        "email": "career@therapbd.com",
        "image": therap_bd,
    },
    description: `
        <p>Therap BD Ltd. is looking for a Business Analyst to help optimize our processes and improve efficiency across departments. You will work closely with stakeholders to understand business needs, gather requirements, and ensure that solutions are aligned with organizational goals.</p>

        <h2><strong>Key Responsibilities</strong></h2>
        <ul>
            <li>Gather and analyze business requirements from various stakeholders.</li>
            <li>Document workflows and business processes in detail.</li>
            <li>Work with IT and development teams to translate requirements into actionable solutions.</li>
            <li>Assist in testing and validating new systems or process improvements.</li>
            <li>Provide ongoing support, reporting, and training to ensure smooth adoption.</li>
        </ul>

        <h2><strong>Skills Required</strong></h2>
        <ul>
            <li>Strong analytical skills with keen attention to detail.</li>
            <li>Proficiency in business analysis and documentation tools (e.g., JIRA, Visio).</li>
            <li>Excellent communication and collaboration abilities.</li>
            <li>Experience in data analysis and reporting is an advantage.</li>
            <li>Familiarity with Agile methodologies is preferred.</li>
        </ul>`,
    salary: 70000,
    date: 1729681667114,
    category: "Management",
},

    {
    _id: '13',
    title: "Marketing Specialist",
    location: "Rajshahi",
    level: "Beginner Level",
    companyId: {
        "_id": "6722cd45ca9fda8f1bf362b2",
        "name": "Sheba.xyz",
        "email": "hr@sheba.xyz",
        "image":sheba_logo,
    },
    description: `
    <p>Join Sheba.xyz as a Marketing Specialist to help drive our marketing campaigns and engage with customers. You will assist in content creation, campaign execution, and social media management. Your creativity and energy will help expand our brand presence across Bangladesh.</p>
    
    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
        <li>Support the development and execution of marketing campaigns.</li>
        <li>Create content for social media, newsletters, and promotions.</li>
        <li>Conduct research to identify market trends and growth opportunities.</li>
        <li>Monitor campaign performance and provide insights for improvement.</li>
        <li>Collaborate with team members to generate new marketing ideas.</li>
    </ol>
    
    <h2><strong>Skills Required</strong></h2>
    <ol>
        <li>Basic knowledge of digital marketing principles.</li>
        <li>Strong written and verbal communication skills.</li>
        <li>Familiarity with social media platforms and marketing tools.</li>
        <li>Creative thinking and problem-solving abilities.</li>
        <li>Adaptable and eager to learn in a fast-paced environment.</li>
    </ol>`,
    salary: 77000,
    date: 1729681667114,
    category: "Marketing",
},
{
    _id: '14',
    title: "Data Scientist",
    location: "Khulna",
    level: "Senior Level",
    companyId: {
        "_id": "670e4d25ca9fda8f1bf359b9",
        "name": "Square Pharmaceuticals Ltd.",
        "email": "career@squaregroup.com",
        "image": square_logo,
    },
    description: `
    <p>Square Pharmaceuticals is hiring a Data Scientist to transform business operations through advanced analytics and predictive modeling. You will work with large-scale healthcare and business datasets to extract insights that drive innovation and efficiency.</p>
    
    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
        <li>Analyze structured and unstructured datasets to find patterns and opportunities.</li>
        <li>Develop and deploy predictive models to optimize business outcomes.</li>
        <li>Collaborate with R&D, finance, and IT teams to build data-driven solutions.</li>
        <li>Create visual reports and dashboards for management decision-making.</li>
        <li>Research and apply the latest data science methods and tools.</li>
    </ol>
    
    <h2><strong>Skills Required</strong></h2>
    <ol>
        <li>Strong expertise in Python, R, SQL, and statistical modeling.</li>
        <li>Experience with big data frameworks (Spark, Hadoop) is a plus.</li>
        <li>Knowledge of machine learning libraries (scikit-learn, TensorFlow, PyTorch).</li>
        <li>Strong business acumen with excellent problem-solving skills.</li>
        <li>Ability to clearly communicate insights to non-technical stakeholders.</li>
    </ol>`,
    salary: 92000,
    date: 1729681667114,
    category: "Data Science",
},

    {
    _id: '15',
    title: "UX/UI Designer",
    location: "Khulna",
    level: "Intermediate Level",
    companyId: {
        "_id": "670e4d25ca9fda8f1bf359d1",
        "name": "Tech Innovators Ltd",
        "email": "careers@techinnovators.com",
        "image": tech,
    },
    description: `
    <p>Tech Innovators Ltd is looking for a creative UX/UI Designer to craft engaging user experiences across our digital platforms. You will work with product managers, engineers, and stakeholders to design intuitive interfaces that enhance user satisfaction and business growth.</p>

    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
        <li>Conduct user research, surveys, and usability testing to identify pain points.</li>
        <li>Design wireframes, prototypes, and polished interfaces for mobile and web apps.</li>
        <li>Collaborate with developers to ensure accurate implementation of design systems.</li>
        <li>Continuously refine designs based on analytics and user feedback.</li>
        <li>Stay informed about modern UX/UI trends and apply them effectively.</li>
    </ol>

    <h2><strong>Skills Required</strong></h2>
    <ol>
        <li>Hands-on experience with Figma, Adobe XD, or similar design tools.</li>
        <li>Solid understanding of user-centered design principles.</li>
        <li>Knowledge of responsive, adaptive, and mobile-first design strategies.</li>
        <li>Excellent teamwork, communication, and presentation skills.</li>
        <li>A strong design portfolio highlighting mobile and web projects.</li>
    </ol>`,
    salary: 64000,
    date: 1729681667114,
    category: "UI/UX & Graphic Designing",
},

    {
    _id: '16',
    title: "DevOps Engineer",
    location: "Remote (Bangladesh)",
    level: "Senior Level",
    companyId: {
        "_id": "670e4d25ca9fda8f1bf359d2",
        "name": "NextGen Solutions",
        "email": "careers@nextgensolutions.com",
        "image": nextgen,
    },
    description: `
    <p>As a DevOps Engineer at NextGen Solutions, you will play a crucial role in enhancing our software development and deployment processes. You will work with development and operations teams to automate workflows, improve system reliability, and ensure seamless integration and delivery of applications.</p>
    
    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
        <li>Design and implement CI/CD pipelines to automate application deployment.</li>
        <li>Monitor system performance and troubleshoot issues proactively.</li>
        <li>Collaborate with development teams to improve software development lifecycle.</li>
        <li>Implement infrastructure as code using tools like Terraform or Ansible.</li>
        <li>Ensure security best practices are followed in the deployment process.</li>
    </ol>
    
    <h2><strong>Skills Required</strong></h2>
    <ol>
        <li>Strong experience with cloud platforms (AWS, Azure, or GCP).</li>
        <li>Proficiency in scripting languages such as Bash or Python.</li>
        <li>Familiarity with containerization tools like Docker and orchestration platforms like Kubernetes.</li>
        <li>Excellent troubleshooting and problem-solving skills.</li>
        <li>Relevant certifications (e.g., AWS Certified DevOps Engineer) are a plus.</li>
    </ol>`,
    salary: 74000,
    date: 1729681667114,
    category: "Programming & Software Development",
},

    {
    _id: '17',
    title: "Sales Manager",
    location: "Rangpur", 
    level: "Senior Level",
    companyId: {
        "_id": "670e4d25ca9fda8f1bf359d4",
        "name": "Bright Future Ltd", 
        "email": "careers@brightfuture.com",
        "image":bright_future,
      
    },
    description: `
    <p>Join our team as a Sales Manager at Bright Future Ltd, where you will lead our sales efforts to drive growth and increase market share. You will develop sales strategies, manage client relationships, and mentor your sales team to achieve performance goals.</p>

    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
        <li>Develop and implement strategic sales plans to achieve company objectives.</li>
        <li>Manage and lead a team of sales representatives to meet and exceed sales targets.</li>
        <li>Build and maintain strong relationships with key clients and stakeholders.</li>
        <li>Analyze sales data and market trends to identify opportunities for growth.</li>
        <li>Provide training and development opportunities for the sales team.</li>
    </ol>

    <h2><strong>Skills Required</strong></h2>
    <ol>
        <li>Proven experience in sales management and team leadership.</li>
        <li>Strong negotiation and communication skills.</li>
        <li>Ability to analyze data and make informed decisions.</li>
        <li>Experience with CRM software (e.g., Salesforce).</li>
        <li>A results-oriented mindset with a focus on meeting targets.</li>
    </ol>`,
    salary: 59000,
    date: 1729681667114,
    category: "Sales & Marketing",
},

    {
  _id: '18',
  title: "Human Resources Specialist",
  location: "Narayanganj",
  level: "Intermediate Level",
  companyId: {
    "_id": "670e4d25ca9fda8f1bf359d5",
    "name": "Enroute International Limited",
    "email": "hr@enroute-international.com",
    "image": enroute,  
  },
  description: `
    <p>As a Human Resources Specialist at Enroute International Limited, you will oversee HR operations including recruitment, employee relations, and compliance. You’ll help maintain a positive work culture and ensure our HR practices support company goals.</p>

    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
      <li>Assist with recruitment — posting jobs, screening applicants.</li>
      <li>Support employee onboarding and orientation.</li>
      <li>Manage and maintain employee records per company policy.</li>
      <li>Answer HR-related queries and guide employees professionally.</li>
      <li>Organize training and development activities.</li>
    </ol>

    <h2><strong>Skills Required</strong></h2>
    <ol>
      <li>Good knowledge of HR principles and practices.</li>
      <li>Excellent communication and interpersonal abilities.</li>
      <li>Familiarity with HR software (HRIS, ATS) is a plus.</li>
      <li>Ability to maintain confidentiality and handle sensitive matters.</li>
      <li>Strong organizational skills and attention to detail.</li>
    </ol>`,
  salary: 89000,
  date: 1729681667114,
  category: "Human Resources (HR)",
},

   {
    _id: '19',
    title: "Content Marketing Manager",
    location: "Cox's Bazar", 
    level: "Senior Level",
    companyId: {
        "_id": "670e4d25ca9fda8f1bf359d6",
        "name": "Save the Children Bangladesh", 
        "email": "careers@scb.org.bd",
        "image":  sci_logo,


    },
    description: `
    <p>We are looking for a Content Marketing Manager at Save the Children Bangladesh to lead our content strategy and execution. In this role, you will develop compelling content that engages our audience and drives awareness about our programs. You will collaborate with various teams to ensure consistent messaging across all platforms.</p>

    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
        <li>Develop and implement a content marketing strategy aligned with NGO objectives.</li>
        <li>Create and oversee the production of high-quality content for blogs, social media, and other channels.</li>
        <li>Analyze content performance and optimize strategies based on data-driven insights.</li>
        <li>Collaborate with designers and other stakeholders to ensure content aligns with visual branding.</li>
        <li>Manage the content calendar and ensure timely delivery of content.</li>
    </ol>

    <h2><strong>Skills Required</strong></h2>
    <ol>
        <li>Proven experience in content marketing and strategy development.</li>
        <li>Strong writing and editing skills with a keen eye for detail.</li>
        <li>Familiarity with SEO best practices and content management systems.</li>
        <li>Excellent analytical skills and ability to interpret data.</li>
        <li>Strong leadership and project management skills.</li>
    </ol>`,
    salary: 99000,
    date: 1729681667114,
    category: "NGO/Development",
},
{
    _id: '20',
    title: "Graphic Designer",
    location: "Mymensingh",
    level: "Intermediate Level",
    companyId: {
        "_id": "670e4d25ca9fda8f1bf359d7",
        "name": "Creative Minds Lab", 
        "email": "careers@creativeminds.com",
        "image": creative,
      
    },
    description: `
    <p>Join our creative team at Creative Minds Lab as a Graphic Designer, where you will be responsible for creating visually appealing graphics and layouts that enhance our brand identity. You will collaborate with marketing and product teams to develop creative solutions for various projects.</p>

    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
        <li>Design graphics for digital and print media, including social media, websites, and marketing materials.</li>
        <li>Collaborate with cross-functional teams to understand project requirements and objectives.</li>
        <li>Stay updated on design trends and tools to continually enhance skills and creativity.</li>
        <li>Prepare and present design concepts to stakeholders for feedback and approval.</li>
        <li>Ensure all designs align with brand guidelines and project specifications.</li>
    </ol>

    <h2><strong>Skills Required</strong></h2>
    <ol>
        <li>Proficiency in design software such as Adobe Creative Suite (Photoshop, Illustrator, InDesign).</li>
        <li>Strong understanding of design principles and typography.</li>
        <li>Ability to work on multiple projects simultaneously and meet deadlines.</li>
        <li>Excellent communication and collaboration skills.</li>
        <li>A portfolio showcasing relevant design work is required.</li>
    </ol>`,
    salary: 91000,
    date: 1729681667114,
    category: "UI/UX & Graphic Designing",
},

   {
    _id: '21',
    title: "Software Tester",
    location: "Rangpur", 
    level: "Intermediate Level",
    companyId: {
        "_id": "670e4d25ca9fda8f1bf359d8",
        "name": "TechSolutions Plex Ltd", 
        "email": "careers@techsolutionsplex.com",
        "image": techplex,
    },
    description: `
    <p>As a Software Tester at TechSolutions Plex Ltd, you will play a critical role in ensuring the quality and reliability of our software applications. You will design test cases, execute tests, and collaborate with development teams to identify and resolve defects before product release.</p>

    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
        <li>Develop and execute test plans and test cases based on software requirements.</li>
        <li>Identify, document, and track defects using bug tracking tools.</li>
        <li>Collaborate with developers to resolve issues and improve software quality.</li>
        <li>Conduct regression testing to ensure existing functionality remains intact.</li>
        <li>Participate in team meetings to provide insights on product quality and testing status.</li>
    </ol>

    <h2><strong>Skills Required</strong></h2>
    <ol>
        <li>Experience with manual and automated testing techniques.</li>
        <li>Familiarity with testing tools (e.g., Selenium, JUnit).</li>
        <li>Strong analytical and problem-solving skills.</li>
        <li>Excellent attention to detail and ability to work under tight deadlines.</li>
        <li>Good communication skills to articulate testing outcomes and challenges.</li>
    </ol>`,
    salary: 123000,
    date: 1729681667114,
    category: "Programming & Software Development",
},


   {
    _id: '22',
    title: "Network Security Engineer",
    location: "Cumilla",
    level: "Senior Level",
    companyId: {
        "_id": "670e4d25ca9fda8f1bf359e6",
        "name": "CyberShield Solutions Ltd",
        "email": "careers@cybershield.com",
        "image": cybershield,

    },
    description: `
    <p>CyberShield Solutions Ltd is seeking a Network Security Engineer to protect our IT infrastructure and ensure compliance with security policies.</p>
    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
        <li>Develop and implement security protocols for network systems.</li>
        <li>Monitor network traffic and respond to incidents.</li>
        <li>Conduct vulnerability assessments and penetration testing.</li>
        <li>Collaborate with IT teams to resolve security issues.</li>
        <li>Stay updated on security trends and technologies.</li>
    </ol>
    <h2><strong>Skills Required</strong></h2>
    <ol>
        <li>Strong knowledge of networking protocols and security technologies.</li>
        <li>Experience with firewalls, VPNs, IDS/IPS, and security tools.</li>
        <li>Certifications like CISSP, CISM, CEH preferred.</li>
        <li>Excellent analytical and troubleshooting skills.</li>
        <li>Strong communication skills.</li>
    </ol>`,
    salary: 87000,
    date: 1729681667114,
    category: "Cybersecurity",
},

   {
    _id: '23',
    title: "Cloud Engineer",
    location: "Narayanganj",
    level: "Intermediate Level",
    companyId: {
        "_id": "670e4d25ca9fda8f1bf359e7",
        "name": "CloudWave Solutions Ltd",
        "email": "careers@cloudwave.com",
        "image": cloudwave,
    },
    description: `
    <p>Join CloudWave Solutions Ltd as a Cloud Engineer to design and manage our cloud infrastructure. Collaborate with development and operations teams to ensure efficient deployment and scaling of applications.</p>
    <h2><strong>Key Responsibilities</strong></h2>
    <ol>
        <li>Design and implement cloud solutions using AWS, Azure, or Google Cloud Platform.</li>
        <li>Monitor and optimize cloud resources for performance and cost efficiency.</li>
        <li>Work with DevOps teams to automate deployment processes.</li>
        <li>Ensure cloud security and compliance with industry standards.</li>
        <li>Provide technical support and troubleshooting for cloud-based applications.</li>
    </ol>
    <h2><strong>Skills Required</strong></h2>
    <ol>
        <li>Experience with cloud platforms and services.</li>
        <li>Proficiency in scripting languages such as Python or Bash.</li>
        <li>Strong understanding of networking concepts and security.</li>
        <li>Experience with container orchestration tools like Kubernetes.</li>
        <li>Good problem-solving skills and attention to detail.</li>
    </ol>`,
    salary: 102000,
    date: 1729681667114,
    category: "Programming & Software Development",
}

];
