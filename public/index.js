/* global Vue, VueRouter, axios */

var StudentsIndexPage = {
  template: "#student-index-page",
  data: function() {
    return {
      students: [
        {
         id: 1,    
         student_name: "Jeronimo Sedgwick", 
         job_title: "accountant",
         email: "jeronimo@mail.com",
         phone_number: "123-456789",
         linkedin_url: "ipsumdolor",
         twit_handle: "Loremipsum",
         online_resume_url: "nisiutliquip",         
         university_title: "Duis aute irure dolor",
         photo: "aliquipexea"          
        },

        {
         id: 2, 
         student_name: "Taliquip Exeacommodo", 
         job_title: "waiter",
         email: "iruredolor@mail.com",
         phone_number: "155-456789",
         linkedin_url: "mdolor",
         twit_handle: "Poemipsumut",
         online_resume_url: "nisiutliquip",         
         university_title: "Exea Commodo Consequat",
         photo: "aliquipiouuf"          
        },

        {
         id: 3, 
         student_name: "Nimo Degwick", 
         job_title: "Senior Software Developer",
         email: "ghjtsada@mail.com",
         phone_number: "993-456789",
         linkedin_url: "sumdolorbhg",
         twit_handle: "Loremipsum",
         online_resume_url: "utllgkytiquip",
         university_title: "Aute Iruredo Lor",
         photo: "pexeafggdgs"          
        },

        {
         id: 4, 
         student_name: "Peter Pan", 
         job_title: "Software Engineer",
         email: "roadhouse@rosebud.com",
         phone_number: "993-455559",
         linkedin_url: "sumdolorbhg",
         twit_handle: "Loremipsum",
         online_resume_url: "utllgkytiquip",
         university_title: "Exea Commodo Consequat",
         photo: "yuieafggdgs"          
        },

        {
         id: 5, 
         student_name: "Mary Poppins", 
         job_title: "Data scientist",
         email: "sada@mail.com",
         phone_number: "932-456766",
         linkedin_url: "sumrbhg",
         twit_handle: "Remipsum",
         online_resume_url: "utllgkytiquip",
         university_title: "Aute Iruredo Lor",
         photo: "pexggdgs"          
        },

      ],
      currentStudent: {},
      nameFilter: "",
      jobTitleFilter: "",
      schoolFilter: "",
      sortAttribute: "student_name",
      sortAscending: true
    };
  },
  // created: function() {
  //   axios.get("http://localhost:3000/students").then(function(response) {

  //     this.students = response.data; //array or item data
  //     console.log(response.data);

  //   }.bind(this));
  // },
  methods: {
    setCurrentStudent: function(student) {
      this.currentStudent = student;
      console.log(this.currentStudent);
    },
  
    isValidStudent: function(student) {
      // return student.student_name.toLowerCase().includes(this.nameFilter.toLowerCase());
      var validName = student.student_name.toLowerCase().includes(this.nameFilter.toLowerCase());
      var validJob = student.job_title.toLowerCase().includes(this.jobTitleFilter.toLowerCase());
      var validSchool = student.university_title.toLowerCase().includes(this.schoolFilter.toLowerCase());
      return validName && validJob && validSchool;
    },
    setSortAttribute: function(attribute) {
      if(attribute !== this.sortAttribute) {
        this.sortAscending = true;
      } else {
        this.sortAscending = !this.sortAscending;
      }
      this.sortAttribute = attribute;
    }
  },
  computed: {
    sortedStudents: function() {      
      return this.students.sort(function(student1, student2) {
        if(this.sortAscending) {
          return student1[this.sortAttribute].localeCompare(student2[this.sortAttribute]);
        } else {
          return student2[this.sortAttribute].localeCompare(student1[this.sortAttribute]);
        }
      }.bind(this));
    }
  }  
};

var router = new VueRouter({
  routes: [
    { path: "/", component: StudentsIndexPage }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});