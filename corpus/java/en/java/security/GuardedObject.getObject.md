---
id: "java-en-function-guardedobject-getobject"
language: "java"
lang: "en"
category: "function"
name: "GuardedObject.getObject"
signature: "public Object getObject() throws SecurityException"
title: "GuardedObject.getObject"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/GuardedObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GuardedObject.getObject

```java
public Object getObject() throws SecurityException
```

Retrieves the guarded object, or throws an exception if access
 to the guarded object is denied by the guard.

**返回**

- the guarded object.

**异常**

- **SecurityException** — if access to the guarded object is denied.
