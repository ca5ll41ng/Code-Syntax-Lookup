---
id: "java-en-function-pbekeyspec-pbekeyspec"
language: "java"
lang: "en"
category: "function"
name: "PBEKeySpec.PBEKeySpec"
signature: "public PBEKeySpec(char[] password)"
title: "PBEKeySpec.PBEKeySpec"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/PBEKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PBEKeySpec.PBEKeySpec

```java
public PBEKeySpec(char[] password)
```

Constructor that takes a password. An empty char[] is used if
 null is specified.

 

 Note: password is cloned before it is stored in
 the new PBEKeySpec object.

**参数**

- **password** — the password.
