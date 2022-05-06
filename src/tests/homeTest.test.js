import { render } from "@testing-library/react";
import Home from "../pages/Home";

describe('Home render test', () => {
    it('snapshot test', () => {
        const component = render(<Home />);
        expect(component).toMatchSnapshot();
    });
});