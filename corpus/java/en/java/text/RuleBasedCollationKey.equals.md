---
id: "java-en-function-rulebasedcollationkey-equals"
language: "java"
lang: "en"
category: "function"
name: "RuleBasedCollationKey.equals"
signature: "public boolean equals(Object target)"
title: "RuleBasedCollationKey.equals"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/RuleBasedCollationKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuleBasedCollationKey.equals

```java
public boolean equals(Object target)
```

Compare this RuleBasedCollationKey and the target for equality.
 The collation rules of the Collator object which created these keys are applied.
 **Note:** RuleBasedCollationKeys created by different Collators can not be
 compared.

**参数**

- **target** — the RuleBasedCollationKey to compare to.

**返回**

- Returns true if two objects are equal, false otherwise.
