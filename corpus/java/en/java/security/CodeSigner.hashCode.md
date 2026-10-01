---
id: "java-en-function-codesigner-hashcode"
language: "java"
lang: "en"
category: "function"
name: "CodeSigner.hashCode"
signature: "public int hashCode()"
title: "CodeSigner.hashCode"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/CodeSigner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeSigner.hashCode

```java
public int hashCode()
```

{@return the hash code value for this code signer}
 The hash code is generated using the signer's certificate path and the
 timestamp, if present.
