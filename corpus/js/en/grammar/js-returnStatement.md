---
id: "js-en-grammar-js-returnstatement"
language: "js"
lang: "en"
category: "grammar"
name: "returnStatement"
title: "ECMAScript 语法规则：returnStatement"
directive: "rule"
module: "ecmascript"
source_url: "https://github.com/antlr/grammars-v4/tree/master/javascript/JavaScript"
license: "MIT"
updated: "2026-10-06"
---

# ECMAScript 语法规则：returnStatement

```antlr
returnStatement : Return ({this.notLineTerminator()}? expressionSequence)? eos ;
```

来源：[antlr/grammars-v4 JavaScript](https://github.com/antlr/grammars-v4/tree/master/javascript/JavaScript)（依据 ECMA-262 移植）。
