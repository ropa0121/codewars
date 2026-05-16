function areYouPlayingBanjo(name) {
  if(name.toUpperCase().charAt(0) === 'R'){
    return `${name} plays banjo`
  } else {
    return `${name} does not play banjo`
  }
}