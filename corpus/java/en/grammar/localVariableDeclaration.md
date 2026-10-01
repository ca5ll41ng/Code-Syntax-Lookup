---
id: "java-en-grammar-localvariabledeclaration"
language: "java"
lang: "en"
category: "grammar"
name: "localVariableDeclaration"
title: "JLS 语法规则：localVariableDeclaration"
directive: "rule"
module: "jls"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JLS 语法规则：localVariableDeclaration

```antlr
localVariableDeclaration : variableModifier* (VAR identifier '=' expression | typeType variableDeclarators) ;
```

来源：[antlr/grammars-v4 JavaParser.g4](https://github.com/antlr/grammars-v4/tree/master/java/java)（依据 JLS 移植）。
