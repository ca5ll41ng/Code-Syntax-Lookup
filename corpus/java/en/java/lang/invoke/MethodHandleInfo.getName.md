---
id: "java-en-function-methodhandleinfo-getname"
language: "java"
lang: "en"
category: "function"
name: "MethodHandleInfo.getName"
signature: "public String getName()"
title: "MethodHandleInfo.getName"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandleInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandleInfo.getName

```java
public String getName()
```

Returns the name of the cracked method handle's underlying member.
 This is `java.lang.constant.ConstantDescs#INIT_NAME`
 if the underlying member was a constructor,
 else it is a simple method name or field name.

**返回**

- the simple name of the underlying member
