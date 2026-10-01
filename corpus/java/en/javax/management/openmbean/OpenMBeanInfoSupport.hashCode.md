---
id: "java-en-function-openmbeaninfosupport-hashcode"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanInfoSupport.hashCode"
signature: "public int hashCode()"
title: "OpenMBeanInfoSupport.hashCode"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanInfoSupport.hashCode

```java
public int hashCode()
```

Returns the hash code value for this `OpenMBeanInfoSupport` instance.

 

The hash code of an `OpenMBeanInfoSupport` instance is
 the sum of the hash codes of all elements of information used
 in `equals` comparisons (ie: its class name, and its
 infos on attributes, constructors, operations and
 notifications, where the hashCode of each of these arrays is
 calculated by a call to `new
 java.util.HashSet(java.util.Arrays.asList(this.getSignature)).hashCode()`).

 

This ensures that `t1.equals(t2)` implies that `t1.hashCode()==t2.hashCode()` for any two `OpenMBeanInfoSupport` instances `t1` and `t2`, as
 required by the general contract of the method `hashCode`.

 

However, note that another instance of a class implementing
 the `OpenMBeanInfo` interface may be equal to this `OpenMBeanInfoSupport` instance as defined by `equals`, but may have a different hash code
 if it is calculated differently.

 

As `OpenMBeanInfoSupport` instances are immutable, the
 hash code for this instance is calculated once, on the first
 call to `hashCode`, and then the same value is returned
 for subsequent calls.

**返回**

- the hash code value for this `OpenMBeanInfoSupport` instance
