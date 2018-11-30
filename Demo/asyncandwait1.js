async function askMe(){
    try {
        console.log('Before taking the Exam');
        let result= await willpassTheExam();
        console.log(results);
        console.log('After taking the exam')

    }catch(error){
        console.log(error)
    }
}