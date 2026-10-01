---
id: "java-en-function-instantiation-getpersonalizationstring"
language: "java"
lang: "en"
category: "function"
name: "Instantiation.getPersonalizationString"
signature: "public byte[] getPersonalizationString()"
title: "Instantiation.getPersonalizationString"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DrbgParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instantiation.getPersonalizationString

```java
public byte[] getPersonalizationString()
```

Returns the personalization string as a byte array.

**返回**

- If used in `getInstance`, returns the requested personalization string as a newly allocated array, or `null` if no personalization string is requested. The same string should be returned in `getParameters` as a new copy, or `null` if no personalization string is requested in `getInstance`.
