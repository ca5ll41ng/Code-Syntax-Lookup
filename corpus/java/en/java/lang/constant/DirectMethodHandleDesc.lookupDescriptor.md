---
id: "java-en-function-directmethodhandledesc-lookupdescriptor"
language: "java"
lang: "en"
category: "function"
name: "DirectMethodHandleDesc.lookupDescriptor"
signature: "String lookupDescriptor()"
title: "DirectMethodHandleDesc.lookupDescriptor"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/DirectMethodHandleDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirectMethodHandleDesc.lookupDescriptor

```java
String lookupDescriptor()
```

Returns the lookup descriptor of the method handle described by this descriptor,
 after adjusting for the invocation mode.  This will correspond to either
 a method type descriptor string (for methods and constructors), or a field
 descriptor string (for field access method handles).  The lookup descriptor
 string is in the same format as accepted by `of`.

**返回**

- the lookup descriptor string
