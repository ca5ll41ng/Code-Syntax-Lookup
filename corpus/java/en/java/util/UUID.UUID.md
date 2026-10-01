---
id: "java-en-function-uuid-uuid"
language: "java"
lang: "en"
category: "function"
name: "UUID.UUID"
signature: "public UUID(long mostSigBits, long leastSigBits)"
title: "UUID.UUID"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/UUID.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UUID.UUID

```java
public UUID(long mostSigBits, long leastSigBits)
```

Constructs a new `UUID` using the specified data.  `mostSigBits` is used for the most significant 64 bits of the `UUID` and `leastSigBits` becomes the least significant 64 bits of
 the `UUID`.

**参数**

- **mostSigBits** — The most significant bits of the `UUID`
- **leastSigBits** — The least significant bits of the `UUID`
