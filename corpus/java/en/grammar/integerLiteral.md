---
id: "java-en-grammar-integerliteral"
language: "java"
lang: "en"
category: "grammar"
name: "integerLiteral"
title: "JLS 语法规则：integerLiteral"
directive: "rule"
module: "jls"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JLS 语法规则：integerLiteral

```antlr
integerLiteral : DECIMAL_LITERAL
| HEX_LITERAL
| OCT_LITERAL
| BINARY_LITERAL ;
```

来源：[antlr/grammars-v4 JavaParser.g4](https://github.com/antlr/grammars-v4/tree/master/java/java)（依据 JLS 移植）。
