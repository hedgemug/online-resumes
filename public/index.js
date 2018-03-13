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

      ],
      currentStudent: {}
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
    }
  }
};

var StudentsShowPage = {
  template: "#students-show-page",
  data: function() {
    return {
      student: {
        id: 1,    
        first_name: "Jeronimo",
        last_name: "Sedgwick",
        email: "jeronimo@mail.com",
        phone_number: "123-456789",
        linkedin_url: "ipsumdolor",
        twit_handle: "Loremipsum",
        websiteUrl: "loremweb.com",
        online_resume_url: "nisiutliquip",
        githubUrl: "github.com/loremip",
        photo: "aliquipexea",
        current_postion: "accountant",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt lectus sed nisl cursus, vel convallis sem lacinia. Phasellus ac odio sed nisl pharetra lacinia at pharetra nunc. Nullam tincidunt felis id vehicula dictum. Vivamus ullamcorper, magna vitae auctor vestibulum, risus leo feugiat sapien, a vestibulum turpis eros in ipsum. Cras tincidunt massa lectus, interdum tincidunt mi tristique non. Morbi sagittis, leo aliquam faucibus interdum, lacus nibh placerat nunc, nec rutrum est magna eget justo.",
        company: "CIA",
        job_title: "accountant",
        job_start_date: "Mar 12 2017",
        job_end_date: "July 18 2018",
        job_details: "Greaet company, highly suggest it :)",
        school: "Lorem University",
        degree: "BA-Accounting",
        education_details: "Awesome school! 10/10 would go again",
        skills: ["writing", "coding", "speaking"],
        capstone_title: "Amazing App",
        capstone_description: "It's in the title, such a good app! I promise.",
        capstone_url: "amazingloremapp.com",
        captstone_photo: "http://capstoneorthopedic.com/wp-content/uploads/2016/05/capstone_logo_transBG_white.png"
      }
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [
    { path: "/", component: StudentsIndexPage },
    { path: "/students/1", component: StudentsShowPage }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});