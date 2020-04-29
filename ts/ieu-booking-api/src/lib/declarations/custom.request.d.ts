//Used to exptend Express Request object to contain additional bodyInstance property. Check getPlayerParams.ts
declare namespace Express {  
    export interface Request {
      bodyInstance?: any;
    }
  }