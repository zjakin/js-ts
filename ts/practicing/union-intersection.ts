class IHaveSize {
  type: string;
  size: number;
}

class IHaveFlag {
  type: string;
  flag: boolean;
}

const getIntersectionInfo: IHaveFlag | IHaveSize =
  Math.random() > 0.5
    ? { type: "Size", size: 100 }
    : { type: "Flag", flag: true };

getIntersectionInfo.type;

const getUnionInfo: IHaveFlag & IHaveSize = {
  type: "Flag",
  flag: true,
  size: 100,
};
