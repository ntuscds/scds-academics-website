---
sidebar_position: 6
---

import Profile from '@site/src/components/Profile';

# A Guide to Cybersecurity

## About the Writer

<Profile
  src="/img/docs/contributors/aidan-ling.jpg"
  alt="Aidan Ling"
  name="Aidan Ling"
  tags={["Computer Science", "Batch 2026", "Cybersecurity Engineer", "CSIT", "A*STAR"]}
  linkedinUrl="https://www.linkedin.com/in/aidanlingzy/"
/>

Hello! My name is Aidan, and I am currently an Undergraduate student studying Computer Science (Batch 2026). I have a keen interest in the field of cybersecurity, and will be sharing a bit more about what the field is about in this short guide!

As for my credentials and past experiences, I am CCNA, OSCP, and AWS-SAA-C03 Certified, and I previously interned at the Centre for Strategic Infocomm Technologies (CSIT), where I was doing cybersecurity research on Golang-based malware. For this upcoming Summer 2025, I will be interning at Apple as part of their global security operations team.

## What is Cybersecurity?

Essentially, cybersecurity is just the practice of keeping digital systems safe from attacks by external parties. In the most general sense, this field usually involves a range of different technologies, strategies and processes that are implemented on digital systems to protect sensitive information from unauthorised access or tampering, while also ensuring that these digital systems remain accessible and functional for the people who rely on them.

Cybersecurity is a pretty broad field – probably the broadest among CS-related specialisations I would say. All modern technology has some form of security aspect to it: cloud, networking, OS, software engineering, and even AI all require cybersecurity, making it a very in-demand skill set to have!

## How is this field important in today's digital landscape?

We live in a pretty digitalised world today. From online banking and healthcare records to government infrastructure and personal communication, many of the essential services we rely on are constantly under threat from malicious actors looking to disrupt them, take them down, or steal sensitive information. So naturally, being able to secure these systems is incredibly important.

Whether it's the encryption that keeps your bank transactions secure and private, or the secure coding practices that ensure government websites stay up and running, cybersecurity is working behind the scenes everywhere – making sure you can continue to safely use the digital services you depend on.

## What kinds of companies or industries need cybersecurity engineers?

I would say that any company that uses some form of IT-related product could probably benefit from having a cybersecurity engineer, whether it's in healthcare, banking, retail, or beyond. Pretty much any industry that handles data or runs digital systems needs someone to keep things secure.

If we're looking at the current landscape in Singapore, the biggest hirer of cyber talent is probably the Singaporean Government. Agencies like DSTA, CSIT, CSA, DIS, and GovTech are constantly on the lookout to expand their cybersecurity teams and strengthen our national digital defence.

The private sector offers a slew of opportunities as well. From what I have know, major banks like JPMorgan and Goldman Sachs are constantly on the lookout for cybersecurity talent (I know that BlackRock has a competitive Information Security Summer Internship Program). FAANG companies also run competitive summer internships in this space (E.g. Apple offers a dedicated Summer Internship Program for Information Security!)

## What are some available roles within this field?

I'll try to cover them as much as I understand about them.
Broadly speaking, the field can more or less be broken down into two kinds of roles: Red-Team and Blue Team.

### 1. Red-Team (Offensive Security)

