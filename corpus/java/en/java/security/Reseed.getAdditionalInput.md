---
id: "java-en-function-reseed-getadditionalinput"
language: "java"
lang: "en"
category: "function"
name: "Reseed.getAdditionalInput"
signature: "public byte[] getAdditionalInput()"
title: "Reseed.getAdditionalInput"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DrbgParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reseed.getAdditionalInput

```java
public byte[] getAdditionalInput()
```

Returns the requested additional input.

**返回**

- the requested additional input, or `null` if not requested. A new byte array is returned each time this method is called.
