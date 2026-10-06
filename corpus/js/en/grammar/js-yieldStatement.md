---
id: "js-en-grammar-js-yieldstatement"
language: "js"
lang: "en"
category: "grammar"
name: "yieldStatement"
title: "ECMAScript 语法规则：yieldStatement"
directive: "rule"
module: "ecmascript"
source_url: "https://github.com/antlr/grammars-v4/tree/master/javascript/JavaScript"
license: "MIT"
updated: "2026-10-06"
---

# ECMAScript 语法规则：yieldStatement

```antlr
yieldStatement : (Yield | YieldStar) ({this.notLineTerminator()}? expressionSequence)? eos ;
```

来源：[antlr/grammars-v4 JavaScript](https://github.com/antlr/grammars-v4/tree/master/javascript/JavaScript)（依据 ECMA-262 移植）。
