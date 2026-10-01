---
id: "java-en-function-membername-getinvocationtype"
language: "java"
lang: "en"
category: "function"
name: "MemberName.getInvocationType"
signature: "public MethodType getInvocationType()"
title: "MemberName.getInvocationType"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MemberName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemberName.getInvocationType

```java
public MethodType getInvocationType()
```

Return the actual type under which this method or constructor must be invoked.
  For non-static methods or constructors, this is the type with a leading parameter,
  a reference to declaring class.  For static methods, it is the same as the declared type.
