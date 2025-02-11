# SiteHost Technical Challenge Solution

This project contains my solution to the SiteHost recruitment challenge, which involves working with APIs and troubleshooting a website access issue.

## Project Structure

```
sitehost-challenge/
├── src/
│   ├── config.js      # Configuration constants
│   ├── api.js         # API interaction functions
│   └── utils.js       # Utility functions for data display
├── index.js           # Main application entry point
├── reply.md          # Customer response
└── README.md         # This file
```

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/sitehost-hiring/hiring-test-2819]
   cd sitehost-challenge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Solution

To run the application:
```bash
node index.js
```

This will:
1. Fetch domain information for Business Systems International
2. Display domain and DNS information
3. Provide instructions for accessing the website

## Part 1: API Implementation

The solution implements API calls to:
- Fetch domains for client ID 100 (Business Systems International)
- Retrieve DNS records for each domain's zones
- Display the information in a readable format

## Part 2: Website Access

To access the website:
1. Add this entry to your hosts file:
   ```
   120.138.30.179 site.recruitment.shq.nz
   ```
2. Access https://site.recruitment.shq.nz in your browser
3. View page source to find the hidden code

## Files Description

- `src/config.js`: Contains configuration values like API URLs and keys
- `src/api.js`: Implements API interaction functions
- `src/utils.js`: Contains utility functions for formatting and displaying data
- `index.js`: Main application logic
- `reply.md`: Response to the customer explaining the issue and solution

## Testing

Run the application to verify:
1. API data retrieval functionality
2. Website accessibility after hosts file modification
3. Hidden code retrieval from website source

## Technologies Used

- Node.js
- node-fetch for API calls
- ES Modules for code organization

## Author

Tapiwa 

## Notes

- The API key is included for demonstration purposes
- SSL certificate warnings are expected when accessing the IP directly
- DNS modification requires administrative privileges"Minor update to trigger PR" 
