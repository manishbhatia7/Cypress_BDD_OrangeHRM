// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import "cypress-localstorage-commands"
import 'cypress-file-upload';
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("login",()=>
{
  When('I fill username with {string}',()=>{
    cy.get("#txtUsername").clear();
    cy.get("#txtUsername").type("Admin");
    
    })
    
    When('I fill password with {string}',()=>{
      cy.get("#txtPassword").clear();
      cy.get("#txtPassword").type("admin123");
    })
    
    And('I click on submit login',()=>{
    cy.get("#btnLogin").click();    
         
     })
     Cypress.Commands.add("add_user_details_firstemployee",()=>
     {
       cy.fixture("add_employee_1.json").then((add_emp1)=>
       {
        cy.xpath("//input[@id='firstName']").type(add_emp1.first_name);
        cy.get("#lastName").type(add_emp1.last_name);
        cy.get("#employeeId").clear().type(add_emp1.emp_id);
        cy.fileupload("hitler.png");
        cy.edit_details();
        
       })
 
     })
     Cypress.Commands.add("add_user_details_secondemployee",()=>
     {
       cy.fixture("add_employee_2.json").then((add_emp2)=>
       {
        cy.xpath("//input[@id='firstName']").type(add_emp2.first_name);
        cy.get("#lastName").type(add_emp2.last_name);
        cy.get("#employeeId").clear().type(add_emp2.emp_id);
        cy.fileupload("Mussoloni.png");
        cy.edit_details();
        
       })
 
     })
     Cypress.Commands.add("add_employee",()=>
     {
      cy.get("#menu_pim_viewPimModule",{timeout:5000}).click();
      cy.get("#btnAdd",{timeout:5000}).click();

     })
      
    Cypress.Commands.add("edit_user_details_firstemployee",()=>
    {
      cy.fixture("edit_employee1.json").then((edit_emp)=>
      {
        cy.get("#personal_txtLicenNo").type(edit_emp.license_no);
        cy.get("#personal_txtLicExpDate").type(edit_emp.license_expiry).type("{enter}");
        cy.get('[type="radio"]').first().check();
        cy.get("select[name='personal[cmbMarital]']").select(edit_emp.MaritalStatus);
        cy.get("select[name='personal[cmbNation]']").select(edit_emp.Nationality);
        cy.save_details();       

      })
      
})
Cypress.Commands.add("edit_user_details_secondemployee",()=>
{
  cy.fixture("edit_employee2.json").then((edit_emp2)=>
  {
    cy.get("#personal_txtLicenNo").type(edit_emp2.license_no);
    cy.get("#personal_txtLicExpDate").type(edit_emp2.license_expiry).type("{enter}");
    cy.get('[type="radio"]').first().check();
    cy.get("select[name='personal[cmbMarital]']").select(edit_emp2.MaritalStatus);
    cy.get("select[name='personal[cmbNation]']").select(edit_emp2.Nationality);
    cy.save_details();       

  })
  
})
Cypress.Commands.add("add_reporting_details",()=>
{
  cy.fixture("add_employee_1.json").then((add_emp11)=>
  {
    cy.xpath("//ul[@id='sidenav']").find("li").find("a").contains("Report-to").click();
    cy.get("h1").contains("Assigned Subordinates").should("be.visible");
    cy.get("#btnAddSupervisorDetail").click();
    cy.get("#reportto_supervisorName_empName").type(add_emp11.first_name).type("{enter}");
    cy.get("select[name='reportto[reportingMethodType]']").select("Direct");   
    cy.get("#btnSaveReportTo").click(); 

  })
  
})
Cypress.Commands.add("edit_details",()=>
{
  cy.get("#btnSave").click();
})

Cypress.Commands.add("save_details",()=>
{
  cy.xpath("//input[@id='btnSave']").click();
})
Cypress.Commands.add("add_details",()=>
{
  cy.get("#btnAdd").click();
})
Cypress.Commands.add("delete_details",()=>
{
  cy.get("#btnDelete").click();
})


Cypress.Commands.add("edit_user_job_details_firstemployee",()=>
    {
      cy.fixture("job_1.json").then((edit1_job)=>
      {
        cy.xpath("//ul[@id='sidenav']").find("li").find("a").contains("Job").click();
        cy.edit_details();
        cy.get("select[name='job[job_title]']").select(edit1_job.JobTitle);
        cy.get("select[name='job[emp_status]']").select(edit1_job.EmpStatus);
        cy.get("#job_joined_date").type(edit1_job.JoinDate).type("{enter}");
        cy.get("select[name='job[sub_unit]']").select(edit1_job.SubUnit);
        cy.get("#job_contract_start_date").type(edit1_job.emp_start_date).type("{enter}");
        cy.get("#job_contract_end_date").type(edit1_job.emp_end_date).type("{enter}");
        cy.save_details();            
        
      })
    })
  
    Cypress.Commands.add("edit_user_job_details_secondemployee",()=>
    {
      cy.fixture("job_2.json").then((edit2_job)=>
      {
        cy.xpath("//ul[@id='sidenav']").find("li").find("a").contains("Job").click();
        cy.edit_details();
        cy.get("select[name='job[job_title]']").select(edit2_job.JobTitle);
        cy.get("select[name='job[emp_status]']").select(edit2_job.EmpStatus);
        cy.get("#job_joined_date").type(edit2_job.JoinDate).type("{enter}");
        cy.get("select[name='job[sub_unit]']").select(edit2_job.SubUnit);
        cy.get("#job_contract_start_date").type(edit2_job.emp_start_date).type("{enter}");
        cy.get("#job_contract_end_date").type(edit2_job.emp_end_date).type("{enter}");
        cy.save_details();            
        
      })
    })

    Cypress.Commands.add("hover_mouse",()=>
    {
      cy.xpath("//input[@id='btnSave']").trigger('mouseover').click();
    })

  
     Cypress.Commands.add("add_KPI",()=>
     {
       
      cy.add_details();
       cy.fixture("kpi.json").then((kpi)=>
       {
        cy.get("select[name='defineKpi360[jobTitleCode]']").select(kpi.Title);
        cy.get("#defineKpi360_keyPerformanceIndicators").type(kpi.KPI)
        cy.get("#defineKpi360_minRating").type(kpi.Min);
        cy.get("#defineKpi360_maxRating").type(kpi.Max);
        cy.get("#saveBtn").click();
       })

     })
     Cypress.Commands.add("PerformanceTracker",()=>
     {
       cy.visit("https://opensource-demo.orangehrmlive.com/index.php/performance/addPerformanceTracker");
       cy.add_details();
       cy.get("#addPerformanceTracker_tracker_name").type("Performance tracker");
       cy.get("#addPerformanceTracker_employeeName_empName").type("Srikanth").type("{enter}");
       cy.get("select[name='addPerformanceTracker[availableEmp][]']").select(['Linda Anderson','Manish Bhatia']);
       cy.get("#btnAssignEmployee").click();
       cy.get("select[name='addPerformanceTracker[assignedEmp][]']").contains('option','Linda Anderson','Manish Bhatia');
       cy.save_details();
     })

  Cypress.Commands.add("add_Performance",()=>
  {
    cy.visit("https://opensource-demo.orangehrmlive.com/index.php/performance/searchKpi");
    cy.add_KPI();    
  })
  Cypress.Commands.add('EvaluatePerformance',()=>
  {
    cy.visit("https://opensource-demo.orangehrmlive.com/index.php/performance/searchPerformancReview");
    cy.add_details();
    cy.fixture("add_employee_2.json").then((add_2)=>
    {
      cy.get("#saveReview360Form_employee").type(add_2.first_name).type("{enter}");

    })
    cy.fixture("add_employee_1.json").then((add_1)=>
    {
      cy.get("#saveReview360Form_supervisorReviewer").type(add_1.first_name).type("{enter}");
    })
    cy.get("#saveReview360Form_workPeriodStartDate").type("2019-01-08").type("{enter}")
    cy.get("#saveReview360Form_workPeriodEndDate").type("2021-11-08").type("{enter}");
    cy.get("#saveReview360Form_dueDate").type("2021-11-08").type("{enter}");
    cy.get("#activateBtn").click();
    cy.get("a").contains("Evaluate").click();
    cy.fixture("Appraisal_form.json").then((appraisal)=>
    {
      cy.xpath("//input[@type='text' and @class='rightAlign']").type(appraisal.kpi_rating);
      cy.xpath("(//textarea[@class='comment' and @type='text'])[1]").type(appraisal.kpi)
      cy.xpath("(//textarea[@class='comment' and @type='text'])[2]").type(appraisal.general);
      cy.get("#reviewEvaluation_hrAdminComments").type(appraisal.final_comment);
      cy.get("#reviewEvaluation_finalRating").type(appraisal.final_rating);
      cy.get("#saveReview360Form_workPeriodStartDate").type(appraisal.completed_date);
      cy.get("#completeBtn").click();
      cy.contains("The review will be made read-only after completion.This action cannot be undone.Are you sure you want to continue?").should("be.visible");
      cy.get("#dialogDeleteBtn").click();       

    })    
  })
  Cypress.Commands.add('assert_appraisal_form',()=>{
    cy.get("h1").contains("Administrator Evaluation Form").should("be.visible");
    cy.get("table").contains("td","Employee Name").should("be.visible");
  })
  Cypress.Commands.add('delete_user',()=>{
    cy.get("#menu_pim_viewPimModule",{timeout:5000}).click();
    //cy.get("#menu_pim_viewEmployeeList").click();
    cy.get("#empsearch_id").type("1001");
    cy.get("#searchBtn").click();
    cy.get("[type='checkbox']").first().check();
    cy.delete_details();
    cy.get("#dialogDeleteBtn").click();
    cy.get("#empsearch_id").clear().type("5001");
    cy.get("#searchBtn").click();
    cy.get("[type='checkbox']").first().check();
    cy.delete_details();
    cy.get("#dialogDeleteBtn").click();
  })

   
Cypress.Commands.add("fileupload",(file)=>
     {
      cy.fixture(file).then(fileContent => {
        cy.get('input[type="file"]').attachFile({
            fileContent: fileContent.toString(),
            fileName: file,
            mimeType: 'image/png'
        });
    });
  })
})
