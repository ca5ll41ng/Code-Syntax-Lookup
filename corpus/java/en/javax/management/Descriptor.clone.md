---
id: "java-en-function-descriptor-clone"
language: "java"
lang: "en"
category: "function"
name: "Descriptor.clone"
signature: "public Object clone() throws RuntimeOperationsException"
title: "Descriptor.clone"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/Descriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Descriptor.clone

```java
public Object clone() throws RuntimeOperationsException
```

Returns a descriptor which is equal to this descriptor.
 Changes to the returned descriptor will have no effect on this
 descriptor, and vice versa.  If this descriptor is immutable,
 it may fulfill this condition by returning itself.

**返回**

- A descriptor which is equal to this descriptor.

**异常**

- **RuntimeOperationsException** — for illegal value for field names or field values. If the descriptor construction fails for any reason, this exception will be thrown.
