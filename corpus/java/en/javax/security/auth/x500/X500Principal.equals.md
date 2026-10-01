---
id: "java-en-function-x500principal-equals"
language: "java"
lang: "en"
category: "function"
name: "X500Principal.equals"
signature: "public boolean equals(Object o)"
title: "X500Principal.equals"
directive: "method"
module: "java.base/javax.security.auth.x500"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/x500/X500Principal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X500Principal.equals

```java
public boolean equals(Object o)
```

Compares the specified `Object` with this
 `X500Principal` for equality.

 

 Specifically, this method returns `true` if
 the `Object` o is an `X500Principal`
 and if the respective canonical string representations
 (obtained via the `getName(X500Principal.CANONICAL)` method)
 of this object and o are equal.

 

 This implementation is compliant with the requirements of RFC 5280.

**参数**

- **o** — Object to be compared for equality with this `X500Principal`

**返回**

- `true` if the specified `Object` is equal to this `X500Principal`, `false` otherwise
