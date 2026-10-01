---
id: "python-zh-function-mailbox-mboxmessage"
language: "python"
lang: "zh"
category: "function"
name: "mboxMessage"
signature: "mboxMessage(message=None)"
directive: "class"
module: "mailbox"
source_url: "https://docs.python.org/zh-cn/3/library/mailbox.html#mailbox.mboxMessage"
license: "PSF"
updated: "2026-10-01"
---

# mboxMessage

A message with mbox-specific behaviors. Parameter *message* has the same meaning
as with the `Message` constructor.

Messages in an mbox mailbox are stored together in a single file. The
sender's envelope address and the time of delivery are typically stored in a
line beginning with "From " that is used to indicate the start of a message,
though there is considerable variation in the exact format of this data among
mbox implementations. Flags that indicate the state of the message, such as
whether it has been read or marked as important, are typically stored in
`Status` and `X-Status` headers.

传统的 mbox 消息旗标如下:

+------+----------+--------------------------------+
 Flag  Meaning   Explanation                    
+======+==========+================================+
 R     Read      Read                           
+------+----------+--------------------------------+
 O     Old       Previously detected by MUA     
+------+----------+--------------------------------+
 D     Deleted   Marked for subsequent deletion 
+------+----------+--------------------------------+
 F     Flagged   Marked as important            
+------+----------+--------------------------------+
 A     Answered  Replied to                     
+------+----------+--------------------------------+

The "R" and "O" flags are stored in the `Status` header, and the
"D", "F", and "A" flags are stored in the `X-Status` header. The
flags and headers typically appear in the order mentioned.

:class:`!mboxMessage` 实例提供了下列方法：

method:: get_from()

method:: set_from(from_, time_=None)

method:: get_flags()

method:: set_flags(flags)

method:: add_flag(flag)

method:: remove_flag(flag)
