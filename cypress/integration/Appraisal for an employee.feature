Feature:System should perform appraisal for an employee.
System should add employee details
Add KPI's and then perform appraisal for that employees.
Finally i should be able to delete appraisal report and finally the employee itself.
    
    
    Scenario: Appraisal of an employee
     Given I open login page
     When  I fill username with "Admin"
     And   I fill password with "admin123"
     And   I click on submit login
     Then  I should be able to add first employee
     And   I should be able to add second employee
     And   I should be able to configure KPI
     And   I should be able to add performance tracker
     And   I should be able to add performance review
     When  I delete both the employees
    

    
     
     
     
     
    

    

    
     

