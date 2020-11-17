//Given a collection of intervals, find the maximum number of non-overlapping intervals you can select

function nonOverlappingIntervals(intervals) {

  intervals.sort((first,second) => first[1]  - second[1])
  console.log('sortedInt ->'intervals)

 let result = 1
 let lastTaken = 0

 for(let i = 1; i < intervals.length; i++){
   console.log(intervals[i])
     if(intervals[i][0] >= intervals[lastTaken][1]){
         result++
         lastTaken = i
     }
 }

 return result
}

nonOverlappingIntervals([[1,2],[2,3],[3,4],[1,3]])
