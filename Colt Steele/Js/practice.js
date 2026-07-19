let midterms = {
    anu: 80, nidhi: 89, subhi: 90
}
for (let p in midterms) {
    console.log(`${p.toUpperCase()} got ${midterms[p]}`);
}

midterms.anu = 99;
for (let p in midterms) {
    console.log(`${p.toUpperCase()} got ${midterms[p]}`);
}

midterms['rashmi'] = 99;
console.log(midterms.rashmi);
midterms.ajay = 100;
console.log(midterms.ajay);

const comments = [
    { username: 'tommie', text: "lololo", votes: 9 },
    { username: 'fishBoi', text: "glub glub", votes: 1234 }
];

console.log(comments[1].text);
