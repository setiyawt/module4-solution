var names = ["Eka", "Jen", "Jason", "joko", "Jack", "Hadi", "Jacob", "Karina"];

for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === "j") {
        byeSpeaker.speak(names[i]);
    } else {
        helloSpeaker.speak(names[i]);
    }
    }