---
id: "java-en-function-extension-encode"
language: "java"
lang: "en"
category: "function"
name: "Extension.encode"
signature: "void encode(OutputStream out) throws IOException"
title: "Extension.encode"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/Extension.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Extension.encode

```java
void encode(OutputStream out) throws IOException
```

Generates the extension's DER encoding and writes it to the output
 stream.

**参数**

- **out** — the output stream

**异常**

- **IOException** — on encoding or output error.
- **NullPointerException** — if `out` is `null`.
