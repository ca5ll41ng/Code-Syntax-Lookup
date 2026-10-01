---
id: "java-en-function-duration-multiply"
language: "java"
lang: "en"
category: "function"
name: "Duration.multiply"
signature: "public Duration multiply(int factor)"
title: "Duration.multiply"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/Duration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Duration.multiply

```java
public Duration multiply(int factor)
```

Computes a new duration whose value is `factor` times
 longer than the value of this duration.

 

This method is provided for the convenience.
 It is functionally equivalent to the following code:
 
```

 multiply(new BigDecimal(String.valueOf(factor)))
 
```

**参数**

- **factor** — Factor times longer of new `Duration` to create.

**返回**

- New `Duration` that is `factor`times longer than this `Duration`.

**参见**

- #multiply(BigDecimal)
