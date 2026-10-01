---
id: "java-en-function-java-security-securerandomspi"
language: "java"
lang: "en"
category: "function"
name: "java.security.SecureRandomSpi"
title: "SecureRandomSpi"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureRandomSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureRandomSpi

This class defines the Service Provider Interface (**SPI**)
 for the `SecureRandom` class.
 

 All the abstract methods in this class must be implemented by each
 service provider who wishes to supply the implementation
 of a cryptographically strong pseudo-random number generator.

 If the `SecureRandomSpi`
 constructor is overridden in an implementation, it will always be called
 whenever a `SecureRandom` is instantiated. Precisely, if an object is
 instantiated with one of `SecureRandom`'s `getInstance` methods
 without a `SecureRandomParameters` parameter,
 the constructor will be called with a `null` argument and the
 implementation is responsible for creating its own
 `SecureRandomParameters` parameter for use when
 `engineGetParameters` is called. If an object
 is instantiated with one of `SecureRandom`'s `getInstance`
 methods with a `SecureRandomParameters` argument,
 the constructor will be called with that argument. The
 `engineGetParameters` method must not return `null`.
 

 Otherwise, if the `SecureRandomSpi(SecureRandomParameters)`
 constructor is not overridden in an implementation, the
 `SecureRandomSpi` constructor must be overridden, and it will be
 called if an object is instantiated with one of `SecureRandom`'s
 `getInstance` methods without a
 `SecureRandomParameters` argument. Calling one of
 `SecureRandom`'s `getInstance` methods with
 a `SecureRandomParameters` argument will never
 return an instance of this implementation. The
 `engineGetParameters` method must return `null`.
 

 See `SecureRandom` for additional details on thread safety. By
 default, a `SecureRandomSpi` implementation is considered to be
 not safe for use by multiple concurrent threads and `SecureRandom`
 will synchronize access to each of the applicable engine methods
 (see `SecureRandom` for the list of methods). However, if a
 `SecureRandomSpi` implementation is thread-safe, the 
 service provider attribute "ThreadSafe" should be set to "true" during
 its registration, as follows:
 
```

 put("SecureRandom.AlgName ThreadSafe", "true");
```

 
 or
 
```

 putService(new Service(this, "SecureRandom", "AlgName", className,
          null, Map.of("ThreadSafe", "true")));
```

 
 `SecureRandom` will call the applicable engine methods
 without any synchronization.

> *Since 1.2*
