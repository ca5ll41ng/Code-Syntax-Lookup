---
id: "java-en-function-java-util-random"
language: "java"
lang: "en"
category: "function"
name: "java.util.Random"
title: "Random"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Random.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Random

An instance of this class is used to generate a stream of
 pseudorandom numbers; its period is only 248.
 The class uses a 48-bit seed, which is
 modified using a linear congruential formula. (See Donald E. Knuth,
 The Art of Computer Programming, Volume 2, Third
 edition: Seminumerical Algorithms, Section 3.2.1.)
 

 If two instances of `Random` are created with the same
 seed, and the same sequence of method calls is made for each, they
 will generate and return identical sequences of numbers. In order to
 guarantee this property, particular algorithms are specified for the
 class `Random`. Java implementations must use all the algorithms
 shown here for the class `Random`, for the sake of absolute
 portability of Java code. However, subclasses of class `Random`
 are permitted to use other algorithms, so long as they adhere to the
 general contracts for all the methods.
 

 The algorithms implemented by class `Random` use a
 `protected` utility method that on each invocation can supply
 up to 32 pseudorandomly generated bits.
 

 Many applications will find the method `random` simpler to use.

 

Instances of `java.util.Random` are threadsafe.
 However, the concurrent use of the same `java.util.Random`
 instance across threads may encounter contention and consequent
 poor performance. Consider instead using
 `java.util.concurrent.ThreadLocalRandom` in multithreaded
 designs.

 

Instances of `java.util.Random` are not cryptographically
 secure.  Consider instead using `java.security.SecureRandom` to
 get a cryptographically secure pseudo-random number generator for use
 by security-sensitive applications.

> *Since 1.0*
