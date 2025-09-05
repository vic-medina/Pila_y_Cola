class WordCounter {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  getText(): string {
    return this.text;
  }

  counter (): Map<string, number> {
    let word = "";
    const map = new Map<string, number>();

    for (let i = 0; i < this.text.length; i++) {
      const char = this.text[i];
      
      if (char === " ") {
        console.log("primer if");
        if (map.has(word)) {
            const val = map.get(word);
            map.set(word, val! + 1);
            console.log("sumo valor");
        } else {
            map.set(word, 1);
            console.log("agrego palabra");
        }
            word = "";
      }else{
        word += char;
        console.log("sumo un char");
        console.log(word);
      }
      console.log("fin del for, se quedo un word? " + word);
    }

    //Agregar la última palabra si existe
    if (word) {
        console.log("ultimo if");
      if (map.has(word)) {
        const val = map.get(word);
        map.set(word, val!+1);
        console.log("sumo valor");
      } else {
        map.set(word, 1);
        console.log("agrego palabra");
      }
    }
    return map;
  }
}

const text = "Una vida sin pan o una vida feliz vida";
const wordCounter = new WordCounter(text);
console.log(wordCounter.getText());

const result = wordCounter.counter();

result.forEach((k, v) => {
  console.log(k, "-", v);
});