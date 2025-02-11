// src/api.js
import fetch from 'node-fetch';
import { CONFIG } from './config.js';

// Export the functions
export const getDomains = async (clientId) => {
    const url = `${CONFIG.API_BASE_URL}/domains/${clientId}?api_key=${CONFIG.API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching domains:', error);
        throw error;
    }
};

export const getZoneRecords = async (zoneId) => {
    const url = `${CONFIG.API_BASE_URL}/zones/${zoneId}?api_key=${CONFIG.API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Raw Zone Records Response:', JSON.stringify(data, null, 2));
        return data;
    } catch (error) {
        console.error('Error fetching zone records:', error);
        throw error;
    }
};