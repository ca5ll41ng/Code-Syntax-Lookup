---
id: "java-en-function-certificate-getformat"
language: "java"
lang: "en"
category: "function"
name: "Certificate.getFormat"
signature: "public abstract String getFormat()"
title: "Certificate.getFormat"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Certificate.getFormat

```java
public abstract String getFormat()
```

Returns the name of the coding format. This is used as a hint to find
 an appropriate parser. It could be "X.509", "PGP", etc. This is
 the format produced and understood by the `encode`
 and `decode` methods.

**返回**

- the name of the coding format.
