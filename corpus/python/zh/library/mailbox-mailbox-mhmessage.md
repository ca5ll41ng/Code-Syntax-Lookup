---
id: "python-zh-function-mailbox-mhmessage"
language: "python"
lang: "zh"
category: "function"
name: "MHMessage"
signature: "MHMessage(message=None)"
directive: "class"
module: "mailbox"
source_url: "https://docs.python.org/zh-cn/3/library/mailbox.html#mailbox.MHMessage"
license: "PSF"
updated: "2026-10-01"
---

# MHMessage

A message with MH-specific behaviors. Parameter *message* has the same meaning
as with the `Message` constructor.

MH messages do not support marks or flags in the traditional sense, but they
do support sequences, which are logical groupings of arbitrary messages. Some
mail reading programs (although not the standard `mh` and
`nmh`) use sequences in much the same way flags are used with other
formats, as follows:

+----------+------------------------------------------+
 Sequence  Explanation                              
+==========+==========================================+
 unseen    Not read, but previously detected by MUA 
+----------+------------------------------------------+
 replied   Replied to                               
+----------+------------------------------------------+
 flagged   Marked as important                      
+----------+------------------------------------------+

:class:`!MHMessage` 实例提供了下列方法：

method:: get_sequences()

method:: set_sequences(sequences)

method:: add_sequence(sequence)

method:: remove_sequence(sequence)
