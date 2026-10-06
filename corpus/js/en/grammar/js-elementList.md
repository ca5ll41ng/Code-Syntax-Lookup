---
id: "js-en-grammar-js-elementlist"
language: "js"
lang: "en"
category: "grammar"
name: "elementList"
title: "ECMAScript 语法规则：elementList"
directive: "rule"
module: "ecmascript"
source_url: "https://github.com/antlr/grammars-v4/tree/master/javascript/JavaScript"
license: "MIT"
updated: "2026-10-06"
---

# ECMAScript 语法规则：elementList

```antlr
elementList : ','* arrayElement? (','+ arrayElement) * ','* // Yes, everything is optional ;
```

来源：[antlr/grammars-v4 JavaScript](https://github.com/antlr/grammars-v4/tree/master/javascript/JavaScript)（依据 ECMA-262 移植）。
