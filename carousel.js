function next(){
    let image = {first:'http://127.0.0.1:5500/labs/git.png', second:'http://127.0.0.1:5500/labs/hat.png',third: 'http://127.0.0.1:5500/labs/guitar.png', term: ""};
    let src = document.getElementById("image").src;
    let flag = 0;
    console.log("works");
    console.log(image);
    for (let key in image){
        if (key == 'term'){
            document.getElementById("image").src = image['first'];
        }
        else{
            if (flag == 1){
                document.getElementById("image").src = image[key];
                console.log(image.key);
                break;
            }
            if (image[key] == src){
                flag = 1;
                console.log("came to second if");
            }
            console.log(image[key]);
            console.log(src);
        }
   `` }
   
}
function previous(){
    let image = {first:'http://127.0.0.1:5500/labs/git.png', second:'http://127.0.0.1:5500/labs/hat.png',last: 'http://127.0.0.1:5500/labs/guitar.png'};
    let index = {1:'first', 2:'second', 3:'last'};
    let src = document.getElementById("image").src;
    for (let i in index){
        if (i == 1){
            document.getElementById("image").src = image['last'];
        }
        else if ((image[index[i]] == src) && (i!=1)){
            document.getElementById("image").src = image[index[i-1]];
        
        }   
    }
}