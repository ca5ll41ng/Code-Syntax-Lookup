---
id: "java-en-function-tabulardata-hashcode"
language: "java"
lang: "en"
category: "function"
name: "TabularData.hashCode"
signature: "public int hashCode()"
title: "TabularData.hashCode"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularData.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularData.hashCode

```java
public int hashCode()
```

Returns the hash code value for this `TabularData` instance.
 

 The hash code of a `TabularData` instance is the sum of the hash codes
 of all elements of information used in `equals` comparisons
 (ie: its tabular type and its content, where the content is defined as all the index to value mappings).
 

 This ensures that `t1.equals(t2)` implies that `t1.hashCode()==t2.hashCode()`
 for any two `TabularDataSupport` instances `t1` and `t2`,
 as required by the general contract of the method
 `hashCode`.

**返回**

- the hash code value for this `TabularDataSupport` instance
