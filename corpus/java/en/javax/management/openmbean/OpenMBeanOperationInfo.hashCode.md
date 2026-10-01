---
id: "java-en-function-openmbeanoperationinfo-hashcode"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanOperationInfo.hashCode"
signature: "public int hashCode()"
title: "OpenMBeanOperationInfo.hashCode"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanOperationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanOperationInfo.hashCode

```java
public int hashCode()
```

Returns the hash code value for this `OpenMBeanOperationInfo` instance.
 

 The hash code of an `OpenMBeanOperationInfo` instance is the sum of the hash codes
 of all elements of information used in `equals` comparisons
 (ie: its name, return open type, impact and signature,
 where the signature hashCode is calculated by a call to
 `java.util.Arrays.asList(this.getSignature).hashCode()`).
 

 This ensures that `t1.equals(t2)` implies that `t1.hashCode()==t2.hashCode()`
 for any two `OpenMBeanOperationInfo` instances `t1` and `t2`,
 as required by the general contract of the method
 `hashCode`.

**返回**

- the hash code value for this `OpenMBeanOperationInfo` instance
