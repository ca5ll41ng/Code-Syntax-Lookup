---
id: "java-en-function-typedescriptor-descriptorstring"
language: "java"
lang: "en"
category: "function"
name: "TypeDescriptor.descriptorString"
signature: "String descriptorString()"
title: "TypeDescriptor.descriptorString"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/TypeDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeDescriptor.descriptorString

```java
String descriptorString()
```

Returns the descriptor string for this `TypeDescriptor` object.

 If this `TypeDescriptor` object can be described in nominal form,
 then this method returns a type descriptor as specified in JVMS {@jvms 4.3}.
 The result descriptor string can be used to produce
 a `java.lang.constant.ConstantDesc nominal descriptor`.

 Otherwise, the result string is not a type descriptor.
 No `java.lang.constant.ConstantDesc nominal descriptor`
 can be produced from the result string.

**返回**

- the descriptor string for this `TypeDescriptor` object
