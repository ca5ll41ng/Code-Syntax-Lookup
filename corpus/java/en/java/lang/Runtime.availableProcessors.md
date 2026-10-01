---
id: "java-en-function-runtime-availableprocessors"
language: "java"
lang: "en"
category: "function"
name: "Runtime.availableProcessors"
signature: "public native int availableProcessors()"
title: "Runtime.availableProcessors"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Runtime.availableProcessors

```java
public native int availableProcessors()
```

Returns the number of processors available to the Java virtual machine.

 

 This value may change during a particular invocation of the virtual
 machine.  Applications that are sensitive to the number of available
 processors should therefore occasionally poll this property and adjust
 their resource usage appropriately.

**返回**

- the maximum number of processors available to the virtual machine; never smaller than one

> *Since 1.4*
