---
id: "java-en-function-string-equals"
language: "java"
lang: "en"
category: "function"
name: "String.equals"
signature: "public boolean equals(Object anObject)"
title: "String.equals"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.equals

```java
public boolean equals(Object anObject)
```

Compares this string to the specified object.  The result is `true` if and only if the argument is not `null` and is a `String` object that represents the same sequence of characters as this
 object.

 

For finer-grained String comparison, refer to
 `java.text.Collator`.

**参数**

- **anObject** — The object to compare this `String` against

**返回**

- `true` if the given object represents a `String` equivalent to this string, `false` otherwise

**参见**

- #compareTo(String)
- #equalsIgnoreCase(String)
