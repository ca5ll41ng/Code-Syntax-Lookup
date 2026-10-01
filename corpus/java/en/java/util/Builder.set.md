---
id: "java-en-function-builder-set"
language: "java"
lang: "en"
category: "function"
name: "Builder.set"
signature: "public Builder set(int field, int value)"
title: "Builder.set"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Calendar.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.set

```java
public Builder set(int field, int value)
```

Sets the `field` parameter to the given `value`.
 `field` is an index to the `fields`, such as
 `DAY_OF_MONTH DAY_OF_MONTH`. Field value validation is
 not performed in this method. Any out of range values are either
 normalized in lenient mode or detected as an invalid value in
 non-lenient mode when building a `Calendar`.

**参数**

- **field** — an index to the `Calendar` fields
- **value** — the field value

**返回**

- this `Calendar.Builder`

**异常**

- **IllegalArgumentException** — if `field` is invalid
- **IllegalStateException** — if the instant value has already been set, or if fields have been set too many (approximately `MAX_VALUE`) times.

**参见**

- Calendar#set(int, int)
