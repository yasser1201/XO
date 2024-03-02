let headTitle = document.getElementById('head')
let turn = 'x';
let squares = [];
let win = document.getElementById('win');
let restart = document.getElementById('reset');



function winner(){
    for(let i = 1;i < 10;i++)
    {
        squares[i] = document.getElementById('block' + i).innerHTML;
    }
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''){
        win.style.display = 'flex';
    }
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != ''){
        win.style.display = 'flex';
    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != ''){
        win.style.display = 'flex';
    }
    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ''){
        win.style.display = 'flex';
    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != ''){
        win.style.display = 'flex';
    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != ''){
        win.style.display = 'flex';
    }
    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != ''){
        win.style.display = 'flex';
    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != ''){
        win.style.display = 'flex';
    }
}
 
function game(id){  
        let element = document.getElementById(id);

        if(turn === 'x' && element.innerHTML == ''){
            element.innerHTML = 'X';
            turn = 'o';
            headTitle.innerHTML = 'turn O'
        }
        else if(turn === 'o' && element.innerHTML == ''){
            element.innerHTML = 'O';
            turn = 'x';
            headTitle.innerHTML = 'turn X'
        }
        winner()
}

function reload(){
    location.reload()
}