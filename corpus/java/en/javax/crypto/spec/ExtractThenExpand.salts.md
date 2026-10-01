---
id: "java-en-function-extractthenexpand-salts"
language: "java"
lang: "en"
category: "function"
name: "ExtractThenExpand.salts"
signature: "public List<SecretKey> salts()"
title: "ExtractThenExpand.salts"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/HKDFParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExtractThenExpand.salts

```java
public List<SecretKey> salts()
```

Returns an unmodifiable `List` of salt values in the order they
 were added. Returns an empty list if there are no salt values.
 

 Salt values added by `addSalt` are converted to
 a `SecretKeySpec` object. Empty arrays are discarded.

         into a single value to be used in the HKDF-Extract phase.

**返回**

- the unmodifiable `List` of salt values
