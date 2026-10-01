---
id: "java-en-function-certificate-decode"
language: "java"
lang: "en"
category: "function"
name: "Certificate.decode"
signature: "public abstract void decode(InputStream stream) throws KeyException, IOException"
title: "Certificate.decode"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Certificate.decode

```java
public abstract void decode(InputStream stream) throws KeyException, IOException
```

Decodes a certificate from an input stream. The format should be
 that returned by `getFormat` and produced by
 `encode`.

**参数**

- **stream** — the input stream from which to fetch the data being decoded.

**异常**

- **KeyException** — if the certificate is not properly initialized, or data is missing, etc.
- **IOException** — if an exception occurs while trying to input the encoded certificate from the input stream.

**参见**

- #encode
- #getFormat
