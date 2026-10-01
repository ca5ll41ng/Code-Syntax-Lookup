---
id: "java-en-function-subject-setreadonly"
language: "java"
lang: "en"
category: "function"
name: "Subject.setReadOnly"
signature: "public void setReadOnly()"
title: "Subject.setReadOnly"
directive: "method"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/Subject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Subject.setReadOnly

```java
public void setReadOnly()
```

Set this `Subject` to be read-only.

 

 Modifications (additions and removals) to this Subject's
 `Principal` `Set` and
 credential Sets will be disallowed.
 The `destroy` operation on this Subject's credentials will
 still be permitted.

 

 Subsequent attempts to modify the Subject's `Principal`
 and credential Sets will result in an
 `IllegalStateException` being thrown.
 Also, once a `Subject` is read-only,
 it can not be reset to being writable again.
