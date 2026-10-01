---
id: "java-en-function-rbtablebuilder-build"
language: "java"
lang: "en"
category: "function"
name: "RBTableBuilder.build"
signature: "public void build(String pattern, int decmp) throws ParseException"
title: "RBTableBuilder.build"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/RBTableBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RBTableBuilder.build

```java
public void build(String pattern, int decmp) throws ParseException
```

Create a table-based collation object with the given rules.
 This is the main function that actually builds the tables and
 stores them back in the RBCollationTables object.  It is called
 ONLY by the RBCollationTables constructor.

**异常**

- **ParseException** — If the rules format is incorrect.

**参见**

- RuleBasedCollator#RuleBasedCollator
