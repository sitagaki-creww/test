"use client";

import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

type Props = {
  className?: string;
};

const _Carousel = ({ className }: Props) => {
  return (
    <div className={classNames(styles.root, className)}>This is Carousel</div>
  );
};

export const Carousel = React.memo(_Carousel) as typeof _Carousel;
