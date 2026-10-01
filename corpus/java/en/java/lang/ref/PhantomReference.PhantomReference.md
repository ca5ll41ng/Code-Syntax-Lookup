---
id: "java-en-function-phantomreference-phantomreference"
language: "java"
lang: "en"
category: "function"
name: "PhantomReference.PhantomReference"
signature: "public PhantomReference(@jdk.internal.RequiresIdentity T referent, ReferenceQueue<? super T> q)"
title: "PhantomReference.PhantomReference"
directive: "method"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/PhantomReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PhantomReference.PhantomReference

```java
public PhantomReference(@jdk.internal.RequiresIdentity T referent, ReferenceQueue<? super T> q)
```

Creates a new phantom reference that refers to the given object and
 is registered with the given queue.

 

 It is possible to create a phantom reference with a `null`
 queue.  Such a reference will never be enqueued.

**参数**

- **referent** — the object the new phantom reference will refer to
- **q** — the queue with which the reference is to be registered, or `null` if registration is not required

**异常**

- **IdentityException** — if the referent is not an `hasIdentity(Object) identity object`
