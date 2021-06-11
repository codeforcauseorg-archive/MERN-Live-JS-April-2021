class Earth {
    
  private static instance: any = null;

  static getInstance = function () {
    if (Earth.instance != null) {
      return Earth.instance;
    }

    Earth.instance = new Earth();
    return Earth.instance;
  };
}

let myearth = Earth.getInstance();
let yourearth = Earth.getInstance();

console.log(myearth === yourearth);
