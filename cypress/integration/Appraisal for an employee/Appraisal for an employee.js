import { Given,When,Then, And} from 'cypress-cucumber-preprocessor/steps';
before(()=>
{
  Given('I open login page',()=>{
    cy.viewport(1024, 768);
    cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login");
    cy.login();
  })
})
   
Then('I should be able to add first employee',()=>
 {
   cy.add_employee();
   cy.add_user_details_firstemployee();
   cy.hover_mouse();
   cy.edit_user_details_firstemployee();
   cy.hover_mouse();
   cy.edit_user_job_details_firstemployee();
   
   })
   And('I should be able to add second employee',()=>
   {
    cy.add_employee();
    cy.add_user_details_secondemployee();
    cy.hover_mouse();
    cy.edit_user_details_secondemployee();
    cy.hover_mouse();
    cy.edit_user_job_details_secondemployee();
    cy.add_reporting_details();


   }) 

   And('I should be able to configure KPI',()=>
   {
    cy.add_Performance();   

   })

   And('I should be able to add performance tracker',()=>
   {
    cy.PerformanceTracker();

   })
   And('I should be able to add performance review',()=>
   {
     cy.EvaluatePerformance();

   })
  
   When('I delete both the employees',()=>
   {
    cy.delete_user();

   })
  



