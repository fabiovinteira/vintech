'use client'

import { Button as ButtonMaterial } from "@material-tailwind/react";
import { PropsWithChildren } from "react";
 
export function Button({children}: PropsWithChildren) {
  return <ButtonMaterial onClick={() => console.log('click novo')}>{children}</ButtonMaterial>;
}
