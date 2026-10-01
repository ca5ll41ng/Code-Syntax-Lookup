---
id: "java-en-function-collationkey-compareto"
language: "java"
lang: "en"
category: "function"
name: "CollationKey.compareTo"
signature: "public abstract int compareTo(CollationKey target)"
title: "CollationKey.compareTo"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/CollationKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CollationKey.compareTo

```java
public abstract int compareTo(CollationKey target)
```

Compare this CollationKey to the target CollationKey. The collation rules of the
 Collator object which created these keys are applied. **Note:**
 CollationKeys created by different Collators can not be compared.

**参数**

- **target** — target CollationKey

**返回**

- Returns an integer value. Value is less than zero if this is less than target, value is zero if this and target are equal and value is greater than zero if this is greater than target.

**参见**

- java.text.Collator#compare
