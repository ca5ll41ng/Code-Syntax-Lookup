---
id: "java-en-function-sequencelayout-withelementcount"
language: "java"
lang: "en"
category: "function"
name: "SequenceLayout.withElementCount"
signature: "SequenceLayout withElementCount(long elementCount)"
title: "SequenceLayout.withElementCount"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/SequenceLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequenceLayout.withElementCount

```java
SequenceLayout withElementCount(long elementCount)
```

{@return a sequence layout with the same characteristics of this layout, but with
          the given element count}

**参数**

- **elementCount** — the new element count

**异常**

- **IllegalArgumentException** — if `elementCount` is negative
- **IllegalArgumentException** — if `elementLayout.bitSize() * elementCount` overflows
