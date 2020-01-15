class RandomGenerator {
  constructor(quotes) {
    this.quotes = quotes;
  }

  newQuote() {
    let quotes = this.quotes;

    if (quotes.length > 0) {
      let randomNumber = Math.floor(Math.random() * quotes.length);

      return quotes[randomNumber];
    } else {
      return "Nema recenica u polju";
    }
  }
}

module.exports = RandomGenerator;
