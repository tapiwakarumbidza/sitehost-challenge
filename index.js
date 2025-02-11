// index.js
import { CONFIG } from './src/config.js';
import { getDomains, getZoneRecords } from './src/api.js';
import { printDomainInfo, printRecords } from './src/utils.js';

async function main() {
    try {
        // Part 1: API Data Collection
        console.log('Fetching domain information...');
        const domains = await getDomains(CONFIG.CLIENT_ID);
        printDomainInfo(domains);

        // Look specifically for recruitment.shq.nz zone
        const recruitmentZone = domains
            .find(domain => domain.name === 'shq.nz')?.zones
            .find(zone => zone.name === 'recruitment.shq.nz');

        if (recruitmentZone) {
            const zoneId = recruitmentZone.uri.split('/').pop();
            console.log('\nFetching DNS records for recruitment.shq.nz...');
            const records = await getZoneRecords(zoneId);
            printRecords(records);
        }

        console.log('\nInvestigating website issue...');
        console.log(`Target website: ${CONFIG.WEBSITE_URL}`);
        console.log(`Server IP: ${CONFIG.SERVER_IP}`);
        
    } catch (error) {
        console.error('An error occurred:', error.message);
        process.exit(1);
    }
}

main();