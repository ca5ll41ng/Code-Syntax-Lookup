---
id: "java-en-function-instantiation-getcapability"
language: "java"
lang: "en"
category: "function"
name: "Instantiation.getCapability"
signature: "public Capability getCapability()"
title: "Instantiation.getCapability"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DrbgParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instantiation.getCapability

```java
public Capability getCapability()
```

Returns the capability.

**返回**

- If used in `getInstance`, returns the minimum capability requested. If used in `getParameters`, returns information on the effective prediction resistance flag and whether it supports reseeding.
