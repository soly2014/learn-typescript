# Typescript runs on during the development

- you can run ts-node filename.ts to execute it instead of node filename.js;

## typescript types

1 - primitive types = like js + void
2 - object types = [ functions,objects,arrays,classes ]

- type annotations : is code we add to tell typescript which type of value variable will refer
- type inference : typescript is trying to figure out which type of value variable refer to

## OOP

- when we make function private we don't adding any layer of security we only adding restriction for other developers
  because the may add some overrides to it .
- if you wanna override function in parent class create the function with the same name in parent class.

### Parcel in a module bundler

## differnet between `.ts` and `.d.ts` show this <https://stackoverflow.com/a/29197665>

- If you define a file with an exported interface (that will not output any js), you should do write it in a .d.ts file. In that way, it will be excluded by the compiler when generating modules.
