---
id: "java-en-function-rulebasedcollator-compare"
language: "java"
lang: "en"
category: "function"
name: "RuleBasedCollator.compare"
signature: "public synchronized int compare(String source, String target)"
title: "RuleBasedCollator.compare"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/RuleBasedCollator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuleBasedCollator.compare

```java
public synchronized int compare(String source, String target)
```

Compares the character data stored in two different strings based on the
 collation rules.  Returns information about whether a string is less
 than, greater than or equal to another string in a language.
 This can be overridden in a subclass.

**异常**

- **NullPointerException** — if `source` or `target` is null.
