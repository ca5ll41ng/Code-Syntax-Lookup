---
id: "java-en-grammar-primary"
language: "java"
lang: "en"
category: "grammar"
name: "primary"
title: "JLS 语法规则：primary"
directive: "rule"
module: "jls"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JLS 语法规则：primary

```antlr
primary : '(' expression ')'
| THIS
| SUPER
| literal
| identifier
| typeTypeOrVoid '.' CLASS
| nonWildcardTypeArguments (explicitGenericInvocationSuffix | THIS arguments) ;
```

来源：[antlr/grammars-v4 JavaParser.g4](https://github.com/antlr/grammars-v4/tree/master/java/java)（依据 JLS 移植）。
