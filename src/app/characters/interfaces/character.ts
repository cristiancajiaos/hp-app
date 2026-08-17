export interface Character {
  id:               string;
  name:             string;
  alternate_names:  string[];
  species:          Species;
  gender:           Gender;
  house:            House;
  dateOfBirth:      null | string;
  yearOfBirth:      number | null;
  wizard:           boolean;
  ancestry:         Ancestry;
  eyeColour:        string;
  hairColour:       string;
  wand:             Wand;
  patronus:         string;
  hogwartsStudent:  boolean;
  hogwartsStaff:    boolean;
  actor:            string;
  alternate_actors: string[];
  alive:            boolean;
  image:            string;
}

export enum Ancestry {
  Empty = "",
  HalfBlood = "half-blood",
  Muggleborn = "muggleborn",
  PureBlood = "pure-blood",
}

export enum Gender {
  Female = "female",
  Male = "male",
}

export enum House {
  Gryffindor = "Gryffindor",
}

export enum Species {
  Ghost = "ghost",
  HalfGiant = "half-giant",
  Human = "human",
  Werewolf = "werewolf",
}

export interface Wand {
  wood:   string;
  core:   Core;
  length: number | null;
}

export enum Core {
  DragonHeartstring = "dragon heartstring",
  Empty = "",
  PhoenixFeather = "phoenix feather",
  PhoenixTailFeather = "phoenix tail feather",
  UnicornTailHair = "unicorn tail hair",
}
