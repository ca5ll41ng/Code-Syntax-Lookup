---
id: "java-en-function-collator-getcollationkey"
language: "java"
lang: "en"
category: "function"
name: "Collator.getCollationKey"
signature: "public abstract CollationKey getCollationKey(String source)"
title: "Collator.getCollationKey"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Collator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collator.getCollationKey

```java
public abstract CollationKey getCollationKey(String source)
```

Transforms the String into a series of bits that can be compared bitwise
 to other CollationKeys. CollationKeys provide better performance than
 Collator.compare when Strings are involved in multiple comparisons.
 See the Collator class description for an example using CollationKeys.

**参数**

- **source** — the string to be transformed into a collation key.

**返回**

- the CollationKey for the given String based on this Collator's collation rules. If the source String is null, a null CollationKey is returned.

**参见**

- java.text.CollationKey
- java.text.Collator#compare
