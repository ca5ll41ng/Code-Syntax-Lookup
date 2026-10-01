---
id: "java-en-function-keyrep-keyrep"
language: "java"
lang: "en"
category: "function"
name: "KeyRep.KeyRep"
signature: "public KeyRep(Type type, String algorithm, String format, byte[] encoded)"
title: "KeyRep.KeyRep"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyRep.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyRep.KeyRep

```java
public KeyRep(Type type, String algorithm, String format, byte[] encoded)
```

Construct the alternate Key class.

**参数**

- **type** — either one of Type.SECRET, Type.PUBLIC, or Type.PRIVATE
- **algorithm** — the algorithm returned from `Key.getAlgorithm()`
- **format** — the encoding format returned from `Key.getFormat()`
- **encoded** — the encoded bytes returned from `Key.getEncoded()`

**异常**

- **NullPointerException** — if type is `null`, if algorithm is `null`, if format is `null`, or if encoded is `null`
