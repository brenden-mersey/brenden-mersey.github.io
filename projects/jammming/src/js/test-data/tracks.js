const trackFactory = ( name = "", artist = "", album = "", id = 0 ) => {
  return {
    name,
    artist,
    album,
    id
  };
}

const tracks = [
  trackFactory( "Funny Thing", "Thundercat", "It is What It Is", 1 ),
  trackFactory( "Loverboy", "Billy Ocean", "The Very Best of Billy Ocean", 2 ),
  trackFactory( "Funky Dividends", "Three Times Dope", "Original Stylin'", 3 ),
  trackFactory( "Dirty Laundry", "Don Henley", "I Can't Stand Still", 4 ),
  trackFactory( "Sense", "MAVI", "Sense", 5 ),
  trackFactory( "Match Point Of Our Love", "The Beach Boys", "M.I.U Album", 6 ),
  trackFactory( "Stay Together For The Kids", "Blink 182", "Take Off Your Pants And Jacket", 7 )
];

export default tracks;