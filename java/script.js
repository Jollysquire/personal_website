let course1 = { code: '1620',  name: 'Web Fundamental Technologies'}
let course2 = { code: '1630',  name: 'Database Systems'}
let course3 = { code: '1515',  name: 'Scripting for IT'}

const courseList = [course1, course2, course3]
let course_in = 0

let user;
do{
    user= prompt('Enter a course code: ')
}while(isNaN(user) || user.length !== 4);

for(let course of courseList){
    if(course.code === user.toString()){
        let code = course.code
        let name = course.name
        console.log(`Yes I am taking the course: ACIT ${code} - ${name}`)
    }
    else{
        course_in = course_in + 1
    }

}

if(course_in === 3){
    courseList.push({code: user, name: null})
    console.log(`Added the course code ${user} to the list.`)
}

