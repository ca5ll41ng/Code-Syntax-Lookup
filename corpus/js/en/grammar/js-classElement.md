---
id: "js-en-grammar-js-classelement"
language: "js"
lang: "en"
category: "grammar"
name: "classElement"
title: "ECMAScript 语法规则：classElement"
directive: "rule"
module: "ecmascript"
source_url: "https://github.com/antlr/grammars-v4/tree/master/javascript/JavaScript"
license: "MIT"
updated: "2026-10-06"
---

# ECMAScript 语法规则：classElement

```antlr
classElement : (Static | {this.n("static")}? identifier)? methodDefinition
    | (Static | {this.n("static")}? identifier)? fieldDefinition
    | (Static | {this.n("static")}? identifier) block
    | emptyStatement_ ;
```

来源：[antlr/grammars-v4 JavaScript](https://github.com/antlr/grammars-v4/tree/master/javascript/JavaScript)（依据 ECMA-262 移植）。
