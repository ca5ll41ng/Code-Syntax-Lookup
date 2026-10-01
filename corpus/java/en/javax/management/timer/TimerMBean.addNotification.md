---
id: "java-en-function-timermbean-addnotification"
language: "java"
lang: "en"
category: "function"
name: "TimerMBean.addNotification"
signature: "public Integer addNotification(String type, String message, Object userData, Date date, long period, long nbOccurences, boolean fixedRate) throws java.lang.IllegalArgumentException"
title: "TimerMBean.addNotification"
directive: "method"
module: "java.management/javax.management.timer"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/timer/TimerMBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimerMBean.addNotification

```java
public Integer addNotification(String type, String message, Object userData, Date date, long period, long nbOccurences, boolean fixedRate) throws java.lang.IllegalArgumentException
```

Creates a new timer notification with the specified type, message
 and userData and inserts it into the list of notifications with a given date,
 period and number of occurrences.
 

 If the timer notification to be inserted has a date that is before the current date,
 the method behaves as if the specified date were the current date. 

 For once-off notifications, the notification is delivered immediately. 

 For periodic notifications, the first notification is delivered immediately and the
 subsequent ones are spaced as specified by the period parameter.
 

 Note that once the timer notification has been added into the list of notifications,
 its associated date, period and number of occurrences cannot be updated.
 

 In the case of a periodic notification, the value of parameter fixedRate is used to
 specify the execution scheme, as specified in `java.util.Timer`.

**参数**

- **type** — The timer notification type.
- **message** — The timer notification detailed message.
- **userData** — The timer notification user data object.
- **date** — The date when the notification occurs.
- **period** — The period of the timer notification (in milliseconds).
- **nbOccurences** — The total number the timer notification will be emitted.
- **fixedRate** — If true and if the notification is periodic, the notification is scheduled with a fixed-rate execution scheme. If false and if the notification is periodic, the notification is scheduled with a fixed-delay execution scheme. Ignored if the notification is not periodic.

**返回**

- The identifier of the new created timer notification.

**异常**

- **java.lang.IllegalArgumentException** — The date is `null` or the period or the number of occurrences is negative.

**参见**

- #addNotification(String, String, Object, Date, long, long)
