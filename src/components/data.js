import React from 'react'
const data= {
    courses : [
        { title: 'Sept 2018 - Dec 2018', 
        cardTitle: 'Fall 2018 University of Toronto',
        cardDetailedText: "          ",
        timelineContent: 
        <div className='experience-content'>
          <ul>
            <li>CSCA08H3 Introduction to Computer Science I</li>
            <li>CSCA67H3 Discrete Mathematics</li>
            <li>MATA31H3 Calculus I for Mathematical Sciences</li>
            <li>BIOA01H3 Life on Earth: Unifying Principles</li>
            <li>CHMA10H3 Introductory Chemistry I: Structure and Bonding</li>
          </ul>
      </div>},
        { title: 'Jan 2019 - Apr 2019', 
        cardTitle: 'Winter 2019 University of Toronto',
        cardDetailedText: "          ",
        timelineContent : 
        <div className='experience-content'>
          <ul>
            <li>CSCA48H3 Introduction to Computer Science II</li>
            <li>MATA22H3 Linear Algebra I for Mathematical Sciences</li>
            <li>MATA37H3 Calculus II for Mathematical Sciences</li>
            <li>BIOA02H3 Life on Earth: Form, Function and Interactions</li>
            <li>CHMA11H3 Introductory Chemistry II</li>
          </ul>
        </div>},
        { title: 'May 2019 - July 2019 ', 
        cardTitle: 'Summer 2019 University of Toronto',
        cardDetailedText: "          ",
        timelineContent : 
        <div className='experience-content'>
          <ul>
            <li>STAB57H3 Introduction to Statistics</li>
            <li>CSCB36H3 Introduction to the Theory of Computation</li>
            <li>MATB24H3 Linear Algebra II</li>
          </ul>
        </div>},
        { title: 'Sept 2019 - July 2019 ', 
        cardTitle: 'Fall 2019 Ryerson University',
        cardDetailedText: "          ",
        timelineContent : 
        <div className='experience-content'>
          <ul>
            <li>CPS109 Computer Science I</li>
            <li>CPS213 Computer Organization I</li>
            <li>CMN300 Comm in the Computer Industry</li>
            <li>PHL214 Critical Thinking I</li>
          </ul>
        </div>},
        { title: 'Jan 2020 - Apr 2020 ', 
        cardTitle: 'Winter 2020 Ryerson University',
        cardDetailedText: "          ",
        timelineContent : 
        <div className='experience-content'>
          <ul>
            <li>CCPS 310 Computer Organization II</li>
            <li>MTH110 Discrete Mathematics I</li>
            <li>CRM101 Understanding Crime In Canada</li>
          </ul>
        </div>},
        { title: 'Sept 2020 - Dec 2020 ', 
        cardTitle: 'Fall 2020 Ryerson University',
        cardDetailedText: "          ",
        timelineContent : 
        <div className='experience-content'>
          <ul>
            <li>CPS305 Data Structures</li>
            <li>CPS393 Introduction to C and UNIX</li>
            <li>CPS406 Intro to Software Engineering</li>
            <li>CPS530 Web Systems Development</li>
          </ul>
        </div>},
        {
          title:'Jan 2021 - Apr 2021',
          cardTitle:'Winter 2021 Ryerson University',
          cardDetailedText: "          ",
          timelineContent:
          <div className='experience-content'>
            <ul>
              <li>CPS 590 Operating Systems I</li>
              <li>MTH 108 Linear Algebra </li>
              <li>CPS 412 Soc Issues, Ethics and Profess</li>
              <li>CPS 506 Comparative Prog Languages</li>
            </ul>
          </div>
        },
        {
          title:'Set 2021 - Dec 2021',
          cardTitle:'Fall 2021 Ryerson University',
          cardDetailedText: "          ",
          timelineContent:
          <div className='experience-content'>
            <ul>
              <li>CPS 510 Database Systems 1</li>
              <li>CPS 633 Computer Security</li>
              <li>CPS 721 Artificial Intelligence 1</li>
              <li>CPS 731 Software Engineer 1</li>
            </ul>
          </div>
        },
        {
          title:'Jan 2022 - Apr 2022',
          cardTitle:'Winter 2022 Ryerson University',
          cardDetailedText: "          ",
          timelineContent:
          <div className='experience-content'>
            <ul>
              <li>CPS 616 Algorithms</li>
              <li>CPS 706 Computer Networks I</li>
              <li>ENT 526 Entreprnl Behav and Strategy</li>
              <li>MTH 380 Probability and Statistics I</li>
            </ul>
          </div>
        },
        {
          title:'Jan 2023 - Apr 2023',
          cardTitle:'Winter 2023 Ryerson University',
          cardDetailedText: "          ",
          timelineContent:
          <div className='experience-content'>
            <ul>
              <li>CPS 610 Database Systems II</li>
              <li>CPS 630 Web Applications</li>
              <li>CPS 847 Software Tools for Startups</li>
              <li>MUS 505 The History of Pop Music</li>
            </ul>
          </div>
        },
      ],
    experiences : [
      { title: 'May 2022 - Dec 2022 ', 
        cardTitle: 'Ceridian - Software Developer Intern',
        cardDetailedText: "          ",
        timelineContent : 
        <div className='experience-content'>
          <h4>Import API team</h4>
          <ul>
            <li>Migration of Legacy Import Framework from SQL to the .NET framework</li>
            <li>Implemented functionality in a C#(.NET) API to validate and import data of 1000s of employees from
XML files concurrently and saved into a Microsoft SQL Server database.</li>
              <li>Implemented UI functionality for new API endpoints in React.js framework and improved user experience
for 100s of clients</li>
            <li>Collaborated with a team of 5 developers to improve API performance for acquisition of Amazon and UPS.</li>
            <li>Integrated OpenTelemetry into Import API to create logs, traces, metrics that quantify runtime of
Employee data Import through the API.</li>
              <li>Used Jaeger UI to create graphs for average runtimes for API and transaction times for SQL queries to
reveal over 20 entities that showed sub-optimal performance.</li>
              <li>
              Worked on optimizing API and reduced average import time by 5% by removing runtime overhead
caused by dynamic C# types.
              </li>
          </ul>
        </div>},
        { title: 'Sept 2023 - Apr 2023 ', 
        cardTitle: 'Ceridian - Software Developer Intern',
        cardDetailedText: " ",
        timelineContent : 
        <div className='experience-content'>
          <h4>Developer Experience team</h4>
          <ul>
            <li>Working on Migrating Azure Cloud to Github and improving developer experience through infrastructure</li>
          </ul>
        </div>}
    ],

    skills:[
      {source:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',title:'Python'},
      {source:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',title:'C#'},
      {source:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',title:'JavaScript'},
      {source:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',title:'React.js'},
      {source:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',title:'Flask'},
      {source:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",title:'.NET'},
      {source:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",title:'PyTorch'},
      {source:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Gnu-octave-logo.svg/240px-Gnu-octave-logo.svg.png",title:'Octave'},
      {source:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",title:'Microsoft SQL Server'},
      {source:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",title:'MySQL'},
      {source:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",title:'MongoDB'},
      {source:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",title:'Node'},
      {source:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",title:'HTML'},
      {source:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" ,title:'CSS'},
      {source:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",title:'Git'},
      {source:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" ,title:'Docker'},
      {source:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",title:'Azure'},
      {source:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg",title:'PyTest'},
      {source:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",title:'NumPy'},
      {source:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",title:'Linux'},
    ]
    
}

export default data;