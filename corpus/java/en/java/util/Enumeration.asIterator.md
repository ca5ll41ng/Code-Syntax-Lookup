---
id: "java-en-function-enumeration-asiterator"
language: "java"
lang: "en"
category: "function"
name: "Enumeration.asIterator"
signature: "default Iterator<E> asIterator()"
title: "Enumeration.asIterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Enumeration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Enumeration.asIterator

```java
default Iterator<E> asIterator()
```

Returns an `Iterator` that traverses the remaining elements
 covered by this enumeration. Traversal is undefined if any methods
 are called on this enumeration after the call to `asIterator`.

 This method is intended to help adapt code that produces
 `Enumeration` instances to code that consumes `Iterator`
 instances. For example, the `entries()
 JarFile.entries` method returns an `Enumeration`.
 This can be turned into an `Iterator`, and then the
 `forEachRemaining()` method can be used:

 
```
`JarFile jarFile = ... ;
     jarFile.entries().asIterator().forEachRemaining(entry -> { ... `);
 }
```

 (Note that there is also a `stream()
 JarFile.stream` method that returns a `Stream` of entries,
 which may be more convenient in some cases.)

 The default implementation returns an `Iterator` whose
 `hasNext hasNext` method calls this Enumeration's
 `hasMoreElements` method, whose `next next`
 method calls this Enumeration's `nextElement` method, and
 whose `remove remove` method throws
 `UnsupportedOperationException`.

**返回**

- an Iterator representing the remaining elements of this Enumeration

> *Since 9*
