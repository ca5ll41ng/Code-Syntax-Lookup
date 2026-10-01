---
id: "java-en-function-rulebasedcollator-getcollationkey"
language: "java"
lang: "en"
category: "function"
name: "RuleBasedCollator.getCollationKey"
signature: "public synchronized CollationKey getCollationKey(String source)"
title: "RuleBasedCollator.getCollationKey"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/RuleBasedCollator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuleBasedCollator.getCollationKey

```java
public synchronized CollationKey getCollationKey(String source)
```

Transforms the string into a series of characters that can be compared
 with CollationKey.compareTo. This overrides java.text.Collator.getCollationKey.
 It can be overridden in a subclass.
