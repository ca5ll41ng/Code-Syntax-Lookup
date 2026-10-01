---
id: "java-en-function-java-time-clock"
language: "java"
lang: "en"
category: "function"
name: "java.time.Clock"
title: "Clock"
directive: "type"
module: "java.base/java.time"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/Clock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Clock

A clock providing access to the current instant, date and time using a time-zone.
 

 Instances of this abstract class are used to access a pluggable representation of the
 current instant, which can be interpreted using the stored time-zone to find the
 current date and time.
 For example, `Clock` can be used instead of `currentTimeMillis`
 and `getDefault`.
 

 Use of a `Clock` is optional. All key date-time classes also have a
 `now()` factory method that uses the system clock in the default time zone.
 The primary purpose of this abstraction is to allow alternate clocks to be
 plugged in as and when required. Applications use an object to obtain the
 current time rather than a static method. This can simplify testing.
 

 As such, this abstract class does not guarantee the result actually represents the current instant
 on the time-line. Instead, it allows the application to provide a controlled view as to what
 the current instant and time-zone are.
 

 Best practice for applications is to pass a `Clock` into any method
 that requires the current instant and time-zone. A dependency injection framework
 is one way to achieve this:
 
```

  public class MyBean {
    private Clock clock;  // dependency inject
    ...
    public void process(LocalDate eventDate) {
      if (eventDate.isBefore(LocalDate.now(clock)) {
        ...
      }
    }
  }
 
```

 This approach allows an alternative clock, such as `fixed(Instant, ZoneId) fixed`
 or `offset(Clock, Duration) offset` to be used during testing.
 

 The `system` factory methods provide clocks based on the best available
 system clock. This may use `currentTimeMillis`, or a higher
 resolution clock if one is available.

 This abstract class must be implemented with care to ensure other classes operate correctly.
 All implementations must be thread-safe - a single instance must be capable of be invoked
 from multiple threads without negative consequences such as race conditions.
 

 The principal methods are defined to allow the throwing of an exception.
 In normal use, no exceptions will be thrown, however one possible implementation would be to
 obtain the time from a central time server across the network. Obviously, in this case the
 lookup could fail, and so the method is permitted to throw an exception.
 

 The returned instants from `Clock` work on a time-scale that ignores leap seconds,
 as described in `Instant`. If the implementation wraps a source that provides leap
 second information, then a mechanism should be used to "smooth" the leap second.
 The Java Time-Scale mandates the use of UTC-SLS, however clock implementations may choose
 how accurate they are with the time-scale so long as they document how they work.
 Implementations are therefore not required to actually perform the UTC-SLS slew or to
 otherwise be aware of leap seconds.
 

 Implementations should implement `Serializable` wherever possible and must
 document whether or not they do support serialization.

**参见**

- InstantSource

> *Since 1.8*
