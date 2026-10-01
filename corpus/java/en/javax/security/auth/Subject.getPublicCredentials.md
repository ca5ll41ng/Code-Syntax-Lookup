---
id: "java-en-function-subject-getpubliccredentials"
language: "java"
lang: "en"
category: "function"
name: "Subject.getPublicCredentials"
signature: "public Set<Object> getPublicCredentials()"
title: "Subject.getPublicCredentials"
directive: "method"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/Subject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Subject.getPublicCredentials

```java
public Set<Object> getPublicCredentials()
```

Return the `Set` of public credentials held by this
 `Subject`.

 

 The returned `Set` is backed by this Subject's
 internal public Credential `Set`.  Any modification
 to the returned `Set` affects the internal public
 Credential `Set` as well.

**返回**

- a `Set` of public credentials held by this `Subject`.
