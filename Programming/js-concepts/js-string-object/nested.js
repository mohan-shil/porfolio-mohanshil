const college = {
    name: 'vnc',
    class: [ '10','11','12'],
    events: ['science fair' , 'bijoy dibosh ', '21e feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

console.log(college)

college.events[1] = 'Holi Khelaaaaa';

delete college.class;

console.log(college)

console.log(college.unique.result.gpa); 
console.log(college.events[1]);

college.unique.result.merit = 'top level genius';

