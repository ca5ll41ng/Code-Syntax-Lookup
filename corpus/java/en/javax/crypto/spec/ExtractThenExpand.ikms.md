---
id: "java-en-function-extractthenexpand-ikms"
language: "java"
lang: "en"
category: "function"
name: "ExtractThenExpand.ikms"
signature: "public List<SecretKey> ikms()"
title: "ExtractThenExpand.ikms"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/HKDFParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExtractThenExpand.ikms

```java
public List<SecretKey> ikms()
```

Returns an unmodifiable `List` of input keying material values
 in the order they were added. Returns an empty list if there are no
 input keying material values.
 

 Input keying material values added by `addIKM`
 are converted to a `SecretKeySpec` object. Empty arrays are
 discarded.

         keying materials into a single value to be used in the
         HKDF-Extract phase.

**返回**

- the unmodifiable `List` of input keying material values
