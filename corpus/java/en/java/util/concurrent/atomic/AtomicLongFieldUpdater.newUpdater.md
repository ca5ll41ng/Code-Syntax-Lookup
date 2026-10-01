---
id: "java-en-function-atomiclongfieldupdater-newupdater"
language: "java"
lang: "en"
category: "function"
name: "AtomicLongFieldUpdater.newUpdater"
signature: "public static <U> AtomicLongFieldUpdater<U> newUpdater(Class<U> tclass, String fieldName)"
title: "AtomicLongFieldUpdater.newUpdater"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLongFieldUpdater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLongFieldUpdater.newUpdater

```java
public static <U> AtomicLongFieldUpdater<U> newUpdater(Class<U> tclass, String fieldName)
```

Creates and returns an updater for objects with the given field.
 The Class argument is needed to check that reflective types and
 generic types match.

**参数**

- **tclass** — the class of the objects holding the field
- **fieldName** — the name of the field to be updated
- **the** — type of instances of tclass

**返回**

- the updater

**异常**

- **IllegalArgumentException** — if the field is not a volatile long type
- **RuntimeException** — with a nested reflection-based exception if the class does not hold field or is the wrong type, or the field is inaccessible to the caller according to Java language access control
