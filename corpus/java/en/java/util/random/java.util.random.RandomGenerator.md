---
id: "java-en-function-java-util-random-randomgenerator"
language: "java"
lang: "en"
category: "function"
name: "java.util.random.RandomGenerator"
title: "RandomGenerator"
directive: "type"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomGenerator

The `RandomGenerator` interface is designed to provide a common
 protocol for objects that generate random or (more typically) pseudorandom
 sequences of numbers (or Boolean values). Such a sequence may be obtained by
 either repeatedly invoking a method that returns a single pseudorandomly
 chosen value, or by invoking a method that returns a stream of
 pseudorandomly chosen values.

 

 Ideally, given an implicitly or explicitly specified range of values,
 each value would be chosen independently and uniformly from that range. In
 practice, one may have to settle for some approximation to independence and
 uniformity.

 

 In the case of `int`, `long`, and `boolean` values, if
 there is no explicit specification of range, then the range includes all
 possible values of the type. In the case of `float` and `double`
 values, first a value is always chosen uniformly from the set of
 2w values between 0.0 (inclusive) and 1.0 (exclusive),
 where w is `PRECISION` for `float` values
 and `PRECISION` for `double`
 values, such that adjacent values differ by 2&minus;w
 (notice that this set is a subset of the set of
 all representable floating-point values between 0.0 (inclusive) and 1.0 (exclusive));
 then if an explicit range was specified, then the chosen number is
 computationally scaled and translated so as to appear to have been chosen
 approximately uniformly from that explicit range.

 

 Each method that returns a stream produces a stream of values each of
 which is chosen in the same manner as for a method that returns a single
 pseudorandomly chosen value. For example, if `r` implements
 `RandomGenerator`, then the method call `r.ints(100)` returns a
 stream of 100 `int` values. These are not necessarily the exact same
 values that would have been returned if instead `r.nextInt()` had been
 called 100 times; all that is guaranteed is that each value in the stream is
 chosen in a similar pseudorandom manner from the same range.

 

 Every object that implements the `RandomGenerator` interface by
 using a pseudorandom algorithm is assumed to contain a finite amount of
 state. Using such an object to generate a pseudorandomly chosen value alters
 its state by computing a new state as a function of the current state,
 without reference to any information other than the current state. The number
 of distinct possible states of such an object is called its period.
 (Some implementations of the `RandomGenerator` interface may be truly
 random rather than pseudorandom, for example relying on the statistical
 behavior of a physical object to derive chosen values. Such implementations
 do not have a fixed period.)

 

 As a rule, objects that implement the `RandomGenerator` interface
 need not be thread-safe. It is recommended that multithreaded applications
 use either `ThreadLocalRandom` or (preferably) pseudorandom number
 generators that implement the `SplittableGenerator` or
 `JumpableGenerator` interface.

 

 Objects that implement `RandomGenerator` are typically not
 cryptographically secure. Consider instead using `SecureRandom` to get
 a cryptographically secure pseudorandom number generator for use by
 security-sensitive applications. Note, however, that `SecureRandom`
 does implement the `RandomGenerator` interface, so that instances of
 `SecureRandom` may be used interchangeably with other types of
 pseudorandom generators in applications that do not require a secure
 generator.

 

Unless explicit stated otherwise, the use of null for any method argument
 will cause a NullPointerException.

> *Since 17*
