---
id: "java-en-function-date-equals"
language: "java"
lang: "en"
category: "function"
name: "Date.equals"
signature: "public boolean equals(Object obj)"
title: "Date.equals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Date.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Date.equals

```java
public boolean equals(Object obj)
```

Compares two dates for equality.
 The result is `true` if and only if the argument is
 not `null` and is a `Date` object that
 represents the same point in time, to the millisecond, as this object.
 

 Thus, two `Date` objects are equal if and only if the
 `getTime` method returns the same `long`
 value for both.

**参数**

- **obj** — the object to compare with.

**返回**

- `true` if the objects are the same; `false` otherwise.

**参见**

- java.util.Date#getTime()
