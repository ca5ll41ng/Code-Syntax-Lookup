---
id: "java-en-function-math-signum"
language: "java"
lang: "en"
category: "function"
name: "Math.signum"
signature: "public static double signum(double d)"
title: "Math.signum"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.signum

```java
public static double signum(double d)
```

Returns the signum function of the argument; zero if the argument
 is zero, 1.0 if the argument is greater than zero, -1.0 if the
 argument is less than zero.

 

Special Cases:
 
 
-  If the argument is NaN, then the result is NaN.
 
-  If the argument is positive zero or negative zero, then the
      result is the same as the argument.

**参数**

- **d** — the floating-point value whose signum is to be returned

**返回**

- the signum function of the argument

> *Since 1.5*
