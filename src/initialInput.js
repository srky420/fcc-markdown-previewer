// Define inital state of input
export const initalInput = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And this is another sub-heading:

This is inline code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  let variable = 'Hello, World!';
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
  return variable;
}
\`\`\`

This is **bold** text.
This is _italic_ text.
And this is **_both!_**
You can also ~~cross out text~~.

This is a [link](https://www.freecodecamp.org), and below is:
> A Block Quote!

There's also tables:

Header | Header | Header
------------ | ------------- | -------------
Content | Content | Content
More Content | More Content | More Content

- This is first level list item.
  - Second Level, by just indenting the first one.
     - Third level, indenting more.
        - Fourth Level, again adding indentation.


1. And there are numbered lists too.
1. Use numbers to create it.
1. And last but not least, there are embedded images as well:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;