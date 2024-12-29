const fs = require('fs');

// Fetch and delete an account from the JSON file
function fetchAndDeleteAccount() {
    fs.readFile('accounts.json', (err, data) => {
        if (err) {
            console.error('Error reading accounts file:', err);
            return;
        }

        let accounts = JSON.parse(data);
        if (accounts.length > 0) {
            const account = accounts.shift(); // Remove the first account
            console.log(`Fetched account: ${account.username}`);
            
            // Update the JSON file after removing the account
            fs.writeFile('accounts.json', JSON.stringify(accounts, null, 2), (err) => {
                if (err) {
                    console.error('Error updating accounts file:', err);
                    return;
                }
                console.log('Updated accounts.json with remaining accounts.');
            });

            return account;
        } else {
            console.log('No accounts available.');
        }
    });
}

// Call the function to fetch and delete account
fetchAndDeleteAccount();