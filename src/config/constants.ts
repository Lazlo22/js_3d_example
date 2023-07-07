import swatch from "../assets/swatch.png";
import ai from "../assets/ai.png";
import fileIcon from "../assets/file.png";
import logoShirt from "../assets/logo-tshirt.png";
import stylishShirt from "../assets/stylish-tshirt.png";
import { ActiveFilterTab, ImageType } from "../pages/Customizer";

export type EditorFilter = {
    name: string;
    icon: string;
}

type FilterTabs = {
  name: ActiveFilterTab;
  icon: string;
};

type DecalTypeItem = {
  stateProperty: "logoDecal" | "fullDecal";
  filterTab: ActiveFilterTab;
};

type DecalType = Record<ImageType, DecalTypeItem>;

export const EditorTabs: EditorFilter[] = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs: FilterTabs[] = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DecalTypes: DecalType = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
