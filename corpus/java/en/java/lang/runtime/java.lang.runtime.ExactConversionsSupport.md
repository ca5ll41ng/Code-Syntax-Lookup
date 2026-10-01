---
id: "java-en-function-java-lang-runtime-exactconversionssupport"
language: "java"
lang: "en"
category: "function"
name: "java.lang.runtime.ExactConversionsSupport"
title: "ExactConversionsSupport"
directive: "type"
module: "java.base/java.lang.runtime"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/runtime/ExactConversionsSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExactConversionsSupport

A testing conversion of a value is exact if it yields a result without loss
 of information or throwing an exception. Otherwise, it is inexact. Some
 conversions are always exact regardless of the value. These conversions are
 said to be unconditionally exact.
 

 For example, a conversion from `int` to `byte` for the value 10
 is exact because the result, 10, is the same as the original value. In
 contrast, if the `int` variable `i` stores the value 1000 then a
 narrowing primitive conversion to `byte` will yield the result -24.
 Loss of information has occurred: both the magnitude and the sign of the
 result are different than those of the original value. As such, a conversion
 from `int` to `byte` for the value 1000 is inexact. Finally a
 widening primitive conversion from `byte` to `int` is
 unconditionally exact because it will always succeed with no loss of
 information about the magnitude of the numeric value.
 

 The methods in this class provide the run-time support for the exactness
 checks of testing conversions from a primitive type to primitive type. These
 methods may be used, for example, by Java compiler implementations to
 implement checks for `instanceof` and pattern matching runtime
 implementations. Unconditionally exact testing conversions do not require a
 corresponding action at run time and, for this reason, methods corresponding
 to these exactness checks are omitted here.
 

 The run time conversion checks examine whether loss of information would
 occur if a testing conversion would be to be applied. In those cases where a
 floating-point primitive type is involved, and the value of the testing
 conversion is either signed zero, signed infinity or `NaN`, these
 methods comply with the following:

 
 
- Converting a floating-point negative zero to an integer type is considered
   inexact.
 
- Converting a floating-point `NaN` or infinity to an integer type is
   considered inexact.
 
- Converting a floating-point `NaN` or infinity or signed zero to another
   floating-point type is considered exact.
 

 safely through one of the existing methods. Those are omitted too (i.e.,
 `byte` to `char` can be redirected  to
 `isIntToCharExact`, `short` to
 `byte` can be redirected to
 `isIntToByteExact` and similarly for
 `short` to `char`, `char` to `byte` and `char`
 to `short` to the corresponding methods that take an `int`).

> *Since 23*
