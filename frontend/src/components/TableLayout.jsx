import React from 'react';

const TableLayout = ({ bookings }) => {
    const tables = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <div>
            <h3>Table Layout</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
                {tables.map((table) => {
                    const isBooked = bookings.some((b) => b.table === table);
                    return (
                        <div
                            key={table}
                            style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: isBooked ? 'red' : 'green',
                                textAlign: 'center',
                                lineHeight: '50px',
                                color: 'white',
                            }}
                        >
                            {table}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TableLayout;
