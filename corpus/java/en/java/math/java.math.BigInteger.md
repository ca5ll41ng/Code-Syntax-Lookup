---
id: "java-en-function-java-math-biginteger"
language: "java"
lang: "en"
category: "function"
name: "java.math.BigInteger"
title: "BigInteger"
directive: "type"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger

Immutable arbitrary-precision integers.  All operations behave as if
 BigIntegers were represented in two's-complement notation (like Java's
 primitive integer types).  BigInteger provides analogues to all of Java's
 primitive integer operators, and all relevant methods from java.lang.Math.
 Additionally, BigInteger provides operations for modular arithmetic, GCD
 calculation, primality testing, prime generation, bit manipulation,
 and a few other miscellaneous operations.

 

Semantics of arithmetic operations exactly mimic those of Java's integer
 arithmetic operators, as defined in The Java Language Specification.
 For example, division by zero throws an `ArithmeticException`, and
 division of a negative by a positive yields a negative (or zero) remainder.

 

Semantics of shift operations extend those of Java's shift operators
 to allow for negative shift distances.  A right-shift with a negative
 shift distance results in a left shift, and vice-versa.  The unsigned
 right shift operator (`>>>`) is omitted since this operation
 only makes sense for a fixed sized word and not for a
 representation conceptually having an infinite number of leading
 virtual sign bits.

 

Semantics of bitwise logical operations exactly mimic those of Java's
 bitwise integer operators.  The binary operators (`and`,
 `or`, `xor`) implicitly perform sign extension on the shorter
 of the two operands prior to performing the operation.

 

Comparison operations perform signed integer comparisons, analogous to
 those performed by Java's relational and equality operators.

 

Modular arithmetic operations are provided to compute residues, perform
 exponentiation, and compute multiplicative inverses.  These methods always
 return a non-negative result, between `0` and `(modulus - 1)`,
 inclusive.

 

Bit operations operate on a single bit of the two's-complement
 representation of their operand.  If necessary, the operand is sign-extended
 so that it contains the designated bit.  None of the single-bit
 operations can produce a BigInteger with a different sign from the
 BigInteger being operated on, as they affect only a single bit, and the
 arbitrarily large abstraction provided by this class ensures that conceptually
 there are infinitely many "virtual sign bits" preceding each BigInteger.

 

For the sake of brevity and clarity, pseudo-code is used throughout the
 descriptions of BigInteger methods.  The pseudo-code expression
 `(i + j)` is shorthand for "a BigInteger whose value is
 that of the BigInteger `i` plus that of the BigInteger `j`."
 The pseudo-code expression `(i == j)` is shorthand for
 "`true` if and only if the BigInteger `i` represents the same
 value as the BigInteger `j`."  Other pseudo-code expressions are
 interpreted similarly.

 

All methods and constructors in this class throw
 `NullPointerException` when passed
 a null object reference for any input parameter.

 BigInteger must support values in the range
 -2`Integer.MAX_VALUE` (exclusive) to
 +2`Integer.MAX_VALUE` (exclusive)
 and may support values outside of that range.

 An `ArithmeticException` is thrown when a BigInteger
 constructor or method would generate a value outside of the
 supported range.

 The range of probable prime values is limited and may be less than
 the full supported positive range of `BigInteger`.
 The range must be at least 1 to 2500000000.

 As `BigInteger` values are
 arbitrary precision integers, the algorithmic complexity of the
 methods of this class varies and may be superlinear in the size of
 the input. For example, a method like `intValue()` would be
 expected to run in O(1), that is constant time, since with
 the current internal representation only a fixed-size component of
 the `BigInteger` needs to be accessed to perform the
 conversion to `int`. In contrast, a method like `not()`
 would be expected to run in O(n) time where n
 is the size of the `BigInteger` in bits, that is, to run in
 time proportional to the size of the input. For multiplying two
 `BigInteger` values of size n, a naive multiplication
 algorithm would run in time O(n2) and
 theoretical results indicate a multiplication algorithm for numbers
 using this category of representation must run in at least
 O(n&nbsp;log&nbsp;n). Common multiplication
 algorithms between the bounds of the naive and theoretical cases
 include the Karatsuba multiplication
 (O(n1.585)) and 3-way Toom-Cook
 multiplication (O(n1.465)).

 

A particular implementation of `multiply(BigInteger)
 multiply` is free to switch between different algorithms for
 different inputs, such as to improve actual running time to produce
 the product by using simpler algorithms for smaller inputs even if
 the simpler algorithm has a larger asymptotic complexity.

 

Operations may also allocate and compute on intermediate
 results, potentially those allocations may be as large as in
 proportion to the running time of the algorithm.

 

Users of `BigInteger` concerned with bounding the running
 time or space of operations can screen out `BigInteger`
 values above a chosen magnitude.

 In the reference implementation, BigInteger constructors and
 operations throw `ArithmeticException` when the result is out
 of the supported range of
 -2`Integer.MAX_VALUE` (exclusive) to
 +2`Integer.MAX_VALUE` (exclusive).

**参见**

- BigDecimal

> *Since 1.1*
