---
id: "java-en-grammar-memberdeclaration"
language: "java"
lang: "en"
category: "grammar"
name: "memberDeclaration"
title: "JLS 语法规则：memberDeclaration"
directive: "rule"
module: "jls"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JLS 语法规则：memberDeclaration

```antlr
memberDeclaration : recordDeclaration
| methodDeclaration
| genericMethodDeclaration
| fieldDeclaration
| constructorDeclaration
| genericConstructorDeclaration
| interfaceDeclaration
| annotationTypeDeclaration
| classDeclaration
| enumDeclaration ;
```

来源：[antlr/grammars-v4 JavaParser.g4](https://github.com/antlr/grammars-v4/tree/master/java/java)（依据 JLS 移植）。
