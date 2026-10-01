---
id: "java-en-function-compositetype-hashcode"
language: "java"
lang: "en"
category: "function"
name: "CompositeType.hashCode"
signature: "public int hashCode()"
title: "CompositeType.hashCode"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/CompositeType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompositeType.hashCode

```java
public int hashCode()
```

Returns the hash code value for this CompositeType instance.
 

 The hash code of a CompositeType instance is the sum of the hash codes
 of all elements of information used in equals comparisons
 (ie: name, items names, items types).
 This ensures that  t1.equals(t2)  implies that  t1.hashCode()==t2.hashCode() 
 for any two CompositeType instances t1 and t2,
 as required by the general contract of the method
 `hashCode`.
 

 As CompositeType instances are immutable, the hash code for this instance is calculated once,
 on the first call to hashCode, and then the same value is returned for subsequent calls.

**返回**

- the hash code value for this CompositeType instance
