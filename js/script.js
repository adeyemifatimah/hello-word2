// Business Logic
// to count number of words
function counter(sentence) {
  let counter = 0;
  let wordArray = sentence.split(" ");
  wordArray.forEach(function (element) {
    if (!Number(element) && element.trim() != "") {
      counter++
    }
  });
  return counter;
}
// number of occurences
function numberOfOccurenciesInText(word, text) {
  if (word.trim() === "") {
    return 0
  }

  // using regex to remove punctuations
  let newText = text.replace(/[!,@,(),:,,,",',.,_,-,;,&,*,#,`,?]/gi, "")






  // number of occurences in sentence
  let counter2 = 0;
  let wordArray2 = newText.split(" ");
  wordArray2.forEach(function (element) {
    if (word === element) {
      counter2++;
    }
  });

  return counter2++;
}
// to check case sensitivity


// let counter2 = 0;
//   let wordArray2 = text.split(" ")
//   wordArray2.forEach(function(element){
// if(word.toLowerCase()===element.toLowerCase()){
//   counter2++;
// }
//   });
//   return counter2++;

// for bolded words as far as element is included
function bolded(sentence, word) {
  let wordArray3 = sentence.split(" ")
  let finalSentence = "<p>"
  wordArray3.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      // to bolden only words selected
      let newElement = element.toLowerCase().replace(word.toLowerCase(), "<b>" + word + "</b>")
      finalSentence = finalSentence.concat(newElement)

    } else {
      finalSentence = finalSentence.concat(element)
    }
    // if (index != wordArray3.length - 1) {
    finalSentence = finalSentence.concat(" ")
    // }
    // to save final sentence back to it
    // finalSentence = finalSentence.concat(" ")

  });
  return finalSentence + "</p>"

}
// masked words


//   masked.forEach(function(element){
// let newMasked = element.replace(/[zoinks,moinsks,vavavoo]/gi,xxxx)
//   });
//   return newMasked
// }

// masked words
function masked(sentence) {
  let newmasked = sentence.split(" ")
  let sentences = "<p>"
  newmasked.forEach(function (element1, index) {
    let masked = ["zoinks", "moinks", "vavavoo"]

    masked.forEach(function (element2) {
      if (element1.toLowerCase().includes(element2.toLowerCase())) {
        element1 = "xxxx"
      }

    });
    sentences = sentences.concat(element1)
    if (index != newmasked.length - 1) {
      sentences = sentences.concat(" ")
    }
  });
  return sentences + "</p>"
}

// top 3 words
function top3(sentences) {
  let top = []
  let topThree = "<p>"
  sentences = sentences.toLowerCase();
  let myTop = sentences.split(" ");
  let newmyTop = [...new Set(myTop)]
  newmyTop.forEach(function (element) {
    let counter = 0
    myTop.forEach(function (elements) {
      if (element === elements) {
        counter++
      }
     
    });
    top.push([element, counter])

  });
  top.sort(function (a, b) {
    return b[1] - a[1]
  });

// for each function

  // top.forEach(function (element, index) {
  //   if (index <= 2) {
  //     topThree = topThree.concat(element[0] + ":" + element[1] + "<br>")
  //   }
   
  // });
  // topThree = topThree + "</p>"
  // return topThree

// using for loop

for(i=0; i<=top.length-1; i++){
  if(i>2){
    break ;
  }
  topThree = topThree.concat(top[i][0] + ":" + top[i][1] + "<br>")
}
topThree = topThree + "</p>"
return topThree
}
// User Interface Logic
$(document).ready(function () {
  $("#sente").submit(function (event) {
    event.preventDefault();
    let userInput = $(".tree").val();
    let userWord2 = $(".branch").val();
    let result = counter(userInput)
    let result2 = numberOfOccurenciesInText(userWord2, userInput)
    let result3 = bolded(userInput, userWord2)
    let result4 = masked(result3)
    let result5 = top3(userInput)
    $("#show").text(result);
    $("#show2").text(result2);
    $("#show3").html(result4);
    $("#show4").html(result5);




  })
})
