---
id: "java-en-function-java-security-securerandom"
language: "java"
lang: "en"
category: "function"
name: "java.security.SecureRandom"
title: "SecureRandom"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureRandom.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureRandom

This class provides a cryptographically strong random number
 generator (RNG).

 

A cryptographically strong random number minimally complies with the
 statistical random number generator tests specified in
 
 FIPS 140-2, Security Requirements for Cryptographic Modules,
 section 4.9.1.
 Additionally, `SecureRandom` must produce non-deterministic output.
 Therefore, any seed material passed to a `SecureRandom` object must be
 unpredictable, and all `SecureRandom` output sequences must be
 cryptographically strong, as described in
 
 RFC 4086: Randomness Requirements for Security.

 

 Many `SecureRandom` implementations are in the form of a
 pseudo-random number generator (PRNG, also known as deterministic random
 bits generator or DRBG), which means they use a deterministic algorithm
 to produce a pseudo-random sequence from a random seed.
 Other implementations may produce true random numbers,
 and yet others may use a combination of both techniques.

 

A caller obtains a `SecureRandom` instance via the
 no-argument constructor or one of the `getInstance` methods.
 For example:

 
```

 SecureRandom r1 = new SecureRandom();
 SecureRandom r2 = SecureRandom.getInstance("NativePRNG");
 SecureRandom r3 = SecureRandom.getInstance("DRBG",
         DrbgParameters.instantiation(128, RESEED_ONLY, null));
```

 

 

 The third statement above returns a `SecureRandom` object of the
 specific algorithm supporting the specific instantiate parameters. The
 implementation's effective instantiated parameters must match this minimum
 request but is not necessarily the same. For example, even if the request
 does not require a certain feature, the actual instantiation can provide
 the feature. An implementation may lazily instantiate a `SecureRandom`
 until it's actually used, but the effective instantiate parameters must be
 determined right after it's created and `getParameters` should
 always return the same result unchanged.

 

 Typical callers of `SecureRandom` invoke the following methods
 to retrieve random bytes:

 
```

 SecureRandom random = new SecureRandom();
 byte[] bytes = new byte[20];
 random.nextBytes(bytes);
```

 

 

 Callers may also invoke the `generateSeed` method
 to generate a given number of seed bytes (to seed other random number
 generators, for example):

 
```

 byte[] seed = random.generateSeed(20);
```

 

 

 A newly created PRNG `SecureRandom` object is not seeded (except
 if it is created by `SecureRandom`). The first call to
 `nextBytes` will force it to seed itself from an implementation-
 specific entropy source. This self-seeding will not occur if `setSeed`
 was previously called.

 

 A `SecureRandom` can be reseeded at any time by calling the
 `reseed` or `setSeed` method. The `reseed` method
 reads entropy input from its entropy source to reseed itself.
 The `setSeed` method requires the caller to provide the seed.

 

 Please note that `reseed` may not be supported by all
 `SecureRandom` implementations.

 

 Some `SecureRandom` implementations may accept a
 `SecureRandomParameters` parameter in its
 `nextBytes` and
 `reseed` methods to further
 control the behavior of the methods.

 

 Note: Depending on the implementation, the `generateSeed`,
 `reseed` and `nextBytes` methods may block as entropy is being
 gathered, for example, if the entropy source is /dev/random on various
 Unix-like operating systems.

  Thread safety 
 `SecureRandom` objects are safe for use by multiple concurrent threads.

 A `SecureRandom` service provider can advertise that it is thread-safe
 by setting the service
 provider attribute "ThreadSafe" to "true" when registering the provider.
 Otherwise, this class will instead synchronize access to the following
 methods of the `SecureRandomSpi` implementation:
 
 
- `engineSetSeed`
 
- `engineNextBytes`
 
- `engineNextBytes`
 
- `engineGenerateSeed`
 
- `engineReseed`
 

      RFC 4086: Randomness Requirements for Security
      Security Requirements for Cryptographic Modules

**参见**

- java.security.SecureRandomSpi
- java.util.Random

> *Since 1.1*
