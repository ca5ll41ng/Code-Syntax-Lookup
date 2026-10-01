---
id: "python-zh-function-mailbox-maildirmessage"
language: "python"
lang: "zh"
category: "function"
name: "MaildirMessage"
signature: "MaildirMessage(message=None)"
directive: "class"
module: "mailbox"
source_url: "https://docs.python.org/zh-cn/3/library/mailbox.html#mailbox.MaildirMessage"
license: "PSF"
updated: "2026-10-01"
---

# MaildirMessage

A message with Maildir-specific behaviors. Parameter *message* has the same
meaning as with the `Message` constructor.

Typically, a mail user agent application moves all of the messages in the
`new` subdirectory to the `cur` subdirectory after the first time
the user opens and closes the mailbox, recording that the messages are old
whether or not they've actually been read. Each message in `cur` has an
"info" section added to its file name to store information about its state.
(Some mail readers may also add an "info" section to messages in
`new`.)  The "info" section may take one of two forms: it may contain
"2," followed by a list of standardized flags (e.g., "2,FR") or it may
contain "1," followed by so-called experimental information. Standard flags
for Maildir messages are as follows:

+------+---------+--------------------------------+
 Flag  Meaning  Explanation                    
+======+=========+================================+
 D     Draft    Under composition              
+------+---------+--------------------------------+
 F     Flagged  Marked as important            
+------+---------+--------------------------------+
 P     Passed   Forwarded, resent, or bounced  
+------+---------+--------------------------------+
 R     Replied  Replied to                     
+------+---------+--------------------------------+
 S     Seen     Read                           
+------+---------+--------------------------------+
 T     Trashed  Marked for subsequent deletion 
+------+---------+--------------------------------+

:class:`!MaildirMessage` 实例提供了下列方法：

method:: get_subdir()

method:: set_subdir(subdir)

method:: get_flags()

method:: set_flags(flags)

method:: add_flag(flag)

method:: remove_flag(flag)

method:: get_date()

method:: set_date(date)

method:: get_info()

method:: set_info(info)
