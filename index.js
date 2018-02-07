class StringToArray{
    constructor(input){
        this.board = []
        this.words = input
    }

    wordsCheckLength(){
        return this.words.split(",")
    }

    printBoard(){
        let breakWords = this.wordsCheckLength()
        
        let columnLength = breakWords.length
        let rowLength = breakWords[0].length

        
        for(let i = 0; i < columnLength; i++){
            let columNest = []
            for(let j of breakWords[i]){
                columNest.push(j)
            }
            this.board.push(columNest)
        }   
    }

    hasil(){
        console.log(this.board)
    }

}
let input = "aqrst,ukaei,ffoo0"
let input2 = "qwer,tyui,ffoo"
let release0 = new StringToArray(input2
)

release0.wordsCheckLength()
release0.printBoard()
release0.hasil()

