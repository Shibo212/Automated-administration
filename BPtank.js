// This code should be placed in the console of BP webpage: {https://www.bpplus.com/pages/am/InvoiceArchive.asp} to download all the pdfs without doing anything. just past this code.
// Find all PDFs that match the query selector
const pdf = document.querySelectorAll("tr td [src='/images/efs/pdf.jpg']");

// Function to click on an PDF with a delay 10 sec to download it
function clickWithDelay(index) {
    if (index < pdf.length) {
        pdf[index].click();  // Simulate the click
        console.log(`Clicked on PDF ${index + 1}`);

        // Set a 10-second delay before clicking the next element
        setTimeout(() => clickWithDelay(index + 1), 10000);
    } else {
        console.log("All PDF's have been clicked And downloaded.");
    }
}

// Start the clicking process with the first PDF
clickWithDelay(0);
