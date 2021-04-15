const questions = [
    {prompt: 'What colour are apples?\n(a) Red/Green\n\
    (b) Purple\n(c) Orange',
    answer: 'a'},
    {prompt: 'What colour are bananas?\n(a) Teal\n\
    (b) Purple\n(c) Yellow',
    answer: 'c'},
    {prompt: 'What colour are strawberries?\n(a) Yellow\n\
    (b) Red\n(c) Blue',
    answer: 'a'}
]

const scores = 0;

for(let i =0; i< questions.length; i++){
    const response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        scores++;
        alert('Correct!')
    }else{
        alert('Wrong!')
    }
}