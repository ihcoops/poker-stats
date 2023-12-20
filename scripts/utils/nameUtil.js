//map of display names
const names = new Map([
    ["ISAAC_COOPER", "Isaac"],
    ["TYLER_YAP", "Yap"],
    ["LUKE_WOLFORD", "Wolf"],
    ["LUKE_WEILAND", "Crank"],
    ["JACK_FOX", "Fox"],
    ["BRYCE_TAYLOR", "Bryce"],
    ["AARON_HANRAHAN", "Aaron"],
    ["JUSTIN_KIM", "Kim"],
    ["REED_WILLIAMSON", "Reed"],
    ["MILES_ROBERTS", "Miles"],
  ]);

  export function getName(name) {
    return names.get(name);
  }