---
id: "java-en-function-builder-setinstant"
language: "java"
lang: "en"
category: "function"
name: "Builder.setInstant"
signature: "public Builder setInstant(long instant)"
title: "Builder.setInstant"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setInstant

```java
public Builder setInstant(long instant)
```

Sets the instant parameter to the given `instant` value that is
 a millisecond offset from the
 Epoch.

**参数**

- **instant** — a millisecond offset from the Epoch

**返回**

- this `Calendar.Builder`

**异常**

- **IllegalStateException** — if any of the field parameters have already been set

**参见**

- Calendar#setTime(Date)
- Calendar#setTimeInMillis(long)
- Calendar#time
