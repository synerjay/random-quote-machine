const { Component } = React;
const { render } = ReactDOM;
class RandomQuoteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: 1 };

    this.generate = this.generate.bind(this);
  }

  generate() {
    let randomNumber = Math.floor(Math.random() * 7);
    if (this.state.randomIndex !== randomNumber) {
      this.setState({
        randomIndex: randomNumber });

    }
  }

  render() {
    const quoteArray = [
    ["Quality is not an act, it is a habit.", "Aristotle"],
    [
    "The only person you are destined to become is the person you decide to be.",
    "Ralph Waldo Emerson"],

    ["The best revenge is massive success.", "Frank Sinatra"],
    ["Life shrinks or expands in proportion with one's courage.", "Unknown"],
    [
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change",
    "Charles Darwin"],

    [
    "Start where you are. Use what you have. Do what you can.",
    "Arthur Ashe"],

    [
    "Computers are good at following instructions, but not at reading your mind.",
    "Donald Knuth"]];


    const newQuote = quoteArray[this.state.randomIndex][0];
    const newPerson = quoteArray[this.state.randomIndex][1];
    const tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${newQuote} - ${newPerson}`;

    return /*#__PURE__*/(
      React.createElement("div", { className: "wrapper d-flex align-items-center justify-content-center" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6 box p-5 rounded", id: "quote-box" }, /*#__PURE__*/React.createElement("i", { class: "fas fa-quote-left" }), /*#__PURE__*/React.createElement("p", { id: "text" }, newQuote), /*#__PURE__*/
      React.createElement("p", { id: "author" }, " - ", newPerson), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("div", { class: "d-grid gap-4 d-md-flex justify-content-around" }, /*#__PURE__*/
      React.createElement("button", { className: "btn btn-primary me-md-2", id: "new-quote", onClick: this.generate }, "New Quote"), /*#__PURE__*/


      React.createElement("a", { className: "btn btn-secondary", target: "_top", id: "tweet-quote", href: tweetURL }, /*#__PURE__*/React.createElement("i", { className: "fab fa-twitter" }), " Share")))));




    console.log(newQuote);
  }}


ReactDOM.render( /*#__PURE__*/React.createElement(RandomQuoteButton, null), document.getElementById("myinput"));