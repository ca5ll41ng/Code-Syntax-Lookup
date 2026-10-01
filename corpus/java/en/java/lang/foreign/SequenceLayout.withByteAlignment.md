---
id: "java-en-function-sequencelayout-withbytealignment"
language: "java"
lang: "en"
category: "function"
name: "SequenceLayout.withByteAlignment"
signature: "SequenceLayout withByteAlignment(long byteAlignment)"
title: "SequenceLayout.withByteAlignment"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/SequenceLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequenceLayout.withByteAlignment

```java
SequenceLayout withByteAlignment(long byteAlignment)
```

{@inheritDoc}

**异常**

- **IllegalArgumentException** — {@inheritDoc}
- **IllegalArgumentException** — if `byteAlignment < elementLayout().byteAlignment()`
