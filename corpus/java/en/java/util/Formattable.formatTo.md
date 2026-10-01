---
id: "java-en-function-formattable-formatto"
language: "java"
lang: "en"
category: "function"
name: "Formattable.formatTo"
signature: "void formatTo(Formatter formatter, int flags, int width, int precision)"
title: "Formattable.formatTo"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Formattable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Formattable.formatTo

```java
void formatTo(Formatter formatter, int flags, int width, int precision)
```

Formats the object using the provided `Formatter formatter`.

**参数**

- **formatter** — The `Formatter formatter`.  Implementing classes may call `out` or `locale` to obtain the `Appendable` or `Locale` used by this `formatter` respectively.
- **flags** — The flags modify the output format.  The value is interpreted as a bitmask.  Any combination of the following flags may be set: `LEFT_JUSTIFY`, `UPPERCASE`, and `ALTERNATE`.  If no flags are set, the default formatting of the implementing class will apply.
- **width** — The minimum number of characters to be written to the output. If the length of the converted value is less than the `width` then the output will be padded by '&nbsp;&nbsp;' until the total number of characters equals width.  The padding is at the beginning by default.  If the `LEFT_JUSTIFY` flag is set then the padding will be at the end.  If `width` is `-1` then there is no minimum.
- **precision** — The maximum number of characters to be written to the output. The precision is applied before the width, thus the output will be truncated to `precision` characters even if the `width` is greater than the `precision`.  If `precision` is `-1` then there is no explicit limit on the number of characters.

**异常**

- **IllegalFormatException** — If any of the parameters are invalid.  For specification of all possible formatting errors, see the Details section of the formatter class specification.
