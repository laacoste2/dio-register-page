import React from "react";

export interface IInput {
    type?: string,
    placeholder: string,
    leftIcon: React.ReactNode;
    name: any;
    control: any;
    onClick?: () => void;
}

export interface IController{
   teste:string;
}