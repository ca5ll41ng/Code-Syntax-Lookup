---
id: "java-en-function-config-getserialfilterfactory"
language: "java"
lang: "en"
category: "function"
name: "Config.getSerialFilterFactory"
signature: "public static BinaryOperator<ObjectInputFilter> getSerialFilterFactory()"
title: "Config.getSerialFilterFactory"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Config.getSerialFilterFactory

```java
public static BinaryOperator<ObjectInputFilter> getSerialFilterFactory()
```

Returns the JVM-wide deserialization filter factory.
 If the filter factory has been `setSerialFilterFactory(BinaryOperator) set` it is returned,
 otherwise, a builtin deserialization filter factory is returned.
 The filter factory provides a filter for every ObjectInputStream when invoked from
 `ObjectInputStream(InputStream) ObjectInputStream constructors`
 and when a stream-specific filter is set with
 `setObjectInputFilter(ObjectInputFilter) setObjectInputFilter`.

 The builtin deserialization filter factory provides the
 `getSerialFilter static JVM-wide filter` when invoked from
 `ObjectInputStream(InputStream) ObjectInputStream constructors`.
 When invoked `setObjectInputFilter(ObjectInputFilter)
 to set the stream-specific filter` the requested filter replaces the static JVM-wide filter,
 unless it has already been set.
 The builtin deserialization filter factory implements the behavior of earlier versions of
 setting the initial filter in the `ObjectInputStream` constructor and
 `setObjectInputFilter`.

**返回**

- the JVM-wide deserialization filter factory; non-null

**异常**

- **IllegalStateException** — if the filter factory initialization is incomplete

> *Since 17*
