---
id: "java-en-function-destroyable-destroy"
language: "java"
lang: "en"
category: "function"
name: "Destroyable.destroy"
signature: "default void destroy() throws DestroyFailedException"
title: "Destroyable.destroy"
directive: "method"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/Destroyable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Destroyable.destroy

```java
default void destroy() throws DestroyFailedException
```

Destroy this `Object`.

 

 Sensitive information associated with this `Object`
 is destroyed or cleared.  Subsequent calls to certain methods
 on this `Object` will result in an
 `IllegalStateException` being thrown.

 The default implementation throws `DestroyFailedException`.

**异常**

- **DestroyFailedException** — if the destroy operation fails.
