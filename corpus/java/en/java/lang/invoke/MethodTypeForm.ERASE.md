---
id: "java-en-function-methodtypeform-erase"
language: "java"
lang: "en"
category: "function"
name: "MethodTypeForm.ERASE"
signature: "public static final int ERASE = 1, WRAP = 2, UNWRAP = 3"
title: "MethodTypeForm.ERASE"
directive: "field"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodTypeForm.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTypeForm.ERASE

```java
public static final int ERASE = 1, WRAP = 2, UNWRAP = 3
```

Codes for `canonicalize`.
 ERASE means change every reference to `Object`.
 WRAP means convert primitives (including `void` to their
 corresponding wrapper types.  UNWRAP means the reverse of WRAP.
