---
id: "java-en-grammar-classorinterfacemodifier"
language: "java"
lang: "en"
category: "grammar"
name: "classOrInterfaceModifier"
title: "JLS 语法规则：classOrInterfaceModifier"
directive: "rule"
module: "jls"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JLS 语法规则：classOrInterfaceModifier

```antlr
classOrInterfaceModifier : annotation
| PUBLIC
| PROTECTED
| PRIVATE
| STATIC
| ABSTRACT
| FINAL // FINAL for class only -- does not apply to interfaces
| STRICTFP
| SEALED
| NON_SEALED ;
```

来源：[antlr/grammars-v4 JavaParser.g4](https://github.com/antlr/grammars-v4/tree/master/java/java)（依据 JLS 移植）。
