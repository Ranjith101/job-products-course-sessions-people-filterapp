import React, { useState } from "react";
// import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles"; 
// import {useNavigate} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    jobListContainer: {
        maxWidth: 1200,
        margin: "0 auto",
        padding: 20,
        display: "",
        flexWrap: "wrap",
        justifyContent: "space-between",
      },
    jobListTitle: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    jobList: {
        listStyle: "none", // add this line
        padding: 0,
        margin: 0,
        
      },
      jobListItem: {
        marginBottom: 10,
        border: "1px solid #ccc",
        borderRadius: 5,
        width: "calc(100% - 10px)", // set the width to 33.33% minus the grid gap
        padding: 10,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease",
        flex: "1 0 auto", // add this line to prevent shrinking
        "&:hover": {
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        },
      },
    jobTitle: {
      fontSize: 18,
      fontWeight: "bold",
    },
    jobCompany: {
      fontSize: 14,
      marginTop: 5,
    },
    jobExperience: {
      fontSize: 14,
      marginTop: 5,
    },
    jobViewDetailsBtn: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "8px 12px",
      marginTop: 10,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#0056b3",
      },
    },
    jobDetailsPopup: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    jobDetailsPopupContent: {
      backgroundColor: "#fff",
      padding: 20,
      maxWidth: 600,
      width: "100%",
      textAlign: "center",
    },
    jobTitlePopup: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
    },
    jobDescriptionPopup: {
      fontSize: 16,
      marginBottom: 20,
    },
    jobClosePopupBtn: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "8px 12px",
      cursor: "pointer",
      margin:"5px",
      "&:hover": {
        backgroundColor: "#0056b3",
      },
    },
  }));


const JobList = ({ searchKeyword }) => {
//   const Navigate = useNavigate();
  const classes  = useStyles();  
  const [jobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "ABC Inc.",
      experience: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: "https://google.com/",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "XYZ Ltd.",
      experience: 3,
      description: "Pellentesque vitae nisi in augue gravida venenatis.",
      url: "https://google.com/",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "123 Corp.",
      experience: 5,
      description: "Vestibulum facilisis, massa id dictum congue, magna odio vehicula nisi.",
      url: "https://google.com/",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "Design Co.",
      experience: 4,
      description: "Sed euismod, sapien vel bibendum lacinia, velit sapien faucibus sapien.",
      url: "https://google.com/",
    },
    {
      id: 5,
      title: "Data Analyst",
      company: "Data Corp.",
      experience: 3,
      description: "Nulla facilisi. Sed euismod, sapien vel bibendum lacinia, velit sapien faucibus sapien.",
      url: "https://google.com/",
    },
    {
      id: 6,
      title: "Marketing Manager",
      company: "Marketing Inc.",
      experience: 6,
      description: "Pellentesque vitae nisi in augue gravida venenatis.",
      url: "https://google.com/",
    },
    {
      id: 7,
      title: "Software Engineer",
      company: "Software Co.",
      experience: 4,
      description: "Vestibulum facilisis, massa id dictum congue, magna odio vehicula nisi.",
      url: "https://google.com/",
    },
    {
      id: 8,
      title: "Product Manager",
      company: "Product Co.",
      experience: 5,
      description: "Sed euismod, sapien vel bibendum lacinia, velit sapien faucibus sapien.",
      url: "https://google.com/",
    },
    {
      id: 9,
      title: "Sales Representative",
      company: "Sales Co.",
      experience: 2,
      description: "Nulla facilisi. Sed euismod, sapien vel bibendum lacinia, velit sapien faucibus sapien.",
      url: "https://google.com/",
    },
    {
      id: 10,
      title: "Graphic Designer",
      company: "Design Co.",
      experience: 3,
      description: "Pellentesque vitae nisi in augue gravida venenatis.",
      url: "https://google.com/",
    },
    {
      id: 11,
      title: "Content Writer",
      company: "Content Co.",
      experience: 2,
      description: "Vestibulum facilisis, massa id dictum congue, magna odio vehicula nisi.",
      url: "https://google.com/",
    },
    {
      id: 12,
      title: "HR Manager",
      company: "HR Co.",
      experience: 5,
      description: "Sed euismod, sapien vel bibendum lacinia, velit sapien faucibus sapien.",
      url: "https://google.com/",
    },
  ]);

  // State to keep track of the active job for the popup
  const [activeJob, setActiveJob] = useState(null);

  // Function to handle "View Details" button click
  const handleViewDetails = (job) => {
    setActiveJob(job);
  };

  // Function to handle "Close" button click in the popup
  const handleClosePopup = () => {
    setActiveJob(null);
  };



  // Function to filter jobs based on search query
  const filterJobs = (query) => {
    return jobs.filter((job) => {
      const title = job.title.toLowerCase().includes(searchKeyword.toLowerCase());
      const company = job.company.toLowerCase().includes(searchKeyword.toLowerCase());
      const description = job.description.toLowerCase().includes(searchKeyword.toLowerCase());
      const experience = job.experience.toString().toLowerCase().includes(searchKeyword.toLowerCase())
    //   const search = query.toLowerCase().includes(searchKeyword.toLowerCase());
      return title || company || description || experience
    });
  };

  // Get the filtered jobs based on search query
  const filteredJobs = filterJobs("");


  return (
    <div className={classes.jobListContainer}>
      
      <ul className={classes.jobList}>
        {filteredJobs.map((job) => (
          <li key={job.id} className={classes.jobListItem}>
            <div className={classes.jobTitle}>{job.title}</div>
            <div className={classes.jobCompany}>{job.company}</div>
            <div className={classes.jobExperience}>{job.experience} years of experience</div>
            <button className={classes.jobViewDetailsBtn} onClick={() => handleViewDetails(job)}>
              View Details
            </button>
          </li>
        ))}
      </ul>
      {activeJob && (
        <div className={classes.jobDetailsPopup}>
       <div className={classes.jobDetailsPopupContent}>
       <h2 className={classes.jobTitlePopup}>{activeJob.title}</h2>
       <p className={classes.jobDescriptionPopup}>{activeJob.description}</p>
       
       <a href={activeJob.url} target="__blank"><button className={classes.jobClosePopupBtn} > Apply Now</button></a>
      
       <button className={classes.jobClosePopupBtn} onClick={handleClosePopup}>
       Close
       </button>
       </div>
       </div>
      )}
    </div>
  );
};

export default JobList;