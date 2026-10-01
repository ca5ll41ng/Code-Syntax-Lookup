---
id: "java-en-function-rsamultiprimeprivatecrtkeyspec-getotherprimeinfo"
language: "java"
lang: "en"
category: "function"
name: "RSAMultiPrimePrivateCrtKeySpec.getOtherPrimeInfo"
signature: "public RSAOtherPrimeInfo[] getOtherPrimeInfo()"
title: "RSAMultiPrimePrivateCrtKeySpec.getOtherPrimeInfo"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/RSAMultiPrimePrivateCrtKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RSAMultiPrimePrivateCrtKeySpec.getOtherPrimeInfo

```java
public RSAOtherPrimeInfo[] getOtherPrimeInfo()
```

Returns a copy of the otherPrimeInfo or null if there are
 only two prime factors (p and q).

**返回**

- the otherPrimeInfo. Returns a new array each time this method is called.
