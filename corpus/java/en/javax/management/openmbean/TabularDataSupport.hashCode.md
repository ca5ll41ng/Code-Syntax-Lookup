---
id: "java-en-function-tabulardatasupport-hashcode"
language: "java"
lang: "en"
category: "function"
name: "TabularDataSupport.hashCode"
signature: "public int hashCode()"
title: "TabularDataSupport.hashCode"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularDataSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularDataSupport.hashCode

```java
public int hashCode()
```

Returns the hash code value for this `TabularDataSupport` instance.
 

 The hash code of a `TabularDataSupport` instance is the sum of the hash codes
 of all elements of information used in `equals` comparisons
 (ie: its tabular type and its content, where the content is defined as all the CompositeData values).
 

 This ensures that `t1.equals(t2)` implies that `t1.hashCode()==t2.hashCode()`
 for any two `TabularDataSupport` instances `t1` and `t2`,
 as required by the general contract of the method
 `hashCode`.
 

 However, note that another instance of a class implementing the `TabularData` interface
 may be equal to this `TabularDataSupport` instance as defined by `equals`,
 but may have a different hash code if it is calculated differently.

**返回**

- the hash code value for this `TabularDataSupport` instance
