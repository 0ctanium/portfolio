declare module "*.jpg" {
  export default "" as string;
}
declare module "*.png" {
  export default "" as string;
}
declare module "*.svg" {
  import React from "react";
  export default "" as React.FC<React.SVGProps<any>>;
}
