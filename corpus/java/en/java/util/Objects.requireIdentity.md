---
id: "java-en-function-objects-requireidentity"
language: "java"
lang: "en"
category: "function"
name: "Objects.requireIdentity"
signature: "public static <T> T requireIdentity(T obj)"
title: "Objects.requireIdentity"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Objects.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Objects.requireIdentity

```java
public static <T> T requireIdentity(T obj)
```

Checks that the specified object reference is an identity object.
 

 This method throws an `IdentityException` if and only if the
 parameter represents a value object when preview features are enabled.
 All objects are identity objects when preview features are disabled;
 consequently, this method behaves the same as `requireNonNull(Object)
 Objects.requireNonNull` when preview features are disabled.

**参数**

- **obj** — the object reference to check for identity
- **the** — type of the reference

**返回**

- `obj` if `obj` is an identity object

**异常**

- **NullPointerException** — if `obj` is `null`
- **IdentityException** — if `obj` is not an identity object

> *Since 28*
