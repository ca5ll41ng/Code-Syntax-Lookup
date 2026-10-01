---
id: "java-en-function-openmbeanoperationinfosupport-hashcode"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanOperationInfoSupport.hashCode"
signature: "public int hashCode()"
title: "OpenMBeanOperationInfoSupport.hashCode"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanOperationInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanOperationInfoSupport.hashCode

```java
public int hashCode()
```

Returns the hash code value for this `OpenMBeanOperationInfoSupport` instance.

 

The hash code of an `OpenMBeanOperationInfoSupport`
 instance is the sum of the hash codes of all elements of
 information used in `equals` comparisons (ie: its name,
 return open type, impact and signature, where the signature
 hashCode is calculated by a call to `java.util.Arrays.asList(this.getSignature).hashCode()`).

 

This ensures that `t1.equals(t2) ` implies that `t1.hashCode()==t2.hashCode() ` for any two `OpenMBeanOperationInfoSupport` instances `t1` and `t2`, as required by the general contract of the method `hashCode`.

 

However, note that another instance of a class implementing
 the `OpenMBeanOperationInfo` interface may be equal to
 this `OpenMBeanOperationInfoSupport` instance as defined
 by `equals`, but may have a different
 hash code if it is calculated differently.

 

As `OpenMBeanOperationInfoSupport` instances are
 immutable, the hash code for this instance is calculated once,
 on the first call to `hashCode`, and then the same value
 is returned for subsequent calls.

**返回**

- the hash code value for this `OpenMBeanOperationInfoSupport` instance
