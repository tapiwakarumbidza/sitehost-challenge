// src/utils.js
export const printDomainInfo = (domains) => {
    console.log('\nDomain Information:');
    console.log('==================');
    
    domains.forEach(domain => {
        console.log(`\nDomain: ${domain.name}`);
        
        if (domain.zones && domain.zones.length > 0) {
            console.log('Zones:');
            domain.zones.forEach(zone => {
                const zoneId = zone.uri ? zone.uri.split('/').pop() : 'Not available';
                console.log(`  - Zone: ${zone.name}`);
                console.log(`    ID: ${zoneId}`);
            });
        } else {
            console.log('No zones found for this domain');
        }
    });
};

export const printRecords = (data) => {
    console.log('\nDNS Records:');
    console.log('============');
    
    if (typeof data !== 'object') {
        console.log('Raw data:', data);
        return;
    }

    const records = Array.isArray(data) ? data : data.records || [];
    
    if (records.length === 0) {
        console.log('No DNS records found');
        return;
    }

    records.forEach(record => {
        if (typeof record === 'object') {
            console.log('\nRecord:');
            Object.entries(record).forEach(([key, value]) => {
                console.log(`${key}: ${value}`);
            });
        } else {
            console.log(record);
        }
    });
};