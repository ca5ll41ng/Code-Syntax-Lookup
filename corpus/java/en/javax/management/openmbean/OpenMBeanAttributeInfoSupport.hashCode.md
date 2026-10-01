---
id: "java-en-function-openmbeanattributeinfosupport-hashcode"
language: "java"
lang: "en"
category: "function"
name: "OpenMBeanAttributeInfoSupport.hashCode"
signature: "public int hashCode()"
title: "OpenMBeanAttributeInfoSupport.hashCode"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/OpenMBeanAttributeInfoSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OpenMBeanAttributeInfoSupport.hashCode

```java
public int hashCode()
```

Returns the hash code value for this `OpenMBeanAttributeInfoSupport` instance.

 

The hash code of an `OpenMBeanAttributeInfoSupport`
 instance is the sum of the hash codes of all elements of
 information used in `equals` comparisons (ie: its name,
 its open type, its default, min, max and legal
 values, and its Descriptor).

 

This ensures that `t1.equals(t2)` implies that `t1.hashCode()==t2.hashCode()` for any two `OpenMBeanAttributeInfoSupport` instances `t1` and `t2`, as required by the general contract of the method `hashCode`.

 

However, note that another instance of a class implementing
 the `OpenMBeanAttributeInfo` interface may be equal to
 this `OpenMBeanAttributeInfoSupport` instance as defined
 by `equals`, but may have a different
 hash code if it is calculated differently.

 

As `OpenMBeanAttributeInfoSupport` instances are
 immutable, the hash code for this instance is calculated once,
 on the first call to `hashCode`, and then the same value
 is returned for subsequent calls.

**返回**

- the hash code value for this `OpenMBeanAttributeInfoSupport` instance
