function numOfChanges(first,second){
  let differences = 0
  for(let i = 0; i < first.length; i++){
      if(first[i] !== second[i]){
          differences++
      }
  }
  return differences
}

function ladderLength(beginWord, endWord, words) {
  let queue = []
  let minDist = {}

  queue.push(beginWord)
  minDist[beginWord] = 1

  while(queue.length !== 0){
      let word = queue.pop();

      if(endWord === word) break;

      for(let nextWord of words){
         if(numOfChanges(word,nextWord) !== 1){
             continue;
         }

         if(nextWord in minDist){
             continue;
         }

         minDist[nextWord] = minDist[word] + 1
         queue.push(nextWord)
      }
  }

  return minDist[endWord] || 0
}



console.log(ladderLength("hit", "cog",["hot","dot","dog","lot","log","cog"]))

