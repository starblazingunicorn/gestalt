// @flow strict
import Callout from './Callout';

const Valid = (
  <Callout message="Callout error message" iconAccessibilityLabel="error" type="error" />
);

// $FlowExpectedError[prop-missing]
const NonExistingProp = <Callout nonexisting={33} />;

// $FlowExpectedError[prop-missing]
const MissingProp = <Callout />;
