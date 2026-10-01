---
id: "java-en-grammar-literal"
language: "java"
lang: "en"
category: "grammar"
name: "literal"
title: "JLS 语法规则：literal"
directive: "rule"
module: "jls"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JLS 语法规则：literal

```antlr
literal : integerLiteral
| floatLiteral
| CHAR_LITERAL
| STRING_LITERAL
| BOOL_LITERAL
| NULL_LITERAL
| TEXT_BLOCK ;
```

来源：[antlr/grammars-v4 JavaParser.g4](https://github.com/antlr/grammars-v4/tree/master/java/java)（依据 JLS 移植）。
