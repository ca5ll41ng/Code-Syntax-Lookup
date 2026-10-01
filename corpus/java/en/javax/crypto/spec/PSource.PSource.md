---
id: "java-en-function-psource-psource"
language: "java"
lang: "en"
category: "function"
name: "PSource.PSource"
signature: "protected PSource(String pSrcName)"
title: "PSource.PSource"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/PSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PSource.PSource

```java
protected PSource(String pSrcName)
```

Constructs a source of the encoding input P for OAEP
 padding as defined in the PKCS #1 standard using the
 specified PSource algorithm.

**参数**

- **pSrcName** — the algorithm for the source of the encoding input P.

**异常**

- **NullPointerException** — if pSrcName is null.
