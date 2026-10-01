---
id: "java-en-grammar-recordcomponentlist"
language: "java"
lang: "en"
category: "grammar"
name: "recordComponentList"
title: "JLS 语法规则：recordComponentList"
directive: "rule"
module: "jls"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JLS 语法规则：recordComponentList

```antlr
recordComponentList : recordComponent (',' recordComponent)* { this.DoLastRecordComponent() }? ;
```

来源：[antlr/grammars-v4 JavaParser.g4](https://github.com/antlr/grammars-v4/tree/master/java/java)（依据 JLS 移植）。
