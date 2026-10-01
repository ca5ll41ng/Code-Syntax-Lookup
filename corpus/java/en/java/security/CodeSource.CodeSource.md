---
id: "java-en-function-codesource-codesource"
language: "java"
lang: "en"
category: "function"
name: "CodeSource.CodeSource"
signature: "public CodeSource(URL url, java.security.cert.Certificate[] certs)"
title: "CodeSource.CodeSource"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/CodeSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeSource.CodeSource

```java
public CodeSource(URL url, java.security.cert.Certificate[] certs)
```

Constructs a `CodeSource` and associates it with the specified
 location and set of certificates.

**参数**

- **url** — the location (URL).  It may be `null`.
- **certs** — the certificate(s). It may be `null`. The contents of the array are copied to protect against subsequent modification.
