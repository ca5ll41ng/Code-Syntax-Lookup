---
id: "java-en-function-bigdecimal-toplainstring"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.toPlainString"
signature: "public String toPlainString()"
title: "BigDecimal.toPlainString"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.toPlainString

```java
public String toPlainString()
```

Returns a string representation of this `BigDecimal`
 without an exponent field.  For values with a positive scale,
 the number of digits to the right of the decimal point is used
 to indicate scale.  For values with a zero or negative scale,
 the resulting string is generated as if the value were
 converted to a numerically equal value with zero scale and as
 if all the trailing zeros of the zero scale value were present
 in the result.

 The entire string is prefixed by a minus sign character '-'
 ('&#92;u002D') if the unscaled value is less than
 zero. No sign character is prefixed if the unscaled value is
 zero or positive.

 Note that if the result of this method is passed to the
 `BigDecimal(String) string constructor`, only the
 numerical value of this `BigDecimal` will necessarily be
 recovered; the representation of the new `BigDecimal`
 may have a different scale.  In particular, if this
 `BigDecimal` has a negative scale, the string resulting
 from this method will have a scale of zero when processed by
 the string constructor.

 (This method behaves analogously to the `toString`
 method in 1.4 and earlier releases.)

**返回**

- a string representation of this `BigDecimal` without an exponent field.

**参见**

- #toString()
- #toEngineeringString()

> *Since 1.5*
