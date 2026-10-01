---
id: "java-en-function-privatecredentialpermission-implies"
language: "java"
lang: "en"
category: "function"
name: "PrivateCredentialPermission.implies"
signature: "public boolean implies(Permission p)"
title: "PrivateCredentialPermission.implies"
directive: "method"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/PrivateCredentialPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrivateCredentialPermission.implies

```java
public boolean implies(Permission p)
```

Checks if this `PrivateCredentialPermission` implies
 the specified `Permission`.

 

 This method returns true if:
 
 
-  `p` is an instanceof PrivateCredentialPermission and
 
-  the target name for `p` is implied by this object's
          target name.  For example:
 
```

  [* P1 "duke"] implies [a.b.Credential P1 "duke"].
  [C1 P1 "duke"] implies [C1 P1 "duke" P2 "dukette"].
  [C1 P2 "dukette"] implies [C1 P1 "duke" P2 "dukette"].
 
```

**参数**

- **p** — the `Permission` to check against.

**返回**

- true if this `PrivateCredentialPermission` implies the specified `Permission`, false if not.
