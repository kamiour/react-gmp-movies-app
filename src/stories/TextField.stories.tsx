import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextField from '../components/TextField/TextField';
import { Formik } from 'formik';
import { withDarkBg } from '../../.storybook/decorators';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TextField',
  component: TextField,
  decorators: [withDarkBg],
} as ComponentMeta<typeof TextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = (args) => (
  <Formik initialValues={{ textfield: '' }} onSubmit={() => {}}>
    <TextField {...args} />
  </Formik>
);

export const Input = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Input.args = {
  label: 'Input',
  name: 'textfield',
  id: 'input-id',
  textarea: false,
  type: 'text',
  placeholder: 'Input placeholder',
};

export const Textarea = Template.bind({});
Textarea.args = {
  label: 'Textarea',
  name: 'textfield',
  id: 'textarea-id',
  textarea: true,
  placeholder: 'Textarea placeholder',
};
