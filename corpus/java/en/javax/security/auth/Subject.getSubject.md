---
id: "java-en-function-subject-getsubject"
language: "java"
lang: "en"
category: "function"
name: "Subject.getSubject"
signature: "public static Subject getSubject(final AccessControlContext acc)"
title: "Subject.getSubject"
directive: "method"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/Subject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Subject.getSubject

```java
public static Subject getSubject(final AccessControlContext acc)
```

Throws `UnsupportedOperationException`. A replacement API
 named `current` has been added which can be used to obtain
 the current subject.

**参数**

- **acc** — ignored

**返回**

- n/a

**异常**

- **UnsupportedOperationException** — always

**参见**

- #current()

> **⚠ Deprecated** — This method used to get the subject associated with the provided `AccessControlContext`, which was only useful in conjunction with `SecurityManager the Security Manager`, which is no longer supported. This method has been changed to always throw `UnsupportedOperationException`. A replacement API named `current` has been added which can be used to obtain the current subject. There is no replacement for the Security Manager.
