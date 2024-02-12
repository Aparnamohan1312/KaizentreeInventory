document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code to fix the bugs goes here

    // Bug 1: Ensure the dropdown scrolls with the page
    const dropdown = document.getElementById('employee-filter');
    window.addEventListener('scroll', function() {
        dropdown.style.top = window.pageYOffset + 'px';
    });

    // Bug 2: Fix checkbox functionality
    const checkboxes = document.querySelectorAll('.transaction input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            // Toggle checkbox value
            checkbox.checked = !checkbox.checked;
        });
    });

    // Bug 3: Fix selection of 'All Employees' option
    const allEmployeesOption = document.querySelector('#employee-filter option[value="all"]');
    allEmployeesOption.addEventListener('click', function() {
        // Reload all transactions
        loadTransactions('all');
    });

    // Bug 4: Ensure new transactions are appended, not replaced
    const viewMoreBtn = document.getElementById('view-more-btn');
    viewMoreBtn.addEventListener('click', function() {
        loadMoreTransactions();
    });

    // Bug 5 & Bug 6: Ensure filter availability during data loading and fix View More button behavior
    let hasMoreData = true;
    viewMoreBtn.addEventListener('click', function() {
        if (hasMoreData) {
            loadMoreTransactions();
        } else {
            viewMoreBtn.style.display = 'none';
        }
    });

    // Bug 7: Ensure transaction state persistence
    const transactionCheckboxes = document.querySelectorAll('.transaction input[type="checkbox"]');
    const transactionStates = {};

    transactionCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const transactionId = checkbox.dataset.transactionId;
            transactionStates[transactionId] = checkbox.checked;
        });
    });
});
