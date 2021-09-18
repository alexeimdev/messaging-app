import React, { useState } from 'react';

export function InsertBulkUsers() {
    const [bulkSize, setBulkSize] = useState(0);
    const [bulkResult, setBulkResult] = useState({});

    async function bulkUsers() {
        const response = await fetch(`/api/user/bulk/${bulkSize}`);
        const responseJson = await response.json();
        setBulkResult(responseJson);
    }

    return (
        <div>
            <label> Bulk size:
                <input value={bulkSize} onChange={(e) => setBulkSize(e.target.value)} />
            </label>
            <button type="button" onClick={bulkUsers}>Send</button>
            <div>
                <textarea cols="50" rows="20" value={JSON.stringify(bulkResult, null, 2)}></textarea>
            </div>
        </div>
    )
}