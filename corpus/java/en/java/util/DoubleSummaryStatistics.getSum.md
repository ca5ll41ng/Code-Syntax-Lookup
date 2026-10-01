---
id: "java-en-function-doublesummarystatistics-getsum"
language: "java"
lang: "en"
category: "function"
name: "DoubleSummaryStatistics.getSum"
signature: "public final double getSum()"
title: "DoubleSummaryStatistics.getSum"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/DoubleSummaryStatistics.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleSummaryStatistics.getSum

```java
public final double getSum()
```

Returns the sum of values recorded, or zero if no values have been
 recorded.

 

 The value of a floating-point sum is a function both of the
 input values as well as the order of addition operations. The
 order of addition operations of this method is intentionally
 not defined to allow for implementation flexibility to improve
 the speed and accuracy of the computed result.

 In particular, this method may be implemented using compensated
 summation or other technique to reduce the error bound in the
 numerical sum compared to a simple summation of `double`
 values.

 Because of the unspecified order of operations and the
 possibility of using differing summation schemes, the output of
 this method may vary on the same input values.

 

Various conditions can result in a non-finite sum being
 computed. This can occur even if the all the recorded values
 being summed are finite. If any recorded value is non-finite,
 the sum will be non-finite:

 

 
- If any recorded value is a NaN, then the final sum will be
 NaN.

 
- If the recorded values contain one or more infinities, the
 sum will be infinite or NaN.

 

 
- If the recorded values contain infinities of opposite sign,
 the sum will be NaN.

 
- If the recorded values contain infinities of one sign and
 an intermediate sum overflows to an infinity of the opposite
 sign, the sum may be NaN.

 

 

 It is possible for intermediate sums of finite values to
 overflow into opposite-signed infinities; if that occurs, the
 final sum will be NaN even if the recorded values are all
 finite.

 If all the recorded values are zero, the sign of zero is
 not guaranteed to be preserved in the final sum.

 more accurate results.

**返回**

- the sum of values, or zero if none
