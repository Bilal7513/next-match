import { Button } from "@heroui/button";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Button color="primary" variant="bordered" startContent={<FaRegSmile size={20}/>}>Click me</Button>
    </div>
  );
}
