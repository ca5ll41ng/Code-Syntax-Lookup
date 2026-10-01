---
id: "java-en-function-ellipticcurve-hashcode"
language: "java"
lang: "en"
category: "function"
name: "EllipticCurve.hashCode"
signature: "public int hashCode()"
title: "EllipticCurve.hashCode"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/EllipticCurve.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EllipticCurve.hashCode

```java
public int hashCode()
```

Returns a hash code value for this elliptic curve.

**返回**

- a hash code value computed from the hash codes of the field, A, and B, as follows:  ``` `(field.hashCode() << 6) + (a.hashCode() << 4) + (b.hashCode() << 2) ` ```
