---
id: "java-en-function-java-time-instantsource"
language: "java"
lang: "en"
category: "function"
name: "java.time.InstantSource"
title: "InstantSource"
directive: "type"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/InstantSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InstantSource

Provides access to the current instant.
 

 Instances of this interface are used to access a pluggable representation of the current instant.
 For example, `InstantSource` can be used instead of `currentTimeMillis`.
 

 The primary purpose of this abstraction is to allow alternate instant sources to be
 plugged in as and when required. Applications use an object to obtain the
 current time rather than a static method. This can simplify testing.
 

 As such, this interface does not guarantee the result actually represents the current instant
 on the time-line. Instead, it allows the application to provide a controlled view as to what
 the current instant is.
 

 Best practice for applications is to pass an `InstantSource` into any method
 that requires the current instant. A dependency injection framework is one
 way to achieve this:
 
```

  public class MyBean {
    private InstantSource source;  // dependency inject
    ...
    public void process(Instant endInstant) {
      if (source.instant().isAfter(endInstant) {
        ...
      }
    }
  }
 
```

 This approach allows an alternative source, such as `fixed(Instant) fixed`
 or `offset(InstantSource, Duration) offset` to be used during testing.
 

 The `system` factory method provides a source based on the best available
 system clock. This may use `currentTimeMillis`, or a higher
 resolution clock if one is available.

 This interface must be implemented with care to ensure other classes operate correctly.
 All implementations must be thread-safe - a single instance must be capable of be invoked
 from multiple threads without negative consequences such as race conditions.
 

 The principal methods are defined to allow the throwing of an exception.
 In normal use, no exceptions will be thrown, however one possible implementation would be to
 obtain the time from a central time server across the network. Obviously, in this case the
 lookup could fail, and so the method is permitted to throw an exception.
 

 The returned instants from `InstantSource` work on a time-scale that ignores leap seconds,
 as described in `Instant`. If the implementation wraps a source that provides leap
 second information, then a mechanism should be used to "smooth" the leap second.
 The Java Time-Scale mandates the use of UTC-SLS, however implementations may choose
 how accurate they are with the time-scale so long as they document how they work.
 Implementations are therefore not required to actually perform the UTC-SLS slew or to
 otherwise be aware of leap seconds.
 

 Implementations should implement `Serializable` wherever possible and must
 document whether or not they do support serialization.

 The implementation provided here is based on the same underlying system clock
 as `currentTimeMillis`, but may have a precision finer than
 milliseconds if available.
 However, little to no guarantee is provided about the accuracy of the
 underlying system clock. Applications requiring a more accurate system clock must
 implement this abstract class themselves using a different external system clock,
 such as an NTP server.

> *Since 17*
