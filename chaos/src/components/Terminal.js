import React, { useEffect, useState } from 'react';

const Terminal = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const originalLog = console.log;
        console.log = (...args) => {
            originalLog(...args);
            setLogs(prevLogs => [...prevLogs, args.join(' ')]);
        };

        return () => {
            console.log = originalLog;
        };
    }, []);

    return (
        <div className="terminal">
            {logs.map((log, index) => (
                <div key={index} className="log">{log}</div>
            ))}
        </div>
    );
};

export default Terminal;
