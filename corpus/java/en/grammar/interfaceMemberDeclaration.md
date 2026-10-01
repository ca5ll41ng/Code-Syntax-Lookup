---
id: "java-en-grammar-interfacememberdeclaration"
language: "java"
lang: "en"
category: "grammar"
name: "interfaceMemberDeclaration"
title: "JLS 语法规则：interfaceMemberDeclaration"
directive: "rule"
module: "jls"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JLS 语法规则：interfaceMemberDeclaration

```antlr
interfaceMemberDeclaration : recordDeclaration
| constDeclaration
| interfaceMethodDeclaration
| genericInterfaceMethodDeclaration
| interfaceDeclaration
| annotationTypeDeclaration
| classDeclaration
| enumDeclaration ;
```

来源：[antlr/grammars-v4 JavaParser.g4](https://github.com/antlr/grammars-v4/tree/master/java/java)（依据 JLS 移植）。
