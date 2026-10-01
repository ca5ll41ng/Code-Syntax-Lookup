---
id: "java-en-function-instrumentation-getobjectsize"
language: "java"
lang: "en"
category: "function"
name: "Instrumentation.getObjectSize"
signature: "long getObjectSize(Object objectToSize)"
title: "Instrumentation.getObjectSize"
directive: "method"
module: "java.instrument/java.lang.instrument"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/Instrumentation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instrumentation.getObjectSize

```java
long getObjectSize(Object objectToSize)
```

Returns an implementation-specific approximation of the amount of storage consumed by
 the specified object. The result may include some or all of the object's overhead,
 and thus is useful for comparison within an implementation but not between implementations.

 The estimate may change during a single invocation of the JVM.

**参数**

- **objectToSize** — the object to size

**返回**

- an implementation-specific approximation of the amount of storage consumed by the specified object

**异常**

- **java.lang.NullPointerException** — if the supplied Object is null.
