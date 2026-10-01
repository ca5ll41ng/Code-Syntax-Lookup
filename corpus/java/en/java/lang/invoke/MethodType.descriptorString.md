---
id: "java-en-function-methodtype-descriptorstring"
language: "java"
lang: "en"
category: "function"
name: "MethodType.descriptorString"
signature: "public String descriptorString()"
title: "MethodType.descriptorString"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodType.descriptorString

```java
public String descriptorString()
```

{@return the descriptor string for this method type}

 

 If this method type can be `#descriptor described nominally`,
 then the result is a method type descriptor (JVMS {@jvms 4.3.3}).
 `MethodTypeDesc MethodTypeDesc` for this method type
 can be produced by calling `ofDescriptor(String)
 MethodTypeDesc::ofDescriptor` with the result descriptor string.
 

 If this method type cannot be `#descriptor described nominally`
 and the result is a string of the form:
 `"()"`
 where `` is the concatenation of the
 `descriptorString() descriptor string` of all
 of the parameter types and the `descriptorString() descriptor string`
 of the return type. No `java.lang.constant.MethodTypeDesc MethodTypeDesc`
 can be produced from the result string.

**参见**

- Nominal Descriptor for `MethodType`

> *Since 12*
