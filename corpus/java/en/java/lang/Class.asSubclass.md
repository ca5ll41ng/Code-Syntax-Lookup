---
id: "java-en-function-class-assubclass"
language: "java"
lang: "en"
category: "function"
name: "Class.asSubclass"
signature: "public <U> Class<? extends U> asSubclass(Class<U> clazz)"
title: "Class.asSubclass"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.asSubclass

```java
public <U> Class<? extends U> asSubclass(Class<U> clazz)
```

Casts this `Class` object to represent a subclass of the class
 represented by the specified class object.  Checks that the cast
 is valid, and throws a `ClassCastException` if it is not.  If
 this method succeeds, it always returns a reference to this `Class` object.

 

This method is useful when a client needs to "narrow" the type of
 a `Class` object to pass it to an API that restricts the
 `Class` objects that it is willing to accept.  A cast would
 generate a compile-time warning, as the correctness of the cast
 could not be checked at runtime (because generic types are implemented
 by erasure).

**参数**

- **the** — type to cast this `Class` object to
- **clazz** — the class of the type to cast this `Class` object to

**返回**

- this `Class` object, cast to represent a subclass of the specified class object.

**异常**

- **ClassCastException** — if this `Class` object does not represent a subclass of the specified class (here "subclass" includes the class itself).

> *Since 1.5*
