---
id: "java-en-function-descriptorsupport-clone"
language: "java"
lang: "en"
category: "function"
name: "DescriptorSupport.clone"
signature: "public synchronized Object clone() throws RuntimeOperationsException"
title: "DescriptorSupport.clone"
directive: "method"
module: "java.management/javax.management.modelmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/modelmbean/DescriptorSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DescriptorSupport.clone

```java
public synchronized Object clone() throws RuntimeOperationsException
```

Returns a new Descriptor which is a duplicate of the Descriptor.

**异常**

- **RuntimeOperationsException** — for illegal value for field Names or field Values.  If the descriptor construction fails for any reason, this exception will be thrown.
