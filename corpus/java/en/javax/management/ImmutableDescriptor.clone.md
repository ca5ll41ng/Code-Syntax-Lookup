---
id: "java-en-function-immutabledescriptor-clone"
language: "java"
lang: "en"
category: "function"
name: "ImmutableDescriptor.clone"
signature: "public Descriptor clone()"
title: "ImmutableDescriptor.clone"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ImmutableDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ImmutableDescriptor.clone

```java
public Descriptor clone()
```

Returns a descriptor which is equal to this descriptor.
 Changes to the returned descriptor will have no effect on this
 descriptor, and vice versa.

 

This method returns the object on which it is called.
 A subclass can override it
 to return another object provided the contract is respected.

**异常**

- **RuntimeOperationsException** — for illegal value for field Names or field Values. If the descriptor construction fails for any reason, this exception will be thrown.
