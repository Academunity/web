module.exports = (plop) => {
  // component generator
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/component/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/component/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/component/test.tsx.hbs',
      },
    ],
  });

  plop.setGenerator('template', {
    description: 'Create a template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your template name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/template/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/template/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/templates/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/template/test.tsx.hbs',
      },
    ],
  });
};
