function formatDate(d) {
    var OPTIONS = { day: "numeric", month: "long", year: "numeric" };
    return d.toLocaleDateString("en-GB", OPTIONS);
}

function clubMeetingDates() {
    var INITIAL_CLUB_NIGHT = new Date(2019, 6, 10);
    var ONE_WEEK = 6048e5;
    
    var d = new Date();
    d.setDate(d.getDate() + (3 + 7 - d.getDay()) % 7); // 3 = Wed
    
    var thisWed = d;
    var nextWed = new Date(thisWed.getTime() + ONE_WEEK);
    var isClubNet = Boolean((Math.floor((thisWed.getTime() - 
                                        INITIAL_CLUB_NIGHT.getTime()) / ONE_WEEK)) % 2);
    
    if (isClubNet){
        return { net: formatDate(thisWed), club: formatDate(nextWed) };
    } else {
        return { club: formatDate(thisWed), net: formatDate(nextWed) };
    }
}
