---
id: "java-en-function-intstream-sum"
language: "java"
lang: "en"
category: "function"
name: "IntStream.sum"
signature: "int sum()"
title: "IntStream.sum"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/IntStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntStream.sum

```java
int sum()
```

Returns the sum of elements in this stream.  This is a special case
 of a reduction
 and is equivalent to:
 
```
`return reduce(0, Integer::sum);
 `
```

 

This is a terminal
 operation.

**返回**

- the sum of elements in this stream
