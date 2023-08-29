export type Errors = {
  [k: string]: {
    status: number;
    message: string;
  };
};

export type Info = {
  [k: string]: {
    [k: string]: string;
  };
};

