---
id: "java-en-function-instantiation-getstrength"
language: "java"
lang: "en"
category: "function"
name: "Instantiation.getStrength"
signature: "public int getStrength()"
title: "Instantiation.getStrength"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DrbgParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instantiation.getStrength

```java
public int getStrength()
```

Returns the security strength in bits.

**返回**

- If used in `getInstance`, returns the minimum strength requested, or -1 if there is no specific request on the strength. If used in `getParameters`, returns the effective strength. The effective strength must be greater than or equal to the minimum strength requested.
