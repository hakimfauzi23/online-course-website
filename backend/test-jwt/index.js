const jwt = require('jsonwebtoken');

const JWT_SECRET = 'hakimfauzi_23';

// create basic token dengan proses syncronous 
// const token = jwt.sign({ data: { kelas: 'hanif mayor' } }, JWT_SECRET, { expiresIn: '5m' });
// console.log(token);

// create basic token dengan asyncronous
// jwt.sign({ data: { kelas: 'hanif mayor' } }, JWT_SECRET, { expiresIn: '5m' }, (err, token) => {
//     console.log(token);
// });


const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImtlbGFzIjoiaGFuaWYgbWF5b3IifSwiaWF0IjoxNjM5MDM5NDY1LCJleHAiOjE2MzkwMzk3NjV9.EWf0wMP8hxhvG_b8EIFRZoUve1372NBQ8BGUICRREfg';

// cara 1 
// jwt.verify(token1, JWT_SECRET, (err, decoded) => {
//     if (err) {
//         console.log(err.message);
//         return;
//     }
//     console.log(decoded);
// });

// cara 2
try {
    const decoded = jwt.verify(token1, JWT_SECRET);
    console.log(decoded);
} catch (error) {
    console.log(error);
}

