---
id: "java-en-function-gsscredential-equals"
language: "java"
lang: "en"
category: "function"
name: "GSSCredential.equals"
signature: "boolean equals(Object another)"
title: "GSSCredential.equals"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSCredential.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSCredential.equals

```java
boolean equals(Object another)
```

Tests if this GSSCredential asserts the same entity as the supplied
 object.  The two credentials must be acquired over the same
 mechanisms and must refer to the same principal.

**参数**

- **another** — another GSSCredential for comparison to this one

**返回**

- `true` if the two GSSCredentials assert the same entity; `false` otherwise.
