---
id: "java-en-function-openmbeaninfo-hashcode"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanInfo.hashCode"
signature: "public int hashCode()"
title: "OpenMBeanInfo.hashCode"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanInfo.hashCode

```java
public int hashCode()
```

Returns the hash code value for this `OpenMBeanInfo` instance.
 

 The hash code of an `OpenMBeanInfo` instance is the sum of the hash codes
 of all elements of information used in `equals` comparisons
 (ie: its class name, and its infos on attributes, constructors, operations and notifications,
 where the hashCode of each of these arrays is calculated by a call to
 `new java.util.HashSet(java.util.Arrays.asList(this.getSignature)).hashCode()`).
 

 This ensures that `t1.equals(t2)` implies that `t1.hashCode()==t2.hashCode()`
 for any two `OpenMBeanInfo` instances `t1` and `t2`,
 as required by the general contract of the method
 `hashCode`.

**返回**

- the hash code value for this `OpenMBeanInfo` instance
