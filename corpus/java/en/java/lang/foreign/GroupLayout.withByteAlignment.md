---
id: "java-en-function-grouplayout-withbytealignment"
language: "java"
lang: "en"
category: "function"
name: "GroupLayout.withByteAlignment"
signature: "GroupLayout withByteAlignment(long byteAlignment)"
title: "GroupLayout.withByteAlignment"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/GroupLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GroupLayout.withByteAlignment

```java
GroupLayout withByteAlignment(long byteAlignment)
```

{@inheritDoc}

**异常**

- **IllegalArgumentException** — {@inheritDoc}
- **IllegalArgumentException** — if `byteAlignment` is less than `M`, where `M` is the maximum alignment constraint in any of the member layouts associated with this group layout
