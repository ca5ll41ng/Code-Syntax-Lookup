---
id: "java-en-function-strictmath-pow"
language: "java"
lang: "en"
category: "function"
name: "StrictMath.pow"
signature: "public static double pow(double a, double b)"
title: "StrictMath.pow"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StrictMath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StrictMath.pow

```java
public static double pow(double a, double b)
```

Returns the value of the first argument raised to the power of the
 second argument. Special cases:

 
- If the second argument is positive or negative zero, then the
 result is 1.0.
 
- If the second argument is 1.0, then the result is the same as the
 first argument.
 
- If the second argument is NaN, then the result is NaN.
 
- If the first argument is NaN and the second argument is nonzero,
 then the result is NaN.

 
- If
 
 
- the absolute value of the first argument is greater than 1
 and the second argument is positive infinity, or
 
- the absolute value of the first argument is less than 1 and
 the second argument is negative infinity,
 

 then the result is positive infinity.

 
- If
 
 
- the absolute value of the first argument is greater than 1 and
 the second argument is negative infinity, or
 
- the absolute value of the
 first argument is less than 1 and the second argument is positive
 infinity,
 

 then the result is positive zero.

 
- If the absolute value of the first argument equals 1 and the
 second argument is infinite, then the result is NaN.

 
- If
 
 
- the first argument is positive zero and the second argument
 is greater than zero, or
 
- the first argument is positive infinity and the second
 argument is less than zero,
 

 then the result is positive zero.

 
- If
 
 
- the first argument is positive zero and the second argument
 is less than zero, or
 
- the first argument is positive infinity and the second
 argument is greater than zero,
 

 then the result is positive infinity.

 
- If
 
 
- the first argument is negative zero and the second argument
 is greater than zero but not a finite odd integer, or
 
- the first argument is negative infinity and the second
 argument is less than zero but not a finite odd integer,
 

 then the result is positive zero.

 
- If
 
 
- the first argument is negative zero and the second argument
 is a positive finite odd integer, or
 
- the first argument is negative infinity and the second
 argument is a negative finite odd integer,
 

 then the result is negative zero.

 
- If
 
 
- the first argument is negative zero and the second argument
 is less than zero but not a finite odd integer, or
 
- the first argument is negative infinity and the second
 argument is greater than zero but not a finite odd integer,
 

 then the result is positive infinity.

 
- If
 
 
- the first argument is negative zero and the second argument
 is a negative finite odd integer, or
 
- the first argument is negative infinity and the second
 argument is a positive finite odd integer,
 

 then the result is negative infinity.

 
- If the first argument is finite and less than zero
 
 
-  if the second argument is a finite even integer, the
 result is equal to the result of raising the absolute value of
 the first argument to the power of the second argument

 
- if the second argument is a finite odd integer, the result
 is equal to the negative of the result of raising the absolute
 value of the first argument to the power of the second
 argument

 
- if the second argument is finite and not an integer, then
 the result is NaN.
 

 
- If both arguments are integers, then the result is exactly equal
 to the mathematical result of raising the first argument to the power
 of the second argument if that result can in fact be represented
 exactly as a `double` value.

 

(In the foregoing descriptions, a floating-point value is
 considered to be an integer if and only if it is finite and a
 fixed point of the method `ceil ceil` or,
 equivalently, a fixed point of the method `floor
 floor`. A value is a fixed point of a one-argument
 method if and only if the result of applying the method to the
 value is equal to the value.)

 The special cases definitions of this method differ from the
 special case definitions of the IEEE 754 recommended `pow` operation for &plusmn;`1.0` raised to an infinite
 power. This method treats such cases as indeterminate and
 specifies a NaN is returned. The IEEE 754 specification treats
 the infinite power as a large integer (large-magnitude
 floating-point numbers are numerically integers, specifically
 even integers) and therefore specifies `1.0` be returned.

**参数**

- **a** — base.
- **b** — the exponent.

**返回**

- the value `a``b`.
