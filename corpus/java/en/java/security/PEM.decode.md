---
id: "java-en-function-pem-decode"
language: "java"
lang: "en"
category: "function"
name: "PEM.decode"
signature: "public byte[] decode()"
title: "PEM.decode"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PEM.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PEM.decode

```java
public byte[] decode()
```

Returns the Base64-decoded content as a byte array, using
 `getMimeDecoder`.

**返回**

- a newly-allocated byte array containing the decoded content

**异常**

- **IllegalArgumentException** — if decoding fails
