{
  //

  // utility type

  // Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  // omit:
  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  type PersonRequired = Required<Person>;

  // Partial
  type PersonPartial = Partial<Person>;

  // Readonly
  type NameReadonly = Readonly<Person>;

  // Record
  type MyObj = Record<string, number>;

  const EmptyObj: Record<string, unknown> = {};
  

  //
}
