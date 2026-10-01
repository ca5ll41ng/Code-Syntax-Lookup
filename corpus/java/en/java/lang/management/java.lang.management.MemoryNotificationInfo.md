---
id: "java-en-function-java-lang-management-memorynotificationinfo"
language: "java"
lang: "en"
category: "function"
name: "java.lang.management.MemoryNotificationInfo"
title: "MemoryNotificationInfo"
directive: "type"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryNotificationInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryNotificationInfo

The information about a memory notification.

 

 A memory notification is emitted by `MemoryMXBean`
 when the Java virtual machine detects that the memory usage
 of a memory pool is exceeding a threshold value.
 The notification emitted will contain the memory notification
 information about the detected condition:
 
   
- The name of the memory pool.
   
- The memory usage of the memory pool when the notification
       was constructed.
   
- The number of times that the memory usage has crossed
       a threshold when the notification was constructed.
       For usage threshold notifications, this count will be the
       `getUsageThresholdCount usage threshold
       count`.  For collection threshold notifications,
       this count will be the
       `getCollectionUsageThresholdCount
       collection usage threshold count`.
       
 

 

 A `CompositeData CompositeData` representing
 the `MemoryNotificationInfo` object
 is stored in the
 `setUserData user data`
 of a `javax.management.Notification notification`.
 The `from from` method is provided to convert from
 a `CompositeData` to a `MemoryNotificationInfo`
 object. For example:

 
```

      Notification notif;

      // receive the notification emitted by MemoryMXBean and set to notif
      ...

      String notifType = notif.getType();
      if (notifType.equals(MemoryNotificationInfo.MEMORY_THRESHOLD_EXCEEDED) ||
          notifType.equals(MemoryNotificationInfo.MEMORY_COLLECTION_THRESHOLD_EXCEEDED)) {
          // retrieve the memory notification information
          CompositeData cd = (CompositeData) notif.getUserData();
          MemoryNotificationInfo info = MemoryNotificationInfo.from(cd);
          ....
      }
 
```

 

 The types of notifications emitted by `MemoryMXBean` are:
 
   
- A `MEMORY_THRESHOLD_EXCEEDED
       usage threshold exceeded notification`.
       
This notification will be emitted when
       the memory usage of a memory pool is increased and has reached
       or exceeded its
        usage threshold value.
       Subsequent crossing of the usage threshold value does not cause
       further notification until the memory usage has returned
       to become less than the usage threshold value.
       
   
- A `MEMORY_COLLECTION_THRESHOLD_EXCEEDED
       collection usage threshold exceeded notification`.
       
This notification will be emitted when
       the memory usage of a memory pool is greater than or equal to its
       
       collection usage threshold after the Java virtual machine
       has expended effort in recycling unused objects in that
       memory pool.

> *Since 1.5*
