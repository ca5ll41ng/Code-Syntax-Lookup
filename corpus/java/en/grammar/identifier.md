---
id: "java-en-grammar-identifier"
language: "java"
lang: "en"
category: "grammar"
name: "identifier"
title: "JLS 语法规则：identifier"
directive: "rule"
module: "jls"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JLS 语法规则：identifier

```antlr
identifier : IDENTIFIER
| MODULE
| OPEN
| REQUIRES
| EXPORTS
| OPENS
| TO
| USES
| PROVIDES
| WHEN
| WITH
| TRANSITIVE
| YIELD
| SEALED
| PERMITS
| RECORD
| VAR ;
```

来源：[antlr/grammars-v4 JavaParser.g4](https://github.com/antlr/grammars-v4/tree/master/java/java)（依据 JLS 移植）。
