---
id: "java-en-function-mbeanconstructorinfo-clone"
language: "java"
lang: "en"
category: "function"
name: "MBeanConstructorInfo.clone"
signature: "public Object clone ()"
title: "MBeanConstructorInfo.clone"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanConstructorInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanConstructorInfo.clone

```java
public Object clone ()
```

Returns a shallow clone of this instance.  The clone is
 obtained by simply calling `super.clone()`, thus calling
 the default native shallow cloning mechanism implemented by
 `Object.clone()`.  No deeper cloning of any internal
 field is made.

 

Since this class is immutable, cloning is chiefly of
 interest to subclasses.
