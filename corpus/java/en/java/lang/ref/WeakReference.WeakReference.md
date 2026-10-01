---
id: "java-en-function-weakreference-weakreference"
language: "java"
lang: "en"
category: "function"
name: "WeakReference.WeakReference"
signature: "public WeakReference(@jdk.internal.RequiresIdentity T referent)"
title: "WeakReference.WeakReference"
directive: "method"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/WeakReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeakReference.WeakReference

```java
public WeakReference(@jdk.internal.RequiresIdentity T referent)
```

Creates a new weak reference that refers to the given object.  The new
 reference is not registered with any queue.

**参数**

- **referent** — object the new weak reference will refer to

**异常**

- **IdentityException** — if the referent is not an `hasIdentity(Object) identity object`
