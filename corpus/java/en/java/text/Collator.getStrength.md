---
id: "java-en-function-collator-getstrength"
language: "java"
lang: "en"
category: "function"
name: "Collator.getStrength"
signature: "public synchronized int getStrength()"
title: "Collator.getStrength"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Collator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collator.getStrength

```java
public synchronized int getStrength()
```

Returns this Collator's strength property.  The strength property determines
 the minimum level of difference considered significant during comparison.
 See the Collator class description for an example of use.

**返回**

- this Collator's current strength property.

**参见**

- java.text.Collator#setStrength
- java.text.Collator#PRIMARY
- java.text.Collator#SECONDARY
- java.text.Collator#TERTIARY
- java.text.Collator#IDENTICAL
