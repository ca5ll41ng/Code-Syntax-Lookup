---
id: "js-en-grammar-js-anonymousfunction"
language: "js"
lang: "en"
category: "grammar"
name: "anonymousFunction"
title: "ECMAScript 语法规则：anonymousFunction"
directive: "rule"
module: "ecmascript"
source_url: "https://github.com/antlr/grammars-v4/tree/master/javascript/JavaScript"
license: "MIT"
updated: "2026-10-06"
---

# ECMAScript 语法规则：anonymousFunction

```antlr
anonymousFunction : functionDeclaration                                             # NamedFunction
    | Async? Function_ '*'? '(' formalParameterList? ')' functionBody # AnonymousFunctionDecl
    | Async? arrowFunctionParameters '=>' arrowFunctionBody           # ArrowFunction ;
```

来源：[antlr/grammars-v4 JavaScript](https://github.com/antlr/grammars-v4/tree/master/javascript/JavaScript)（依据 ECMA-262 移植）。
