---
id: "java-en-function-java-lang-math"
language: "java"
lang: "en"
category: "function"
name: "java.lang.Math"
title: "Math"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math

The class `Math` contains methods for performing basic
 numeric operations such as the elementary exponential, logarithm,
 square root, and trigonometric functions.

 

Unlike some of the numeric methods of class
 `java.lang.StrictMath StrictMath`, all implementations of the equivalent
 functions of class `Math` are not defined to return the
 bit-for-bit same results.  This relaxation permits
 better-performing implementations where strict reproducibility is
 not required.

 

By default many of the `Math` methods simply call
 the equivalent method in `StrictMath` for their
 implementation.  Code generators are encouraged to use
 platform-specific native libraries or microprocessor instructions,
 where available, to provide higher-performance implementations of
 `Math` methods.  Such higher-performance
 implementations still must conform to the specification for
 `Math`.

 

The quality of implementation specifications concern two
 properties, accuracy of the returned result and monotonicity of the
 method.  Accuracy of the floating-point `Math` methods is
 measured in terms of {@index ulp}s, {@index "units in
 the last place"}.  For a given floating-point format, an
 `ulp(double) ulp` of a specific real number value is
 the distance between the two floating-point values bracketing that
 numerical value.  When discussing the accuracy of a method as a
 whole rather than at a specific argument, the number of ulps cited
 is for the worst-case error at any argument.  If a method always
 has an error less than 0.5 ulps, the method always returns the
 floating-point number nearest the exact result; such a method is
 correctly rounded.  A {@index "correctly rounded"}
 method is generally the best a floating-point approximation can be;
 however, it is impractical for many floating-point methods to be
 correctly rounded.  Instead, for the `Math` class, a larger
 error bound of 1 or 2 ulps is allowed for certain methods.
 Informally, with a 1 ulp error bound, when the exact result is a
 representable number, the exact result should be returned as the
 computed result; otherwise, either of the two floating-point values
 which bracket the exact result may be returned.  For exact results
 large in magnitude, one of the endpoints of the bracket may be
 infinite.  Besides accuracy at individual arguments, maintaining
 proper relations between the method at different arguments is also
 important.  Therefore, most methods with more than 0.5 ulp errors
 are required to be {@index "semi-monotonic"}: whenever
 the mathematical function is non-decreasing, so is the
 floating-point approximation, likewise, whenever the mathematical
 function is non-increasing, so is the floating-point approximation.
 Not all approximations that have 1 ulp accuracy will automatically
 meet the monotonicity requirements.

 

 The platform uses signed two's complement integer arithmetic with
 `int` and `long` primitive types.  The developer should
 choose the primitive type to ensure that arithmetic operations
 consistently produce correct results, which in some cases means the
 operations will not overflow the range of values of the
 computation.  The best practice is to choose the primitive type and
 algorithm to avoid overflow. In cases where the size is `int`
 or `long` and overflow errors need to be detected, the
 methods whose names end with `Exact` throw an `ArithmeticException` when the results overflow.

 IEEE 754 Recommended
 Operations

 The 2019 revision of the IEEE 754 floating-point standard includes
 a section of recommended operations and the semantics of those
 operations if they are included in a programming environment. The
 recommended operations present in this class include `sin
 sin`, `cos cos`, `tan tan`, `asin asin`, `acos acos`, `atan atan`, `exp exp`, `expm1
 expm1`, `log log`, `log10 log10`, `log1p log1p`,
 `sinh sinh`, `cosh cosh`, `tanh tanh`, `asinh asinh`,
 `acosh acosh`, `atanh atanh`, `hypot hypot`, and `pow pow`.
 (The `sqrt sqrt` operation is a required part of IEEE 754
 from a different section of the standard.) The special case behavior
 of the recommended operations generally follows the guidance of the IEEE 754
 standard. However, the `pow` method defines different
 behavior for some arguments, as noted in its `pow
 specification`. The IEEE 754 standard defines its operations to be
 correctly rounded, which is a more stringent quality of
 implementation condition than required for most of the methods in
 question that are also included in this class.

       IEEE Standard for Floating-Point Arithmetic

> *Since 1.0*
