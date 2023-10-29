/** @type { import('@storybook/react').Preview } */
import Center from "../src/components/Center/Center"
const preview = {
  decorators:[story => <Center>{story()}</Center>],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
