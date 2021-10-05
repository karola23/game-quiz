import components from "../components";
import Box from "../components/Box";

import withCustomBox from "./withCustomBox";

components.Box = withCustomBox((props) => <Box {...props} />);
