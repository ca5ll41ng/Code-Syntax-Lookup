---
id: "java-en-function-string-repeat"
language: "java"
lang: "en"
category: "function"
name: "String.repeat"
signature: "public String repeat(int count)"
title: "String.repeat"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.repeat

```java
public String repeat(int count)
```

Returns a string whose value is the concatenation of this
 string repeated `count` times.
 

 If this string is empty or count is zero then the empty
 string is returned.

**参数**

- **count** — number of times to repeat

**返回**

- A string composed of this string repeated `count` times or the empty string if this string is empty or count is zero

**异常**

- **IllegalArgumentException** — if the `count` is negative.

> *Since 11*
