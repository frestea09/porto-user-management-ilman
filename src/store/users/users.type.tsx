export type State = {
  firstName: string;
  lastName: string;
};

export type Action = {
  updateFirstName: (firstName: State["firstName"]) => void;
  updateLastName: (lastName: State["lastName"]) => void;
};
