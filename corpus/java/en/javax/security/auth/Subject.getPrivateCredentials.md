---
id: "java-en-function-subject-getprivatecredentials"
language: "java"
lang: "en"
category: "function"
name: "Subject.getPrivateCredentials"
signature: "public Set<Object> getPrivateCredentials()"
title: "Subject.getPrivateCredentials"
directive: "method"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/Subject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Subject.getPrivateCredentials

```java
public Set<Object> getPrivateCredentials()
```

Return the `Set` of private credentials held by this
 `Subject`.

 

 The returned `Set` is backed by this Subject's
 internal private Credential `Set`.  Any modification
 to the returned `Set` affects the internal private
 Credential `Set` as well.

**返回**

- a `Set` of private credentials held by this `Subject`.
