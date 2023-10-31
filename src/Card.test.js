import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function() {
  render(<Card
    caption="Test Caption"
    src="Test Source"
    currNum = {0}
    totalNum = {3}/>)
})

it("matches snapshot", function(){
  const {container} = render(<Card
    caption="Test Caption"
    src="Test Source"
    currNum = {0}
    totalNum = {3}/>)

  expect(container).toMatchSnapshot();
})