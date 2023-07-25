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
        </div>}
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
    ]
    
}

export default data;