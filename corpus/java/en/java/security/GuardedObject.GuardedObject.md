---
id: "java-en-function-guardedobject-guardedobject"
language: "java"
lang: "en"
category: "function"
name: "GuardedObject.GuardedObject"
signature: "public GuardedObject(Object object, Guard guard)"
title: "GuardedObject.GuardedObject"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/GuardedObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GuardedObject.GuardedObject

```java
public GuardedObject(Object object, Guard guard)
```

Constructs a GuardedObject using the specified object and guard.
 If the Guard object is `null`, then no restrictions will
 be placed on who can access the object.

**参数**

- **object** — the object to be guarded.
- **guard** — the Guard object that guards access to the object.
