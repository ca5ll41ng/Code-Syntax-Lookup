---
id: "java-en-function-softreference-softreference"
language: "java"
lang: "en"
category: "function"
name: "SoftReference.SoftReference"
signature: "public SoftReference(@jdk.internal.RequiresIdentity T referent)"
title: "SoftReference.SoftReference"
directive: "method"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/SoftReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SoftReference.SoftReference

```java
public SoftReference(@jdk.internal.RequiresIdentity T referent)
```

Creates a new soft reference that refers to the given object.  The new
 reference is not registered with any queue.

**参数**

- **referent** — object the new soft reference will refer to

**异常**

- **IdentityException** — if the referent is not an `hasIdentity(Object) identity object`
