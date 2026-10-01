---
id: "java-en-function-principal-implies"
language: "java"
lang: "en"
category: "function"
name: "Principal.implies"
signature: "default boolean implies(Subject subject)"
title: "Principal.implies"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Principal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Principal.implies

```java
default boolean implies(Subject subject)
```

Returns `true` if the specified subject is implied by this
 `Principal`.

 The default implementation of this method returns `true` if
 `subject` is non-null and contains at least one
 `Principal` that is equal to this `Principal`.

 

Subclasses may override this with a different implementation, if
 necessary.

**参数**

- **subject** — the `Subject`

**返回**

- `true` if `subject` is non-null and is implied by this `Principal`, or false otherwise.

> *Since 1.8*
