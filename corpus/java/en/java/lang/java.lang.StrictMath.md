---
id: "java-en-function-java-lang-strictmath"
language: "java"
lang: "en"
category: "function"
name: "java.lang.StrictMath"
title: "StrictMath"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath

The class `StrictMath` contains methods for performing basic
 numeric operations such as the elementary exponential, logarithm,
 square root, and trigonometric functions.

 

To help ensure portability of Java programs, the definitions of
 some of the numeric functions in this package require that they
 produce the same results as certain published algorithms. These
 algorithms are available from the well-known network library
 `netlib` as the package "Freely Distributable Math
 Library," `fdlibm`. These
 algorithms, which are written in the C programming language, are
 then to be understood to be transliterated into Java and executed
 with all floating-point and integer operations following the rules
 of Java arithmetic. The following transformations are used in the
 transliteration:

 
 
- Extraction and setting of the high and low halves of a 64-bit
 `double` in C is expressed using Java platform methods that
 perform bit-wise conversions `doubleToRawLongBits(double) from `double` to `long`` and `longBitsToDouble(long) `long`
 to `double``.

 
- Unsigned `int` values in C are mapped to signed `int` values in Java with updates to operations to replicate
 unsigned semantics where the results on the same textual operation
 would differ. For example, `>>` shifts on unsigned C values
 are replaced with `>>>` shifts on signed Java values. Sized
 comparisons on unsigned C values (`<`, `<=`, `>`,
 `>=`) are replaced with semantically equivalent calls to
 `compareUnsigned(int, int) compareUnsigned`.
 

 

The Java math library is defined with respect to
 `fdlibm` version 5.3 with a fix to `pow` so that its error bounds
 conform to the quality of implementation criteria for `pow`.
 Where `fdlibm` provides more than one definition for a function (such as
 `acos`), use the "IEEE 754 core function" version
 (residing in a file whose name begins with the letter
 `e`).  The methods which require `fdlibm`
 semantics are `sin`, `cos`, `tan`,
 `asin`, `acos`, `atan`,
 `exp`, `log`, `log10`,
 `cbrt`, `atan2`, `pow`,
 `sinh`, `cosh`, `tanh`,
 `asinh`, `acosh`,`atanh`,
 `hypot`, `expm1`, and `log1p`.

 

 The platform uses signed two's complement integer arithmetic with
 int and long primitive types.  The developer should choose
 the primitive type to ensure that arithmetic operations consistently
 produce correct results, which in some cases means the operations
 will not overflow the range of values of the computation.
 The best practice is to choose the primitive type and algorithm to avoid
 overflow. In cases where the size is `int` or `long` and
 overflow errors need to be detected, the methods whose names end with
 `Exact` throw an `ArithmeticException` when the results overflow.

 IEEE 754 Recommended
 Operations

 The `java.lang.Math Math` class discusses how the shared
 quality of implementation criteria for selected `Math` and
 `StrictMath` methods relate to the IEEE 754
 recommended operations.

       IEEE Standard for Floating-Point Arithmetic

> *Since 1.3*
