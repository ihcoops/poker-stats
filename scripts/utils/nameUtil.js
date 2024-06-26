//map of display names
const names = new Map([
  ["ISAAC_COOPER", "Isaac"],
  ["TYLER_YAP", "Yap"],
  ["LUKE_WOLFORD", "Wolf"],
  ["LUKE_WIELAND", "Crank"],
  ["JACK_FOX", "Fox"],
  ["BRYCE_TAYLOR", "Bryce"],
  ["AARON_HANRAHAN", "Aaron"],
  ["JUSTIN_KIM", "Kim"],
  ["REED_WILLIAMSON", "Reed"],
  ["MILES_ROBERTS", "Miles"],
  ["NICK_GALLO", "Nick"],
  ["AIDEN_WOSIAK", "Wos"],
  ["CONNOR_HENNEMAN", "Henne"],
  ["TANNER_HAUPTMAN", "Tanner"],
  ["MCKAY_WHITAKER", "McKay"],
  ["JARED_PLACE", "Jared"],
  ["CADEN", "Scoon"],
  ["LUKE_COMPTON", "Compton"],
]);

export let qualifiedPlayers = [
  "ISAAC_COOPER",
  "TYLER_YAP",
  "LUKE_WOLFORD",
  "LUKE_WIELAND",
  "JACK_FOX",
  "BRYCE_TAYLOR",
  "AARON_HANRAHAN",
  "REED_WILLIAMSON",
  "MILES_ROBERTS",
  "TANNER_HAUPTMAN",
  "MCKAY_WHITAKER",
];

export function getName(name) {
  return names.get(name);
}
