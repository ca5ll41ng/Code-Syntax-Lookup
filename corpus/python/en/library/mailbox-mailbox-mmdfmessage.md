---
id: "python-en-function-mailbox-mmdfmessage"
language: "python"
lang: "en"
category: "function"
name: "MMDFMessage"
signature: "MMDFMessage(message=None)"
directive: "class"
module: "mailbox"
source_url: "https://docs.python.org/3/library/mailbox.html#mailbox.MMDFMessage"
license: "PSF"
updated: "2026-10-01"
---

# MMDFMessage

A message with MMDF-specific behaviors. Parameter *message* has the same meaning
as with the `Message` constructor.

As with message in an mbox mailbox, MMDF messages are stored with the
sender's address and the delivery date in an initial line beginning with
"From ".  Likewise, flags that indicate the state of the message are
typically stored in `Status` and `X-Status` headers.

Conventional flags for MMDF messages are identical to those of mbox message
and are as follows:

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

`MMDFMessage` instances offer the following methods, which are
identical to those offered by `mboxMessage`:

method:: get_from()

method:: set_from(from_, time_=None)

method:: get_flags()

method:: set_flags(flags)

method:: add_flag(flag)

method:: remove_flag(flag)
