---
id: "java-en-grammar-recorddeclaration"
language: "java"
lang: "en"
category: "grammar"
name: "recordDeclaration"
title: "JLS 语法规则：recordDeclaration"
directive: "rule"
module: "jls"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JLS 语法规则：recordDeclaration

```antlr
recordDeclaration : RECORD identifier typeParameters? recordHeader (IMPLEMENTS typeList)? recordBody ;
```

来源：[antlr/grammars-v4 JavaParser.g4](https://github.com/antlr/grammars-v4/tree/master/java/java)（依据 JLS 移植）。
