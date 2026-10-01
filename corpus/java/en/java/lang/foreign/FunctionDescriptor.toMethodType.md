---
id: "java-en-function-functiondescriptor-tomethodtype"
language: "java"
lang: "en"
category: "function"
name: "FunctionDescriptor.toMethodType"
signature: "MethodType toMethodType()"
title: "FunctionDescriptor.toMethodType"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/FunctionDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FunctionDescriptor.toMethodType

```java
MethodType toMethodType()
```

Returns the method type consisting of the carrier types of the layouts in this
 function descriptor.
 

 The carrier type of a layout `L` is determined as follows:
 
 
- If `L` is a `ValueLayout` the carrier type is
     determined through `carrier`.
 
- If `L` is a `GroupLayout` or a `SequenceLayout`,
     the carrier type is `MemorySegment`.
 

          layouts. As such, it is not necessary to specify how padding layout
          should be mapped to carrier types.

**返回**

- the method type consisting of the carrier types of the layouts in this function descriptor
