---
id: "java-en-function-date-hashcode"
language: "java"
lang: "en"
category: "function"
name: "Date.hashCode"
signature: "public int hashCode()"
title: "Date.hashCode"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.hashCode

```java
public int hashCode()
```

Returns a hash code value for this object. The result is the
 exclusive OR of the two halves of the primitive `long`
 value returned by the `getTime`
 method. That is, the hash code is the value of the expression:
 
```
`(int)(this.getTime()^(this.getTime() >>> 32))
 `
```

**返回**

- a hash code value for this object.
