---
id: "java-en-function-ecfield-getfieldsize"
language: "java"
lang: "en"
category: "function"
name: "ECField.getFieldSize"
signature: "int getFieldSize()"
title: "ECField.getFieldSize"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/ECField.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ECField.getFieldSize

```java
int getFieldSize()
```

Returns the field size in bits. Note: For prime finite
 field ECFieldFp, size of prime p in bits is returned.
 For characteristic 2 finite field ECFieldF2m, m is returned.

**返回**

- the field size in bits.
