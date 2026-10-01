---
id: "java-en-function-rulebasedcollationkey-compareto"
language: "java"
lang: "en"
category: "function"
name: "RuleBasedCollationKey.compareTo"
signature: "public int compareTo(CollationKey target)"
title: "RuleBasedCollationKey.compareTo"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/RuleBasedCollationKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuleBasedCollationKey.compareTo

```java
public int compareTo(CollationKey target)
```

Compare this RuleBasedCollationKey to target. The collation rules of the
 Collator object which created these keys are applied. **Note:**
 RuleBasedCollationKeys created by different Collators can not be compared.

**参数**

- **target** — target RuleBasedCollationKey

**返回**

- Returns an integer value. Value is less than zero if this is less than target, value is zero if this and target are equal and value is greater than zero if this is greater than target.

**参见**

- java.text.Collator#compare
