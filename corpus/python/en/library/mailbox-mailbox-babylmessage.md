---
id: "python-en-function-mailbox-babylmessage"
language: "python"
lang: "en"
category: "function"
name: "BabylMessage"
signature: "BabylMessage(message=None)"
directive: "class"
module: "mailbox"
source_url: "https://docs.python.org/3/library/mailbox.html#mailbox.BabylMessage"
license: "PSF"
updated: "2026-10-01"
---

# BabylMessage

A message with Babyl-specific behaviors. Parameter *message* has the same
meaning as with the `Message` constructor.

Certain message labels, called `attributes`, are defined by convention
to have special meanings. The attributes are as follows:

+-----------+------------------------------------------+
 Label      Explanation                              
+===========+==========================================+
 unseen     Not read, but previously detected by MUA 
+-----------+------------------------------------------+
 deleted    Marked for subsequent deletion           
+-----------+------------------------------------------+
 filed      Copied to another file or mailbox        
+-----------+------------------------------------------+
 answered   Replied to                               
+-----------+------------------------------------------+
 forwarded  Forwarded                                
+-----------+------------------------------------------+
 edited     Modified by the user                     
+-----------+------------------------------------------+
 resent     Resent                                   
+-----------+------------------------------------------+

By default, Rmail displays only visible headers. The `BabylMessage`
class, though, uses the original headers because they are more
complete. Visible headers may be accessed explicitly if desired.

`BabylMessage` instances offer the following methods:

method:: get_labels()

method:: set_labels(labels)

method:: add_label(label)

method:: remove_label(label)

method:: get_visible()

method:: set_visible(visible)

method:: update_visible()
