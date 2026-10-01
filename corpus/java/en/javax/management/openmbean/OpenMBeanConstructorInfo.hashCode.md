---
id: "java-en-function-openmbeanconstructorinfo-hashcode"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanConstructorInfo.hashCode"
signature: "public int hashCode()"
title: "OpenMBeanConstructorInfo.hashCode"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanConstructorInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanConstructorInfo.hashCode

```java
public int hashCode()
```

Returns the hash code value for this `OpenMBeanConstructorInfo` instance.
 

 The hash code of an `OpenMBeanConstructorInfo` instance is the sum of the hash codes
 of all elements of information used in `equals` comparisons
 (ie: its name and signature, where the signature hashCode is calculated by a call to
  `java.util.Arrays.asList(this.getSignature).hashCode()`).
 

 This ensures that `t1.equals(t2)` implies that `t1.hashCode()==t2.hashCode()`
 for any two `OpenMBeanConstructorInfo` instances `t1` and `t2`,
 as required by the general contract of the method
 `hashCode`.

**返回**

- the hash code value for this `OpenMBeanConstructorInfo` instance
