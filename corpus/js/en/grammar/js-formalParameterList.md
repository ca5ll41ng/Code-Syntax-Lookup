---
id: "js-en-grammar-js-formalparameterlist"
language: "js"
lang: "en"
category: "grammar"
name: "formalParameterList"
title: "ECMAScript 语法规则：formalParameterList"
directive: "rule"
module: "ecmascript"
source_url: "https://github.com/antlr/grammars-v4/tree/master/javascript/JavaScript"
license: "MIT"
updated: "2026-10-06"
---

# ECMAScript 语法规则：formalParameterList

```antlr
formalParameterList : formalParameterArg (',' formalParameterArg)* (',' lastFormalParameterArg)?
    | lastFormalParameterArg ;
```

来源：[antlr/grammars-v4 JavaScript](https://github.com/antlr/grammars-v4/tree/master/javascript/JavaScript)（依据 ECMA-262 移植）。
