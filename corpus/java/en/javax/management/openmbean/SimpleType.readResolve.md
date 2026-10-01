---
id: "java-en-function-simpletype-readresolve"
language: "java"
lang: "en"
category: "function"
name: "SimpleType.readResolve"
signature: "public Object readResolve() throws ObjectStreamException"
title: "SimpleType.readResolve"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/SimpleType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleType.readResolve

```java
public Object readResolve() throws ObjectStreamException
```

Replace an object read from an `java.io.ObjectInputStream` with the unique instance for that
 value.

**返回**

- the replacement object.

**异常**

- **ObjectStreamException** — if the read object cannot be resolved.
