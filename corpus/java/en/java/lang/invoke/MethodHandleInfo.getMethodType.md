---
id: "java-en-function-methodhandleinfo-getmethodtype"
language: "java"
lang: "en"
category: "function"
name: "MethodHandleInfo.getMethodType"
signature: "public MethodType getMethodType()"
title: "MethodHandleInfo.getMethodType"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandleInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandleInfo.getMethodType

```java
public MethodType getMethodType()
```

Returns the nominal type of the cracked symbolic reference, expressed as a method type.
 If the reference is to a constructor, the return type will be `void`.
 If it is to a non-static method, the method type will not mention the `this` parameter.
 If it is to a field and the requested access is to read the field,
 the method type will have no parameters and return the field type.
 If it is to a field and the requested access is to write the field,
 the method type will have one parameter of the field type and return `void`.
 

 Note that original direct method handle may include a leading `this` parameter,
 or (in the case of a constructor) will replace the `void` return type
 with the constructed class.
 The nominal type does not include any `this` parameter,
 and (in the case of a constructor) will return `void`.

**返回**

- the type of the underlying member, expressed as a method type
