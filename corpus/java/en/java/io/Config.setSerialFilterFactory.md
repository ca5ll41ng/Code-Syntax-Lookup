---
id: "java-en-function-config-setserialfilterfactory"
language: "java"
lang: "en"
category: "function"
name: "Config.setSerialFilterFactory"
signature: "public static void setSerialFilterFactory(BinaryOperator<ObjectInputFilter> filterFactory)"
title: "Config.setSerialFilterFactory"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Config.setSerialFilterFactory

```java
public static void setSerialFilterFactory(BinaryOperator<ObjectInputFilter> filterFactory)
```

Set the `getSerialFilterFactory() JVM-wide deserialization filter factory`.
 The filter factory can be configured exactly once with one of:
 setting the `jdk.serialFilterFactory` property on the command line,
 setting the `jdk.serialFilterFactory` property in the `java.security.Security`
 file, or using this `setSerialFilterFactory` method.
 The filter factory can be set only before any `ObjectInputStream` has been
 created to avoid any inconsistency in which filter factory is being used.

 

The JVM-wide filter factory is invoked when an ObjectInputStream
 `ObjectInputStream() is constructed` and when the
 `setObjectInputFilter(ObjectInputFilter) stream-specific filter is set`.
 The parameters are the current filter and a requested filter and it
 returns the filter to be used for the stream.
 If the current filter is `non-null`, the filter factory must return a
 `non-null` filter; this is to prevent unintentional disabling of filtering
 after it has been enabled.
 The factory determines the filter to be used for `ObjectInputStream` streams based
 on its inputs, any other filters, context, or state that is available.
 The factory may throw runtime exceptions to signal incorrect use or invalid parameters.
 See the `ObjectInputFilter filter models` for examples of composition and delegation.

**参数**

- **filterFactory** — the deserialization filter factory to set as the JVM-wide filter factory; not null

**异常**

- **IllegalStateException** — if the builtin deserialization filter factory has already been replaced or any instance of `ObjectInputStream` has been created.

> *Since 17*
