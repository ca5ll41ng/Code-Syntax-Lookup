---
id: "java-en-function-pem-pem"
language: "java"
lang: "en"
category: "function"
name: "PEM.PEM"
signature: "public PEM(String type, String base64Content, byte[] leadingData)"
title: "PEM.PEM"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PEM.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PEM.PEM

```java
public PEM(String type, String base64Content, byte[] leadingData)
```

Creates a `PEM` instance with the specified type, Base64-encoded
 content string, and leading data byte array.

**参数**

- **type** — the PEM type identifier; must not contain PEM encapsulation syntax
- **base64Content** — the Base64-encoded content, excluding the PEM header and footer
- **leadingData** — data that precedes the PEM header. This array is defensively copied.

**异常**

- **IllegalArgumentException** — if `type` contains PEM encapsulation syntax
- **NullPointerException** — if any parameter is `null`
