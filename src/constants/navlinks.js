const { HOME_PAGE, ABOUT_PAGE, CONTACT_PAGE, PRODUCT_PAGE, COURSE_PAGE } = require("./routes");

const navLinks=[
    {
    label:"Home",
    route:HOME_PAGE

    },
    {
        label:"About",
        route:ABOUT_PAGE
    
    },
    {
        label:"Product",
        route:PRODUCT_PAGE
    
    }
    ,
    {
        label:"Courses",
        route:COURSE_PAGE
    
    },
    {
        label:"Contact",
        route:CONTACT_PAGE
    
    }

]
export default navLinks