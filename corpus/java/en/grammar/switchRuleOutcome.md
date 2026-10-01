---
id: "java-en-grammar-switchruleoutcome"
language: "java"
lang: "en"
category: "grammar"
name: "switchRuleOutcome"
title: "JLS 语法规则：switchRuleOutcome"
directive: "rule"
module: "jls"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JLS 语法规则：switchRuleOutcome

```antlr
switchRuleOutcome : block
| blockStatement* // is *-operator correct??? I don't think so. https://docs.oracle.com/javase/specs/jls/se24/html/jls-14.html#jls-BlockStatements ;
```

来源：[antlr/grammars-v4 JavaParser.g4](https://github.com/antlr/grammars-v4/tree/master/java/java)（依据 JLS 移植）。
