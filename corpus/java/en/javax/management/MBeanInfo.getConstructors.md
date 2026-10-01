---
id: "java-en-function-mbeaninfo-getconstructors"
language: "java"
lang: "en"
category: "function"
name: "MBeanInfo.getConstructors"
signature: "public MBeanConstructorInfo[] getConstructors()"
title: "MBeanInfo.getConstructors"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanInfo.getConstructors

```java
public MBeanConstructorInfo[] getConstructors()
```

Returns the list of the public constructors of the MBean.
 Each constructor is described by an
 `MBeanConstructorInfo` object.

 

The returned array is a shallow copy of the internal array,
 which means that it is a copy of the internal array of
 references to the `MBeanConstructorInfo` objects but
 that each referenced `MBeanConstructorInfo` object
 is not copied.

 

The returned list is not necessarily exhaustive.  That is,
 the MBean may have a public constructor that is not in the
 list.  In this case, the MBean server can construct another
 instance of this MBean's class using that constructor, even
 though it is not listed here.

**返回**

- An array of `MBeanConstructorInfo` objects.
