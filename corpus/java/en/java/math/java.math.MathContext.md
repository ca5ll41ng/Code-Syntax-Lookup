---
id: "java-en-function-java-math-mathcontext"
language: "java"
lang: "en"
category: "function"
name: "java.math.MathContext"
title: "MathContext"
directive: "type"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/MathContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MathContext

Immutable objects which encapsulate the context settings which
 describe certain rules for numerical operators, such as those
 implemented by the `BigDecimal` class.

 

The base-independent settings are:
 
 
- `precision`:
 the number of digits to be used for an operation; results are
 rounded to this precision

 
- `roundingMode`:
 a `RoundingMode` object which specifies the algorithm to be
 used for rounding.
 

       IEEE Standard for Floating-Point Arithmetic

**参见**

- BigDecimal
- RoundingMode

> *Since 1.5*
