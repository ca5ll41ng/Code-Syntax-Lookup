---
id: "java-en-function-atomicreferencefieldupdater-newupdater"
language: "java"
lang: "en"
category: "function"
name: "AtomicReferenceFieldUpdater.newUpdater"
signature: "public static <U,W> AtomicReferenceFieldUpdater<U,W> newUpdater(Class<U> tclass, Class<W> vclass, String fieldName)"
title: "AtomicReferenceFieldUpdater.newUpdater"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReferenceFieldUpdater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReferenceFieldUpdater.newUpdater

```java
public static <U,W> AtomicReferenceFieldUpdater<U,W> newUpdater(Class<U> tclass, Class<W> vclass, String fieldName)
```

Creates and returns an updater for objects with the given field.
 The Class arguments are needed to check that reflective types and
 generic types match.

**参数**

- **tclass** — the class of the objects holding the field
- **vclass** — the class of the field
- **fieldName** — the name of the field to be updated
- **the** — type of instances of tclass
- **the** — type of instances of vclass

**返回**

- the updater

**异常**

- **ClassCastException** — if the field is of the wrong type
- **IllegalArgumentException** — if the field is not volatile
- **RuntimeException** — with a nested reflection-based exception if the class does not hold field or is the wrong type, or the field is inaccessible to the caller according to Java language access control
