{
    // 

    // conditional Type
      type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
      }

      type Vehicle<T> = T extends keyof Sheikh ? true : false;

      type hasPlane = Vehicle<"plane">; // true
      type hasCar = Vehicle<"car">; // true

    // 
}