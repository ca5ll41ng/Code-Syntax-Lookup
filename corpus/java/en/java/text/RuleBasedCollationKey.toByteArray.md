---
id: "java-en-function-rulebasedcollationkey-tobytearray"
language: "java"
lang: "en"
category: "function"
name: "RuleBasedCollationKey.toByteArray"
signature: "public byte[] toByteArray()"
title: "RuleBasedCollationKey.toByteArray"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/RuleBasedCollationKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuleBasedCollationKey.toByteArray

```java
public byte[] toByteArray()
```

Converts the RuleBasedCollationKey to a sequence of bits. If two RuleBasedCollationKeys
 could be legitimately compared, then one could compare the byte arrays
 for each of those keys to obtain the same result.  Byte arrays are
 organized most significant byte first.
