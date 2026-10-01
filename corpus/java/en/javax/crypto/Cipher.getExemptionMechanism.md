---
id: "java-en-function-cipher-getexemptionmechanism"
language: "java"
lang: "en"
category: "function"
name: "Cipher.getExemptionMechanism"
signature: "public final ExemptionMechanism getExemptionMechanism()"
title: "Cipher.getExemptionMechanism"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Cipher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Cipher.getExemptionMechanism

```java
public final ExemptionMechanism getExemptionMechanism()
```

Returns the exemption mechanism object used with this `Cipher`
 object.

**返回**

- the exemption mechanism object used with this `Cipher` object, or `null` if this `Cipher` object does not use any exemption mechanism.
