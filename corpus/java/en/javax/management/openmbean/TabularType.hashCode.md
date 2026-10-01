---
id: "java-en-function-tabulartype-hashcode"
language: "java"
lang: "en"
category: "function"
name: "TabularType.hashCode"
signature: "public int hashCode()"
title: "TabularType.hashCode"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularType.hashCode

```java
public int hashCode()
```

Returns the hash code value for this TabularType instance.
 

 The hash code of a TabularType instance is the sum of the hash codes
 of all elements of information used in equals comparisons
 (ie: name, row type, index names).
 This ensures that  t1.equals(t2)  implies that  t1.hashCode()==t2.hashCode() 
 for any two TabularType instances t1 and t2,
 as required by the general contract of the method
 `hashCode`.
 

 As TabularType instances are immutable, the hash code for this instance is calculated once,
 on the first call to hashCode, and then the same value is returned for subsequent calls.

**返回**

- the hash code value for this TabularType instance
