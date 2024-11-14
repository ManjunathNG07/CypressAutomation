import 'cypress-file-upload'
describe('File Uploading', () => {

    it('Single file upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('test.pdf')
        cy.get('#file-submit').click()
        cy.wait(3000)
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')


    });

    // it.only('file upload-rename', () => {
    //     cy.visit('https://the-internet.herokuapp.com/upload')

    //     cy.get('#file-upload').attachFile({filePath:'test.pdf',fileName:'myfile.pdf'})
    //     cy.get('#file-submit').click()
    //     cy.wait(3000)
    //     cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    // });

    it('file upload-drag and drop', () => {
        cy.visit('https://formstone.it/components/upload/demo/')
        cy.get('body > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1)').attachFile('example.json', { allowEmpty: true }, { subjectType: 'drag-n-drop' })
        cy.wait(5000)
    });

    it('Multiple files upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['test.pdf', 'test1.pdf'], { allowEmpty: true })
        cy.wait(5000)
        
       cy.get(':nth-child(6) > strong').should('have.text','Files You Selected:')
    });

    it.only('file upload-shadow dom', () => {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('test1.pdf',{allowEmpty:true})
        cy.wait(5000)
        cy.get('.smart-item-name', {includeShadowDom:true}).contains('test1.pdf')



    });
})