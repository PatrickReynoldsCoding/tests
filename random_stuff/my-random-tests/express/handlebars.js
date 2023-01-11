const fill_template() { //function to call on our hbs/html
  const data = {//lines 2-10 is about creating objects to use in our html.
    title: "sixth sense handlebarts test",
    list: [
      {"name: stuff 1"},
      {"name: stuff 2"},
      {"name: stuff 3"},
      {"name: stuff 4 <b> bold </b>"},
    ]
    footer: "this is a footer"
  };
  const template = Handlebars.compile(document.querySelector("#template").innerHTML); //this compiles the DOM into a function (not a variable) called template
  const filled = template(data, {
    //handlebars options go here
    noEscape: true
    //noEscape: true lets you inigrate HTML. 'line 8'
    
  })
}