---
id: "java-en-function-processhandle-hashcode"
language: "java"
lang: "en"
category: "function"
name: "ProcessHandle.hashCode"
signature: "int hashCode()"
title: "ProcessHandle.hashCode"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessHandle.hashCode

```java
int hashCode()
```

Returns a hash code value for this ProcessHandle.
 The hashcode value follows the general contract for `hashCode`.
 The value is a function of the `pid pid` value and
 may be a function of additional information to uniquely identify the process.
 If two ProcessHandles are equal according to the `equals(Object) equals`
 method, then calling the hashCode method on each of the two objects
 must produce the same integer result.

**返回**

- a hash code value for this object
