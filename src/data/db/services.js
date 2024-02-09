import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchCSVData() {
    const [csvData, setCsvData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCSVData = async () => {
            try {
                const response = await axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vQCYaeEDOeczGVPFeOjjCWBcCSJH9FFwT7J1uV27iwTMfj53tlUpP2zia-U7FByuFBwmchQObM61Mfu/pub?output=csv');
                const parsedCsvData = parseCSV(response.data);
                setCsvData(parsedCsvData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCSVData();

    }, []);

    function parseCSV(csvText) {
        const rows = csvText.split(/\r?\n/);
        const headers = rows[0].split(',');
        const data = [];
        for (let i = 1; i < rows.length; i++) {
            const rowData = rows[i].split(',');
            const rowObject = {};
            for (let j = 0; j < headers.length; j++) {
                rowObject[headers[j]] = rowData[j];
            }
            data.push(rowObject);
        }
        return data;
    }

    return { csvData, loading, error };
}
