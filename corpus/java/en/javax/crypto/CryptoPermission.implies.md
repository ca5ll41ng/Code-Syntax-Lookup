---
id: "java-en-function-cryptopermission-implies"
language: "java"
lang: "en"
category: "function"
name: "CryptoPermission.implies"
signature: "public boolean implies(Permission p)"
title: "CryptoPermission.implies"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CryptoPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CryptoPermission.implies

```java
public boolean implies(Permission p)
```

Checks if the specified permission is "implied" by
 this object.
 

 More specifically, this method returns `true` if:
 
 
-  p is an instance of `CryptoPermission`, and
 
-  p's algorithm name equals or (in the case of wildcards)
       is implied by this permission's algorithm name, and
 
-  p's maximum allowable key size is less or
       equal to this permission's maximum allowable key size, and
 
-  p's algorithm parameter spec equals or is
        implied by this permission's algorithm parameter spec, and
 
-  p's exemptionMechanism equals or
        is implied by this permission's
        exemptionMechanism (a `null` exemption mechanism
        implies any other exemption mechanism).

**参数**

- **p** — the permission to check against.

**返回**

- `true` if the specified permission is equal to or implied by this permission, `false` otherwise.