- Basically it's all the "good guy hacker" stuff you see on TV. These roles are mostly focused on simulating attacks on digital systems to help organisations find and fix weaknesses before actual bad actors can exploit them.
- Common roles include:
  - **Penetration Tester/Ethical Hacker**: Primarily focused on assessing the security of digital systems by identifying vulnerabilities. This involves scanning systems for weaknesses and preparing Proof-of-Concept exploits to demonstrate how these flaws could be used to breach the system. The end goal is to present these findings to stakeholders and advise on how to fix the issues before a real attacker can exploit them.
  - **Red Team Operator**: Primarily focused on simulating real-world adversaries using advanced techniques to break into systems (with the organisation's permission, of course.) Unlike Penetration Testers, Red Team Operators aim to test the effectiveness of an organisation's internal security response, particularly how well the Blue Team detects and reacts to sophisticated, stealthy attacks, rather than simply identifying vulnerabilities.
- While Red Team roles might sound cool and represent the more "flashy" side of cybersecurity, the reality is that they're less common than Blue Team roles – mainly because defence is always a higher priority. That said, the skills required for Red Team positions are highly specialised and in demand, often commanding some of the highest salaries in the cybersecurity field.

### 2. Blue-Team (Defensive Security)

- Blue Team roles are all about defence. They are responsible for protecting systems and responding to them when they happen. These roles are more common across the industry and form the backbone of any organisation's cybersecurity efforts.
- Common roles include:
  - **Security Operations Center (SOC)/Incidence Response Analyst**: SOC Analysts monitor network traffic and systems for suspicious activity, analyse security events, respond to alerts, and escalate incidents as needed. When a security incident occurs, SOC Analysts will attempt to initiate a set of incident response plans to contain the breach, remove the threat, recover the affected systems, and finally conduct post-incident analysis to prevent future occurrences.
  - **Threat Intelligence Analyst**: Primarily focus on understanding the current and emerging threat landscape. They collect, analyse, and disseminate information about threat actors and their latest tactics, techniques, and procedures (TTPs). This intelligence helps the Blue Team proactively defend against attacks by keeping them updated. SC4016 Cyber Threat Intelligence at NTU is a great introduction to this role!
  - **Forensics Analyst**: After a significant security incident occurs, Forensic Analysts investigate the incident in detail to understand its root cause, the extent of the damage, and the actions taken by the attackers. They will collect and analyse a slew of digital evidence (E.g. Malware Samples, Malicious Software Tools, Network Logs, etc) to hopefully gleam some new information from this incident.
- There are of course more specialised variants of each of these roles (E.g. Malware Analyst/Reverse Engineer, etc) as well as a lot more security roles for different technologies (E.g. Cloud Security, AI Security, DevSecOps, etc) but what I've covered is just a broad overview of the various roles available. 

To learn more about the available careers in cybersecurity, you can view them here on the SANs Website: https://www.sans.org/cybersecurity-careers/20-coolest-cyber-security-careers/ 

## Personal Journey

### How I got started in Cybersecurity

I personally got started in cybersecurity during university (which just goes to show that it is never too late to dive into the field!). I was enrolled in Computer Science and exploring different paths to figure out what I truly wanted to pursue for my career. I tried out Software Engineering and Data Science/AI, and while they were interesting and fun, I realised those areas had become incredibly competitive (300+ Applicants per Internship WTF). With so many brilliant people in the space, I felt it would be difficult to stand out. 

That was when I shifted my focus to cybersecurity. I spent a lot of time researching the best ways to break into the field (Reading reddit posts from /r/cybersecurity and /r/netsecstudents), and I also began taking extra courses in my free time to build up the necessary skills. I think that success in cybersecurity really demands genuine passion, because many of the critical skills are not covered in a conventional computer science degree curriculum, so you have to invest significant time and effort outside of class to develop yourself independently.

### Tips on breaking into Cybersecurity

I mean I am still just an undergraduate as well, so wouldn't say I have successfully broken into the field, but my advice would be:

1. **Be Curious**
   - Cybersecurity draws on a wide range of knowledge from across the IT world. To thrive in this field, you need a genuine curiosity and a desire to learn about all kinds of technologies. The more you explore, the more effective you will become.

2. **Be Resilient** (or as OffSec would put it, Try Harder!)
   - As you progress, you will inevitably face imposter syndrome – there will always be something new or unfamiliar, and it's very easy to feel overwhelmed or doubt your abilities.
   - But remember: cybersecurity is a long journey. If you have the passion and the willingness to keep learning, success will come with consistent effort. Everyone starts somewhere – what matters is that you keep going.

## Recommended Learning Paths

### Completely No Experience

Cybersecurity requires a solid foundation before you can even begin to grasp many of the core security concepts. If you are just starting out with no prior experience, I'd recommend focusing on developing these fundamental skillsets first:

1. **Networks**
   - Understanding networks is important because so much of security revolves around how data moves across systems. When you are defending or attacking a system, you are almost always dealing with some kind of networked environment, whether it is local (like securing a company intranet) or global (like a DDOS attack over the internet).
   - I highly recommend this completely free course for the CCNA (an Associate Level certification by Cisco for understanding networks) by Jeremy's IT Lab, available on YouTube:
     - https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ 
     - This course will teach you WAY more than whatever SC2008 Computer Networks will teach you xD
   - Take the time to complete the course and fully grasp the concepts, and if you have the money to spend do try and take the CCNA, it looks very good on the resume for companies looking to hire cybersecurity talent!

2. **Operating Systems**
   - Understanding operating systems is important because a lot of times attacks occur at this layer (E.g. Malware, Privilege Escalation)
   - For the theory side, I would say SC2005 Operating Systems does a solid job at giving you a good background on how operating systems work (Especially if you are taught by Prof Arvind! Man is goated)
   - However, it would be useful to dive deeper into understanding certain features of Linux (E.g. cron, systemd, etc) and Windows (E.g. Windows Registry, etc) so that you can better understand how attacks on these systems are executed.
   - I will recommend the Linux Fundamentals and Windows Fundamentals Modules on TryHackMe as a good introduction to understanding Linux and Windows:
     - https://tryhackme.com/module/linux-fundamentals
     - https://tryhackme.com/module/windows-fundamentals

3. **Web Development** (Or at least, how web applications works)
   - Understanding web applications is important because a lot of times attacks occur at this layer (E.g. SQL Injection, IDOR, XSS, lots of web-based vulnerabilities)
   - I will recommend the Web Application Basics Module on TryHackMe as a good introduction:
     - https://tryhackme.com/room/webapplicationbasics 
   - Creating your own basic website (E.g. Portfolio Website, Instagram Clone, etc) will also help you solidify understanding of how websites work.

4. **Scripting/Programming/Terminal Use**
   - A lot of cybersecurity work involves automation – like scanning networks, parsing logs, or testing payloads. Scripting languages like Python, Bash and Powershell are essential for this.
   - Moreover, many modern software vulnerabilities stem from insecure code. If you cannot read or understand code, you won't be able to spot bugs!
   - I would recommend getting a good grasp of at least one scripting language, and one general purpose programming language. Personally, I mostly use Python for scripting and Golang for any development work.
   - If you want to eventually delve deep into more malware-based cyber roles, a solid understanding of C/C++ is also essential.
   - Also learning how to properly use a terminal is very important, as it not only speeds up your work but often times you won't have access to a nice point-and-click GUI. 
   - I would recommend playing OverTheWire: Bandit to get started on navigating a Bash Terminal environment:
     - https://overthewire.org/wargames/bandit/bandit0.html

### Delving into Cybersecurity

Once you have built a solid foundation, you can start diving deeper into cybersecurity itself. One platform I highly recommend is Hack The Box (HTB), as they offer an academy platform with structured learning paths where students can get a discounted subscription (~20 SGD per month) that grants access to nearly all of their courses: HTB Academy Learning Paths

Most people tend to start with red-team skills because they are more engaging and hands-on. Plus, the knowledge transfers well when you move into blue-team work later on. I would suggest beginning with the "Penetration Tester" path on HTB Academy – it is super comprehensive and would give you a very strong foundation in understanding common attacks on digital systems!

Once you've completed that, you can browse the platform to find other learning paths that align with your specific interests within cybersecurity.

Also, you can try out playing Capture-The-Flag (CTF) challenges on HTB. CTFs are challenges designed to test your cybersecurity skills in a hands-on way, by having you solve security-related puzzles to "capture" digital flags, which are small pieces of data that prove that you have completed the challenge. Their topics include various fields in cybersecurity, so there's always something new to learn.

If you want to further pad your resume by participating in CTF competitions, there are a few available online and can be found here: https://ctftime.org/event/list/upcoming 

## What's Next?

To stand out for internships/full-time roles, certifications are quite useful to showcase to your potential employer that you have what it takes for the role. Some of the common cybersecurity certifications you'll see are:

1. **OffSec Certified Professional (OSCP)**
   - Focused mostly on penetration testing. The course content for this certification is quite bad compared to HTB Academy, but the certification itself is very well-known and highly recognised.
   - It is also very expensive (~2000 SGD), so overall not worth unless you can really afford it.
   
2. **Certified Penetration Testing Specialist (CPTS)**
   - Focused mostly on penetration testing. Really good course content, but the certificate is not very highly recognised at the moment (but it is slowly improving!)
   - The examination for this certificate is also very hard (I failed my first attempt)
   - It is also relatively affordable (~400 SGD), so I would say quite worth

A list of various security-based certifications are available here:
https://pauljerimy.com/security-certification-roadmap/ 
You can pick and choose which certifications are right for the career/role you want in the future!

## Cybersecurity Interviews

In my personal experience, if you do all of the above you should be completely fine for any cybersecurity interview. But to further increase your chances of clinching that internship, I can recommend the following as well:

1. **Leetcode**
   - The unfortunate reality is that many companies will definitely require you to do some form of technical assessment of your coding skills (even if what they are testing you is completely unrelated to the role you're applying to)
   - So doing Leetcode (Easy to Mediums) should help you get pass the first OA and on to the interviews, where you can express your genuine interest in cybersecurity and showcase your knowledge!

2. **Personal Projects**
   - Many companies will ask about projects you've worked on, so having a cybersecurity-related personal project can be a great asset. Personally, I often talk about a project I did for SC1015 Introduction to Data Science and AI, where I used a classifier to detect malicious phishing URLs based on the characteristics of the URLs themselves. So yea school projects can also be useful, take them seriously!

3. **Security Theory**
   - Often times interviews will test you on some basic theory about cybersecurity, to ensure that you know your stuff.
   - I mainly use this Github Repository to study for interviews:
     - https://github.com/LetsDefend/SOC-Interview-Questions/tree/main 

4. **Cybersecurity News**
   - At the end of the day, cybersecurity is about defending digital systems, so staying up to date on the latest threats, vulnerabilities, and developments in the field is very crucial!
   - I have often times been asked in interviews to talk about recent security incidents that I have read about.
   - My main source of information and news is /r/cybersecurity on reddit, super useful subreddit dedicated to the discussion of the latest happenings in cybersecurity.
