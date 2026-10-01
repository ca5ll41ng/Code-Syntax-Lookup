---
id: "java-en-function-doublestream-sum"
language: "java"
lang: "en"
category: "function"
name: "DoubleStream.sum"
signature: "double sum()"
title: "DoubleStream.sum"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/DoubleStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleStream.sum

```java
double sum()
```

Returns the sum of elements in this stream.

 Summation is a special case of a reduction. If
 floating-point summation were exact, this method would be
 equivalent to:

 
```
`return reduce(0, Double::sum);
 `
```

 However, since floating-point summation is not exact, the above
 code is not necessarily equivalent to the summation computation
 done by this method.

 

The value of a floating-point sum is a function both
 of the input values as well as the order of addition
 operations. The order of addition operations of this method is
 intentionally not defined to allow for implementation
 flexibility to improve the speed and accuracy of the computed
 result.

 In particular, this method may be implemented using compensated
 summation or other technique to reduce the error bound in the
 numerical sum compared to a simple summation of `double`
 values.

 Because of the unspecified order of operations and the
 possibility of using differing summation schemes, the output of
 this method may vary on the same input elements.

 

Various conditions can result in a non-finite sum being
 computed. This can occur even if the all the elements
 being summed are finite. If any element is non-finite,
 the sum will be non-finite:

 

 
- If any element is a NaN, then the final sum will be
 NaN.

 
- If the elements contain one or more infinities, the
 sum will be infinite or NaN.

 

 
- If the elements contain infinities of opposite sign,
 the sum will be NaN.

 
- If the elements contain infinities of one sign and
 an intermediate sum overflows to an infinity of the opposite
 sign, the sum may be NaN.

 

 

 It is possible for intermediate sums of finite values to
 overflow into opposite-signed infinities; if that occurs, the
 final sum will be NaN even if the elements are all
 finite.

 If all the elements are zero, the sign of zero is
 not guaranteed to be preserved in the final sum.

 

This is a terminal
 operation.

 to yield more accurate results.

**返回**

- the sum of elements in this stream
