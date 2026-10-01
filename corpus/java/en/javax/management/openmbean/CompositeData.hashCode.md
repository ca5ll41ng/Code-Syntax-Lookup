---
id: "java-en-function-compositedata-hashcode"
language: "java"
lang: "en"
category: "function"
name: "CompositeData.hashCode"
signature: "public int hashCode()"
title: "CompositeData.hashCode"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/CompositeData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeData.hashCode

```java
public int hashCode()
```

Returns the hash code value for this `CompositeData` instance.
 

 The hash code of a `CompositeData` instance is the sum of the hash codes
 of all elements of information used in `equals` comparisons
 (ie: its composite type and all the item values).
 

 This ensures that `t1.equals(t2)` implies that `t1.hashCode()==t2.hashCode()`
 for any two `CompositeData` instances `t1` and `t2`,
 as required by the general contract of the method
 `hashCode`.
 

 Each item value's hash code is added to the returned hash code.
 If an item value is an array,
 its hash code is obtained as if by calling the
 `deepHashCode(Object[]) deepHashCode` method
 for arrays of object reference types or the appropriate overloading
 of `Arrays.hashCode(e)` for arrays of primitive types.

**返回**

- the hash code value for this `CompositeData` instance
