---
id: "js-en-grammar-js-exportstatement"
language: "js"
lang: "en"
category: "grammar"
name: "exportStatement"
title: "ECMAScript 语法规则：exportStatement"
directive: "rule"
module: "ecmascript"
source_url: "https://github.com/antlr/grammars-v4/tree/master/javascript/JavaScript"
license: "MIT"
updated: "2026-10-06"
---

# ECMAScript 语法规则：exportStatement

```antlr
exportStatement : Export Default? (exportFromBlock | declaration) eos # ExportDeclaration
    | Export Default singleExpression eos                 # ExportDefaultDeclaration ;
```

来源：[antlr/grammars-v4 JavaScript](https://github.com/antlr/grammars-v4/tree/master/javascript/JavaScript)（依据 ECMA-262 移植）。
