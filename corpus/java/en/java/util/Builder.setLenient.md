---
id: "java-en-function-builder-setlenient"
language: "java"
lang: "en"
category: "function"
name: "Builder.setLenient"
signature: "public Builder setLenient(boolean lenient)"
title: "Builder.setLenient"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setLenient

```java
public Builder setLenient(boolean lenient)
```

Sets the lenient mode parameter to the value given by `lenient`.
 If no lenient parameter is given to this `Calendar.Builder`,
 lenient mode will be used in the `build() build` method.

**参数**

- **lenient** — `true` for lenient mode; `false` for non-lenient mode

**返回**

- this `Calendar.Builder`

**参见**

- Calendar#setLenient(boolean)
