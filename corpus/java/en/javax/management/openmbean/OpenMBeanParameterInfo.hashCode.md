---
id: "java-en-function-openmbeanparameterinfo-hashcode"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanParameterInfo.hashCode"
signature: "public int hashCode()"
title: "OpenMBeanParameterInfo.hashCode"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanParameterInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanParameterInfo.hashCode

```java
public int hashCode()
```

Returns the hash code value for this `OpenMBeanParameterInfo` instance.
 

 The hash code of an `OpenMBeanParameterInfo` instance is the sum of the hash codes
 of all elements of information used in `equals` comparisons
 (ie: its name, its open type, and its default, min, max and legal values).
 

 This ensures that `t1.equals(t2)` implies that `t1.hashCode()==t2.hashCode()`
 for any two `OpenMBeanParameterInfo` instances `t1` and `t2`,
 as required by the general contract of the method
 `hashCode`.

**返回**

- the hash code value for this `OpenMBeanParameterInfo` instance
