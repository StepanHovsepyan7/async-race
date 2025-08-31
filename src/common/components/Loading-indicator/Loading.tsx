import React from "react";
import Icon from "../Icon/Icon";

interface Props {
  size?: number;
}
function Loading({ size = 24 }: Props) {
  return (
    <div className="animation-spin w-fit h-fit">
      <Icon name="car" size={size} />
    </div>
  );
}

export default Loading;
