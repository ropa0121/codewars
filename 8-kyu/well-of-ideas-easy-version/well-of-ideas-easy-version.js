function well(x){
  let goodIdeas = x.filter((word) => word === 'good');
  if(goodIdeas.length == 2 || goodIdeas.length ==1){
    return 'Publish!'
  } else if (goodIdeas.length >= 3){
    return 'I smell a series!'
  } else{
    return 'Fail!'
  }
}