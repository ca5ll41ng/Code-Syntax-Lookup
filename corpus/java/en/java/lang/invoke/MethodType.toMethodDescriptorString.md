---
id: "java-en-function-methodtype-tomethoddescriptorstring"
language: "java"
lang: "en"
category: "function"
name: "MethodType.toMethodDescriptorString"
signature: "public String toMethodDescriptorString()"
title: "MethodType.toMethodDescriptorString"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.toMethodDescriptorString

```java
public String toMethodDescriptorString()
```

{@return the descriptor string for this method type} This method
 is equivalent to calling `descriptorString() MethodType::descriptorString`.

 This is not a strict inverse of `fromMethodDescriptorString
 fromMethodDescriptorString` which requires a method type descriptor
 (JVMS {@jvms 4.3.3}) and a suitable class loader argument.
 Two distinct `MethodType` objects can have an identical
 descriptor string as distinct classes can have the same name
 but different class loaders.

 

 This method is included for the benefit of applications that must
 generate bytecodes that process method handles and `invokedynamic`.

**参见**

- Nominal Descriptor for `MethodType`
