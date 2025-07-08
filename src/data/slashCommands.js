export const slashCommands = [
  // Text Insertion Commands
  {
    name: 'h1',
    description: 'Large heading',
    content: '# ',
  },
  {
    name: 'h2',
    description: 'Medium heading',
    content: '## ',
  },
  {
    name: 'h3',
    description: 'Small heading',
    content: '### ',
  },
  {
    name: 'list',
    description: 'Bulleted list',
    content: '- ',
  },
  {
    name: 'numbered list',
    description: 'Numbered list',
    content: '1. ',
  },
  {
    name: 'todo',
    description: 'Task checklist',
    content: '- [ ] ',
  },
  {
    name: 'quote',
    description: 'Blockquote',
    content: '> ',
  },
  {
    name: 'divider',
    description: 'Horizontal rule',
    content: '\n---\n',
  },
  {
    name: 'code',
    description: 'Code block',
    content: '```\n\n```',
  },
  {
    name: 'table',
    description: 'Insert a 3x2 table',
    content: '| Column 1 | Column 2 |\n| :--- | :--- |\n| Cell | Cell |',
  },
  {
    name: 'date',
    description: 'Insert current date',
    content: new Date().toDateString(),
  },
  // Action Commands
  {
    name: 'templates',
    description: 'Browse templates',
    action: 'open-templates',
  },
  {
    name: 'emoji',
    description: 'Pick an emoji',
    action: 'open-emojis',
  },
  {
    name: 'help',
    description: 'Open cheatsheet',
    action: 'open-help',
  },
]
