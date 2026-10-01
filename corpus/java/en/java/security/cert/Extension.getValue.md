---
id: "java-en-function-extension-getvalue"
language: "java"
lang: "en"
category: "function"
name: "Extension.getValue"
signature: "byte[] getValue()"
title: "Extension.getValue"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/Extension.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Extension.getValue

```java
byte[] getValue()
```

Gets the extensions's DER-encoded value. Note, this is the bytes
 that are encoded as an OCTET STRING. It does not include the OCTET
 STRING tag and length.

**返回**

- a copy of the extension's value, or `null` if no extension value is present.
