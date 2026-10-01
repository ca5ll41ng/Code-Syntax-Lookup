---
id: "java-en-function-classvalue-get"
language: "java"
lang: "en"
category: "function"
name: "ClassValue.get"
signature: "public T get(Class<?> type)"
title: "ClassValue.get"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassValue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassValue.get

```java
public T get(Class<?> type)
```

{@return the value associated to the given `Class`}
 

 This method first performs a read-only access, and returns the associated
 value if it exists.  Otherwise, this method tries to associate a value
 from a `computeValue computeValue` invocation until the associated
 value exists, which could be associated by a competing thread.
 

 This method may throw an exception from a `computeValue` invocation.
 In this case, no association happens.

**参数**

- **type** — the `Class` to retrieve the associated value for

**异常**

- **NullPointerException** — if the argument is `null`

**参见**

- #remove
- #computeValue
