---
id: "java-en-function-collator-setstrength"
language: "java"
lang: "en"
category: "function"
name: "Collator.setStrength"
signature: "public synchronized void setStrength(int newStrength)"
title: "Collator.setStrength"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/Collator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collator.setStrength

```java
public synchronized void setStrength(int newStrength)
```

Sets this Collator's strength property.  The strength property determines
 the minimum level of difference considered significant during comparison.
 See the Collator class description for an example of use.

**参数**

- **newStrength** — the new strength value.

**异常**

- **IllegalArgumentException** — If the new strength value is not one of PRIMARY, SECONDARY, TERTIARY or IDENTICAL.

**参见**

- java.text.Collator#getStrength
- java.text.Collator#PRIMARY
- java.text.Collator#SECONDARY
- java.text.Collator#TERTIARY
- java.text.Collator#IDENTICAL
