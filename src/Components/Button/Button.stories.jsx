import React from "react"
import Button from "./Button";

export const AllButton = () => (
    <>
    <Button type="primary" onclick="button">Press me</Button>
    <Button type="success">Press me</Button>
    <Button type="danger">Press me</Button>
    </>
)
export const Primary = () => <Button type="primary" onclick="button">Press me</Button>
export const Success = () => <Button type="success">Press me</Button>
export const Danger = () => <Button type="danger">Press me</Button>


export default {
    title: "Button",
    component: Button,
}