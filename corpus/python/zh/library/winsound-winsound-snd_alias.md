---
id: "python-zh-function-winsound-snd_alias"
language: "python"
lang: "zh"
category: "function"
name: "SND_ALIAS"
directive: "data"
module: "winsound"
source_url: "https://docs.python.org/zh-cn/3/library/winsound.html#winsound.SND_ALIAS"
license: "PSF"
updated: "2026-10-01"
---

# SND_ALIAS

The *sound* parameter is a sound association name from the registry.  If the
registry contains no such name, play the system default sound unless
`SND_NODEFAULT` is also specified. If no default sound is registered,
raise `RuntimeError`. Do not use with `SND_FILENAME`.

All Win32 systems support at least the following; most systems support many
more:

+--------------------------+----------------------------------------+
 `PlaySound` *name*  Corresponding Control Panel Sound name 
+==========================+========================================+
 `'SystemAsterisk'`      Asterisk                               
+--------------------------+----------------------------------------+
 `'SystemExclamation'`   Exclamation                            
+--------------------------+----------------------------------------+
 `'SystemExit'`          Exit Windows                           
+--------------------------+----------------------------------------+
 `'SystemHand'`          Critical Stop                          
+--------------------------+----------------------------------------+
 `'SystemQuestion'`      Question                               
+--------------------------+----------------------------------------+

例如::

   import winsound
   # Play Windows exit sound.
   winsound.PlaySound("SystemExit", winsound.SND_ALIAS)

   # Probably play Windows default sound, if any is registered (because
   # "*" probably isn't the registered name of any sound).
   winsound.PlaySound("*", winsound.SND_ALIAS)
