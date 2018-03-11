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

      ]//,
      //currentProduct: {}
    };
  },
  // created: function() {
  //   axios.get("http://localhost:3000/students").then(function(response) {

  //     this.students = response.data; //array or item data
  //     console.log(response.data);

  //   }.bind(this));
  // },
  // methods: {
  //   setCurrentProduct: function(student) {
  //     this.currentProduct = student;
  //     console.log(this.currentProduct)
  //   }
  // }
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