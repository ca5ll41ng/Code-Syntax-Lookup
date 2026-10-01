---
id: "java-en-function-duration-isshorterthan"
language: "java"
lang: "en"
category: "function"
name: "Duration.isShorterThan"
signature: "public boolean isShorterThan(final Duration duration)"
title: "Duration.isShorterThan"
directive: "method"
module: "java.xml/javax.xml.datatype"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/datatype/Duration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Duration.isShorterThan

```java
public boolean isShorterThan(final Duration duration)
```

Checks if this duration object is strictly shorter than
 another `Duration` object.

**参数**

- **duration** — `Duration` to test this `Duration` against.

**返回**

- `true` if `duration` parameter is shorter than this `Duration`, else `false`.

**异常**

- **UnsupportedOperationException** — If the underlying implementation cannot reasonably process the request, e.g. W3C XML Schema allows for arbitrarily large/small/precise values, the request may be beyond the implementations capability.
- **NullPointerException** — if `duration` is null.

**参见**

- #isLongerThan(Duration duration)
- #compare(Duration duration)
